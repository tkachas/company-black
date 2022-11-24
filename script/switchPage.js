"use strict";
let company = document.querySelector('.company');
let about = document.querySelector('.about');
let product = document.querySelector('.product');
let contacts = document.querySelector('.contacts');


let companyButton = document.querySelector('.option-company');
let aboutButton = document.querySelector('.option-about');
let productButton = document.querySelector('.option-product');
let contactsButton = document.querySelector('.option-contacts');

document.title = "Company";
about.style.display = 'none';
product.style.display = 'none';
contacts.style.display = 'none';

companyButton.addEventListener('click', clickCompany);
aboutButton.addEventListener('click', clickAbout);
productButton.addEventListener('click', clickProduct);
contactsButton.addEventListener('click', clickContacts);


function clickCompany() {
    company.style.display = 'flex';
    about.style.display = 'none';
    product.style.display = 'none';
    contacts.style.display = 'none';

    document.title = "Company";
}

function clickAbout() {
    about.style.display = 'flex';
    company.style.display = 'none';
    product.style.display = 'none';
    contacts.style.display = 'none';

    document.title = "About";
}

function clickProduct() {
    product.style.display = 'flex';
    company.style.display = 'none';
    about.style.display = 'none';
    contacts.style.display = 'none';

    document.title = "Product";
}

function clickContacts() {
    document.title = "Contacts";

    contacts.style.display = 'flex';
    company.style.display = 'none';
    about.style.display = 'none';
    product.style.display = 'none';

}