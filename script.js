// COUNTDOWN

var launchDate = new Date("Aug 15, 2026 00:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var distance = launchDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "INDOVERSE HAS BEGUN";
}

}, 1000);
