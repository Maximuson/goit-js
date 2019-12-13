import menuTemplate from './templates/list-products.hbs';
import menuData from './menu.json';

const List = {
  menuData,
  container: document.querySelector('.js-menu'),
  render(data) {
    const markup = menuTemplate(data);
    this.container.innerHTML = markup;
  },
  getData() {
    return this.menuData;
  },
};

export default List;
