let aBlock = document.querySelector('.top-line');
let bBlock = document.querySelector('.final-menu');
let cBlock = document.querySelector('.menu-button');
let compName = document.querySelector('.compName');
let contents = document.querySelector('.content');

cBlock.addEventListener('click', menuClick);
contents.addEventListener('click', contentsClick)

window.addEventListener('scroll', () => {
    if (window.pageYOffset < 75 ) {
        if (compName.id == 'nameClicked') {
            compName.style.position = 'absolute';
        } else {
            compName.style.position = 'fixed';
        }
    }
});

function menuClick() {    
    if (aBlock.className === 'top-line top-line-clicked') {
        cBlock.setAttribute('id', 'menu-button-clicked-L');
        setTimeout (function() {
            cBlock.removeAttribute('id');
        }, 400);
        aBlock.classList.remove('top-line-clicked');
        bBlock.classList.remove('final-menu-clicked');

        compName.removeAttribute('id');
        if (window.pageYOffset > 75) {
            setTimeout (function() {
                compName.style.position = 'fixed';
            }, 250);
            
        }
    } else {
        cBlock.setAttribute('id', 'menu-button-clicked-R');
        setTimeout (function() {
            cBlock.removeAttribute('id');
        }, 400);
        aBlock.classList.add('top-line-clicked');
        bBlock.classList.add('final-menu-clicked');
        if (window.pageYOffset < 75) {
            compName.setAttribute('id', 'nameClicked');
        } else {
            compName.setAttribute('id', 'nameClicked');
            compName.style.position = 'absolute';
        }
    }
}

function contentsClick() {
    if (aBlock.className === 'top-line top-line-clicked') {
            aBlock.classList.remove('top-line-clicked');
            bBlock.classList.remove('final-menu-clicked');
            cBlock.setAttribute('id', 'menu-button-clicked-L');
            setTimeout (function() {
                cBlock.removeAttribute('id');
            }, 400);
            compName.removeAttribute('id');
            if (window.pageYOffset > 75) {
                setTimeout (function() {
                    compName.style.position = 'fixed';
                }, 250);
                
            }
    }
}