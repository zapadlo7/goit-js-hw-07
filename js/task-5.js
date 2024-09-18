const changeColorButton = document.querySelector('.change-color');
const colorCodeElement = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  colorCodeElement.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
