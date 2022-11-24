"use strict";
let content = document.querySelector('.content');

if (window.innerWidth >= 1200) {
    let widthRes = window.innerWidth - 320;
    content.style.width = widthRes + 'px';
}

window.addEventListener('resize', changeSize);
function changeSize() {
    if (window.innerWidth >= 1200) {
        let widthRes = window.innerWidth - 320;
        content.style.width = widthRes + 'px';
    } else {
        content.style.width = "auto";
    }
}