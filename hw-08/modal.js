/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import refs from './refs.js';

const modal = {
  modalWindow: refs.modal,
  maxPosition: 0,
  minPosition: 0,
  position: 0,

  _getMaxPosition() {
    modal.maxPosition = document.querySelectorAll('.gallery__image').length - 1;
  },
  show(image, position) {
    refs.modalImage.src = image;
    modal.position = position;
    !refs.modal.classList.contains('is-open')
      && refs.modal.classList.add('is-open');
  },
  hide() {
    this.modalWindow.classList.remove('is-open');
    refs.modalImage.src = '';
  },
};

const modalHandleClick = (e) => {
  if (
    e.target !== refs.modalImage
    || e.target.closest('[data-action=close-lightbox]')
  ) {
    modal.hide();
  }
};
const modalHandleKeysUp = (e) => {
  console.log(e);
  if (refs.modal.classList.contains('is-open')) {
    if (e.code === 'Escape') {
      modal.hide();
    }
    if (e.code === 'ArrowLeft' && +modal.position !== modal.minPosition) {
      const newImage = document.querySelector(
        `.gallery__image[data-position="${modal.position - 1}"]`,
      );
      modal.show(newImage.dataset.source, modal.position - 1);
    }
    if (e.code === 'ArrowRight' && +modal.position !== modal.maxPosition) {
      const newImage = document.querySelector(
        `.gallery__image[data-position="${+modal.position + 1}"]`,
      );
      modal.show(newImage.dataset.source, +modal.position + 1);
    }
  }
};
modal.modalWindow.addEventListener('click', modalHandleClick);
document.addEventListener('keyup', modalHandleKeysUp);

export default modal;
