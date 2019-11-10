import galleryItems from './gallery-items.js';
import createGalleryItem from './gallery-item.js';
import modal from './modal.js';
import refs from './refs.js';

const handleGalleryClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    const originalImg = e.target.dataset.source;
    const { position } = e.target.dataset;
    modal.show(originalImg, +position);
  }
};
refs.gallery.addEventListener('click', handleGalleryClick);

const fillGallery = (items) => {
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    items.reduce(
      (acc, { preview, original, description }, index) => acc + createGalleryItem(preview, original, description, index),
      '',
    ),
  );
  modal._getMaxPosition();
};

fillGallery(galleryItems);
