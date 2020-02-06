// Spin-off proj of background generator
// rainbow text: https://github.com/raxxarr/note/issues/1
let h1 = document.querySelector('h1');
let currentColor = document.querySelector('h3');
let random = document.getElementById('random');

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let color4 = document.querySelector('.color4');
let color5 = document.querySelector('.color5');
let color6 = document.querySelector('.color6');
let color7 = document.querySelector('.color7');

// display the initial color values
currentColor.textContent = `Color1: ${color1.value} 
                            \r\nColor2: ${color2.value}
                            \r\nColor3: ${color3.value}
                            \r\nColor4: ${color4.value}
                            \r\nColor5: ${color5.value}
                            \r\nColor6: ${color6.value}
                            \r\nColor7: ${color7.value}`;
// for new line, have to use \r\n and modify css
// https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent

const setGradient = () => {
  h1.style.backgroundImage = `Linear-gradient(to right, 
                            ${color1.value}, ${color2.value},
                            ${color3.value}, ${color4.value}, 
                            ${color5.value}, ${color6.value},
                            ${color7.value})`;

  // change display to current value of the 7 colors
  currentColor.textContent = `Color1: ${color1.value} 
                            \r\nColor2: ${color2.value}
                            \r\nColor3: ${color3.value}
                            \r\nColor4: ${color4.value}
                            \r\nColor5: ${color5.value}
                            \r\nColor6: ${color6.value}
                            \r\nColor7: ${color7.value}`;

  // changes the "random" button color to current value of color1
  random.style.background = color1.value;
};

// returns random hex value
const randomHex = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

// set random value for the 7 colors
const setRandomColor = () => {
  color1.value = randomHex();
  color2.value = randomHex();
  color3.value = randomHex();
  color4.value = randomHex();
  color5.value = randomHex();
  color6.value = randomHex();
  color7.value = randomHex();

  setGradient();
};

// for the "random" button
random.addEventListener('click', setRandomColor);

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
color3.addEventListener('input', setGradient);
color4.addEventListener('input', setGradient);
color5.addEventListener('input', setGradient);
color6.addEventListener('input', setGradient);
color7.addEventListener('input', setGradient);
