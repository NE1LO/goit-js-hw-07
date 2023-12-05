const spanColor = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
let body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  console.log("hi");
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
};

btnChange.addEventListener("click", changeColor);
