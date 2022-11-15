let aBlock = document.querySelector('.top-line');
let bBlock = document.querySelector('.final-menu');
let cBlock = document.querySelector('.menu-button');
let compName = document.querySelector('.compName');

cBlock.addEventListener('click', menuClick);

function menuClick() {    
    if (aBlock.className === 'top-line top-line-clicked') {
        cBlock.setAttribute('id', 'menu-button-clicked-L');
        setTimeout (function() {
            cBlock.removeAttribute('id');
        }, 400);
        aBlock.classList.remove('top-line-clicked');
        bBlock.classList.remove('final-menu-clicked');
        compName.removeAttribute('id');
    } else {
        cBlock.setAttribute('id', 'menu-button-clicked-R');
        setTimeout (function() {
            cBlock.removeAttribute('id');
        }, 400);
        aBlock.classList.add('top-line-clicked');
        bBlock.classList.add('final-menu-clicked');
        compName.setAttribute('id', 'nameClicked');
    }
}