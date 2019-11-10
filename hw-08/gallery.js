/* eslint-disable no-underscore-dangle */
import createGalleryItem from './gallery-item.js';
import modal from './modal.js';
import refs from './refs.js';

const gallery = {
  _handleGalleryClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
      const originalImg = e.target.dataset.source;
      const { position } = e.target.dataset;
      modal.show(originalImg, +position);
    }
  },
  createGallery(items) {
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      items.reduce(
        (acc, { preview, original, description }, index) => acc + createGalleryItem(preview, original, description, index),
        '',
      ),
    );
    modal._getMaxPosition();
  },
};
refs.gallery.addEventListener('click', gallery._handleGalleryClick);

export default gallery;
