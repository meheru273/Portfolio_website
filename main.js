const navMenu = document.getElementById('nav-menu'),
navtoggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')


if(navtoggle){
    navtoggle.addEventListener('click',()=>
    {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLinks = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));
