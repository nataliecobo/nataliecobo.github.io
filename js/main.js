// Vanilla JavaScript approach
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');

  const menuButton = document.querySelector('.js-menu-toggle');
  const closeButton = document.querySelector('.js-menu-close');
  const overlay = document.querySelector('.nav-overlay');
  const body = document.body;

  console.log('Menu button:', menuButton);
  console.log('Close button:', closeButton);
  console.log('Overlay:', overlay);

  if (menuButton) {
    console.log('Adding click listener to button');

    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('BUTTON CLICKED!');

      if (body.classList.contains('menu-open')) {
        console.log('Closing menu');
        body.classList.remove('menu-open');
      } else {
        console.log('Opening menu');
        body.classList.add('menu-open');
      }

      console.log('Body classes:', body.className);
    });
  } else {
    console.error('Menu button not found!');
  }

  // Close menu when clicking close button
  if (closeButton) {
    closeButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Close button clicked');
      body.classList.remove('menu-open');
    });
  }

  // Close menu when clicking overlay background
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        console.log('Closing menu from overlay click');
        body.classList.remove('menu-open');
      }
    });
  }
});
