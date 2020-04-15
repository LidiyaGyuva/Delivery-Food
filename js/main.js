const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
close.addEventListener('click', toggleModal);
cartButton.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();