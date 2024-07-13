'use strict';

// Select elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Attach event listeners to all buttons that open the modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Attach event listener to the button that closes the modal
btnCloseModal.addEventListener('click', closeModal);

// Attach event listener to the overlay to close the modal when clicked
overlay.addEventListener('click', closeModal);

// Attach event listener to the document to close the modal on 'Escape' key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});