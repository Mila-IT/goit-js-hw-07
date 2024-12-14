// const titleCategories = document.querySelectorAll('.js-title-categories');
// console.log(`Number of categories: ${titleCategories.length}`);

const titleCategories = document.querySelector('#categories');
console.log(`Number of categories: ${titleCategories.children.length}`);

const itemCategories = document.querySelectorAll('.item');
itemCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})