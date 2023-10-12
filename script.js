const box = document.querySelector(".box");

const colors = ["#5173c4", "#e7d847", "#f89721", "#a5542c"];
let i = 0;
const changeColors = () => {
  box.style.borderColor = colors[i];
  i++;
  if (i === colors.length) {
    i = 0;
  }
};

setInterval(changeColors, 3000);
