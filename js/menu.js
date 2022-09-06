const openMenu = document.querySelector('.box-menu');
const modalMenu = document.querySelector('.box-menu-1');
openMenu.addEventListener('click', () => {
  modalMenu.style.left = 0;
});

const closeMenu = document.querySelector('.close_menu');
//const modalClose = document.querySelector('.box-menu-1');
closeMenu.addEventListener('click', () => {
  modalMenu.style.left = '-100%';
});
