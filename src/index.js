import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId;
let isActive = false;
console.log(colors.length);
const changeColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = randomColor;
};
startBtnRef.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  intervalId = setInterval(changeColor, 1000);
  isActive = true;
});
stopBtnRef.addEventListener('click', () => {
  clearInterval(intervalId);
  isActive = false;
});
