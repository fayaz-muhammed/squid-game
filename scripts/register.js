document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;

  // Simulate form submission
  alert(`Thank you, ${name}! You have successfully registered for Squid Game.`);
  window.location.href = 'index.html';
});
