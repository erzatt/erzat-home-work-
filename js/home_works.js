const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9_+%]+@gmail.com/;

const maxChars = 30;
const minChars = 6;

gmailButton.onclick = () => {
  const inputText = gmailInput.value;
  if (
    inputText.length >= minChars &&
    inputText.length <= maxChars &&
    regExp.test(inputText)
  ) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "ERROR";
    gmailResult.style.color = "red";
  }
};

//child block

const child_block = document.querySelector(".child_block")

let posX = 0
let posY = 0

const moveBlock = () => {
    if (posX <= 444 && posY === 0)  {
        posX += 5
        child_block.style.left = `${posX}px`
        setTimeout(moveBlock, 20)
    } else if (posX >= 444 && posY <= 448) {
        posY += 5
        child_block.style.top = `${posY}px`
        setTimeout(moveBlock, 20)
    }  else if (posX > 0 && posY >= 335) {
        posX -= 5
        child_block.style.left = `${posX}px`
        setTimeout(moveBlock, 20)
    }   else {
        posY -= 5
        child_block.style.top = `${posY}px`
        setTimeout(moveBlock, 20)
    }
}
moveBlock()

//time

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let newValue = 0;
let interval;

startBtn.addEventListener("click", () => {
  toIncrease();
  document.querySelector(".interval").style.color = "green";
});
stopBtn.addEventListener("click", () => {
  toStop();
});
resetBtn.addEventListener("click", () => {
  toReset();
  document.querySelector(".interval").style.color = "grey";
});
const toIncrease = () => {
  toStop();
  interval = setInterval(function () {
    newValue++;
    document.querySelector(".interval").innerHTML = newValue;
  }, 1000);
};
const toStop = () => {
  clearInterval(interval);
};
const toReset = () => {
  clearInterval(interval);
  newValue = 0;
  document.querySelector(".interval").innerHTML = newValue;
};
