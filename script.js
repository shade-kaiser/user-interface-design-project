// As stated in the project requirements back-end code can be open-sourced.
// I got this code from this video: https://www.youtube.com/watch?v=TAB_v6yBXIE
// - Shade

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.modal__open');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})