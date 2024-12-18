// Get modal and related elements
const forgotPasswordLink = document.getElementById('forgot-password');
const modal = document.getElementById('forgot-password-modal');
const closeBtn = document.querySelector('.close-btn');

// Show modal when "Forgot Password?" is clicked
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
