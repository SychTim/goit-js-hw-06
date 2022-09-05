const elInput = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const elBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  const colors = [];
  let size = 30;

  for (let i = 0; i < elInput.value; i += 1) {
    colors.push(getRandomHexColor());
  };

  const boxes = colors.map(color => {
    const string = `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
    return string;
  });

  elBoxes.innerHTML = boxes.join('');
});

btnDestroy.addEventListener('click',() => {
  elBoxes.innerHTML = '';
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};