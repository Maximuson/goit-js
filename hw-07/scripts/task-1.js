const listCategories = document.querySelector('ul#categories');
const categories = listCategories.querySelectorAll('li.item');

const getCountCategories = () => `В списке ${categories.length} категории.`;
getCountCategories();


const getCategoriaInfo = (node) => {
  const title = node.querySelector('h2');
  const itemsCount = node.querySelectorAll('li').length;
  console.log(`Категория ${title.innerText}`);
  console.log(`Количество элементов: ${itemsCount}`);
};
const getAllCategoriesInfo = () => {
  categories.forEach((e) => {
    getCategoriaInfo(e);
  });
};

getAllCategoriesInfo();
