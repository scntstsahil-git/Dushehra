// 🎯 Dussehra Countdown Function
function startCountdown() {

  // Event date: 20 October 2026, 21:00
  const eventDate = new Date("2026-10-20T21:00:00+05:30").getTime();

  // Countdown elements
  const timeText = document.querySelectorAll(
    "#hero-event-countdown .time-text"
  );

  function updateCountdown() {
    const now = Date.now();
    const distance = eventDate - now;

    // Event time is over
    if (distance <= 0) {
      timeText[0].textContent = "00";
      timeText[1].textContent = ":";
      timeText[2].textContent = "00";
      timeText[3].textContent = ":";
      timeText[4].textContent = "00";
      timeText[5].textContent = ":";
      timeText[6].textContent = "00";
      clearInterval(timer);
      return;
    }

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // Display countdown
    timeText[0].textContent = String(days).padStart(2, "0");
    timeText[2].textContent = String(hours).padStart(2, "0");
    timeText[4].textContent = String(minutes).padStart(2, "0");
    timeText[6].textContent = String(seconds).padStart(2, "0");
  }

  // Update immediately, then every second
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

// Start countdown
startCountdown();

