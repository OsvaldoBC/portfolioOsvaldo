const openMenu = document.querySelector('.box-menu');
const modalMenu = document.querySelector('.box-menu-1');
openMenu.addEventListener('click', () => {
  modalMenu.style.left = 0;
});

const closeMenu = document.querySelector('.close_menu');

closeMenu.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

const itemPortfolio = document.querySelector('.itemPortfolio');
const itemAboutme = document.querySelector('.itemAboutme');
const itemContact = document.querySelector('.itemContact');

itemPortfolio.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

itemAboutme.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});

itemContact.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});
