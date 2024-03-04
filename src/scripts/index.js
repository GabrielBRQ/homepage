import _, { entries } from 'lodash';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('nav_check');
    var closeButton = document.querySelector('.close-button');
    var leftElement = document.querySelector('.left');
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {observer.observe(el)});

    checkbox.addEventListener('change', function () {
        leftElement.style.left = '0';
    });

    closeButton.addEventListener('click', function () {
        leftElement.style.left = '';
    });
});