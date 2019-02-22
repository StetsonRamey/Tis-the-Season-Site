// grab DOM items for Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.SiteHeader-nav');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuItems = document.querySelectorAll('.menu-item');

// set initial state (closed) of the mobile menu
let showMenu = false;

// create listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // if the menu gets shown, set the state and add the classes to display the styling
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    menuItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    // if the menu gets closed, then reset the state and kill the classes to remove everything
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}
