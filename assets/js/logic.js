// Menu Functionality
const sideMenu = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideMenu, {edge: 'right', inDuration: 500, outDuration: 500});

const pllax = document.querySelectorAll('.parallax');
M.Para.init(pllax, {responsiveTheshold: 0});