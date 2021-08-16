const board = document.querySelector('#board');
const colors = ['#f700ff', '#db0fe2', '#f82cff', '#c939ce', '#f958ff', '#d759db', '#fa74ff', '#c765ca'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  board.append(square);

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);
}

function setColor(e) {
  const element = e.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  const element = e.target;
  element.style.backgroundColor = '';
  element.style.boxShadow = '';
}

function getRandomColor() {

  return colors[Math.floor(Math.random() * colors.length)];

  // const index = Math.floor(Math.random() * colors.length);
  // return colors[index];


}