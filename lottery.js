$(document).ready(function() {
    $("#questionMark").on("click", function() {
        let randomNum = Math.floor(Math.random() * 999999999) + 10000000;
        $("#randomNumber").prepend("<br><hr>" + randomNum);
    });
});