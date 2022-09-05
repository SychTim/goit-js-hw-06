const btnChaColor = document.querySelector('button.change-color');
const elColor = document.querySelector('span.color');
const elBody = document.querySelector('body');

btnChaColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  elBody.style.backgroundColor = randomColor;
  elColor.textContent = randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};