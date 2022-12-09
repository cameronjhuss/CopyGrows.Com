const hamburgerMenuContainer = document.querySelector('#header-main-nav');
const hamburgerMenu =document.querySelector('.header-main-nav-hamburger');
const links =document.querySelectorAll('.main-nav-links li');
const mybutton = document.getElementById("up-Btn");

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenuContainer.classList.toggle('show');
    links.forEach((link)=> {
        link.classList.toggle('fade');
    })
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}