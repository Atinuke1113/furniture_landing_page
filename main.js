function setActive(button) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' class to the clicked button
  button.classList.add('active');
}