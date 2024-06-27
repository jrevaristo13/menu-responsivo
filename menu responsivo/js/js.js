var menu = document.querySelector('header ul');
var menuBar = document.querySelector('header .menu-icon');
var iconMenu = document.querySelector('header .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'img/menu.png') {
        iconMenu.setAttribute("src","img/menu.png");
    }else{
        iconMenu.setAttribute("src","img/menu.png");
    }

   menu.classList.toggle('active');
});

