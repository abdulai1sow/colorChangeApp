console.log('hello');  
const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
  ];
  // ===== CHALLENGE =====
  // 1. Create A Function (generate)
const btn = document.querySelector('#generate-color')
const ul = document.querySelector('#color-list')
const resetBtn = document.querySelector('#reset')

function generate() {
  const randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)]
  const crtLi = document.createElement('li')
  document.querySelector('ul').appendChild(crtLi).list
  crtLi.textContent = randomColor
  crtLi.style.backgroundColor = randomColor
  console.log(crtLi);
}
  // Function should get a random color from the COLORS_ARRAY
  // Create a li element
  // Add the color name to the li text
  // Set the background color of the li to the random color
// Append the li to the ul

function resetLi() {
  const child = ul.querySelectorAll('li')
  ul.style.backgroundColor = 'white'
  const list = Array.from(child)
  list.map(list => list.remove())
}
// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.
resetBtn.addEventListener('click',resetLi)
btn.addEventListener('click',generate)