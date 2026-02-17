// ===== Set Countdown Date (Change this to your launch date) =====
const launchDate = new Date("March 30, 2026 18:00:00").getTime();

// ===== Countdown Function =====
const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If countdown ends
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "<h2>LAUNCHED 🚀</h2>";
    }

}, 1000);
