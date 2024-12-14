function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const input = document.querySelector('#amount');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

function createBox(amount) {
  destroyBox();
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  box.append(...elements);
}

function destroyBox() {
  box.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBox(amount);
    input.value = '';
  }
})

destroyBtn.addEventListener('click', destroyBox)