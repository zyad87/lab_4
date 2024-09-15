let width = document.getElementById('width');
let height = document.getElementById('height');
let borderRadius = document.getElementById('borderRadius');
let color = document.getElementById('color');
let reset = document.getElementById('reset');
let box = document.querySelector('.box');

width.addEventListener('change', () => {
  box.style.width = width.value + 'px';
});
height.addEventListener('change', () => {
  box.style.height = height.value + 'px';
});
borderRadius.addEventListener('change', () => {
  box.style.borderRadius = borderRadius.value + 'px';
});
color.addEventListener('input', () => {
  box.style.backgroundColor = `${color.value}`;
});

reset.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
  box.style.width = '8rem';
  box.style.height = '8rem';
  box.style.borderRadius = '0px';
});