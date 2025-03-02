// Countdown Timer
const countdown = document.getElementById('countdown');
const deadline = new Date('2023-12-31T23:59:59').getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = deadline - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `Registration ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(timer);
    countdown.innerHTML = 'Registration Closed!';
  }
}, 1000);
