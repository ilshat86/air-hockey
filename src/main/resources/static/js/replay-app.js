
// function setConnected(connected) {
    // $("#connect").prop("disabled", connected);
    // $("#disconnect").prop("disabled", !connected);
    // if (connected) {
    //     $("#conversation").show();
    // }
    // else {
    //     $("#conversation").hide();
    // }
    // $("#userinfo").html("");
// }

function showMessage(message) {
    if (message.playStatus === 'BREAK') alert('gracias');
    statusText.text(message.playStatus);
    timeText.text(message.tick + '');
    scoreMyText.text(message.player2.score + '');
    scoreEnemyText.text(message.player1.score + '');
    enemyBat.x(message.player1.x + fieldX + batBorder).y(message.player1.y + fieldY + batBorder);
    myBat.x(message.player2.x + fieldX + batBorder).y(message.player2.y + fieldY + batBorder);
    rpuck.x(message.puck.x + message.puck.speed.x + fieldX - fieldBorder/2 - rpuckRadius).y(message.puck.y + message.puck.speed.x + fieldY - fieldBorder/2 - rpuckRadius);
}

function startReplay(id) {
    jQuery.get("/app/replay", {gameId:id});
}

$(function () {
    let gameId = $("#gameId").val();
    connect();
    openChanel(gameId, showMessage);
    startReplay(gameId);
    // $("form").on('submit', function (e) {
    //     e.preventDefault();
    // });
    // $( "#connect" ).click(function() { connect(); openChanel("demoPlay", showMessage);});
    // $( "#disconnect" ).click(function() { disconnect(); });
    // $( "#demo" ).click(function () { setDemoSay("demoPlay");});
    // $( "#insert-demo" ).click(function () { insertDemo(); });
});