// contact.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    const closeButton = document.querySelector('.close-button');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      modal.style.display = 'block';
      form.reset();
    });
  
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  