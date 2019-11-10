const createGalleryItem = (preview, original, description, position) => `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-position="${position}"
        alt="${description}"
      />
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>

  `;
export default createGalleryItem;
