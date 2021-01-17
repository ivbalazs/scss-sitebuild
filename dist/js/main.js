'use strict';

function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const openButtonPrivacy = document.querySelector('.modal__open-privacy');
const openButtonTerms = document.querySelector('.modal__open-terms');
const openButtonFaq = document.querySelector('.modal__open-faq');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const closeButton = document.querySelector('.closebtn');

const giveClassFunction = (ev) => {
    ev.preventDefault();
    modal.setAttribute('class', 'modal showModal');
}
const takeAwayClassFunction = () => modal.setAttribute('class', 'modal');

openButtonPrivacy.addEventListener('click', giveClassFunction);
openButtonTerms.addEventListener('click', giveClassFunction);
openButtonFaq.addEventListener('click', giveClassFunction);
closeModal.addEventListener('click', takeAwayClassFunction);
closeButton.addEventListener('click', takeAwayClassFunction);
modal.addEventListener('click', takeAwayClassFunction);

const navbar = document.querySelector('.nav');
let sticky = navbar.offsetTop;

window.onscroll = function () {
    stickMenu()
};

function stickMenu() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}