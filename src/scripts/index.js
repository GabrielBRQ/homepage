import _ from 'lodash';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('nav_check');
    var closeButton = document.querySelector('.close-button');
    var leftElement = document.querySelector('.left');

    checkbox.addEventListener('change', function() {
        leftElement.style.left = '0';
    });

    closeButton.addEventListener('click', function (){
        leftElement.style.left = '';
    });
});