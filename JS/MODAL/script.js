'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal')
const btnShowModel = document.querySelectorAll('.show-modal')


const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModel.length; i++){
    btnShowModel[i].addEventListener('click', openModal);
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModal)

overlay.addEventListener('click',  closeModal)


