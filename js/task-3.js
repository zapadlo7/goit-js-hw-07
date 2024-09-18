const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const defaultValue = 'Anonymous';

input.addEventListener('input', event => {
  const name = event.target.value.trim();
  output.innerHTML = name || defaultValue;
});
