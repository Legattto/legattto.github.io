let numberDice = document.querySelector("#dice");
let btnRoll = document.querySelector("#roll");
let diceCount = document.querySelector("#dicecount");
let rollCount = document.querySelector("#rollcount");
let rusultInsert = document.querySelector("#result");

btnRoll.addEventListener("click", function (elem) {
  rusultInsert.innerHTML = "";
  elem.preventDefault();
  let valueOption = numberDice.value;
  let valueRollcount = rollCount.value;
  let diceCountValue = diceCount.value;
  let result;
  let min = 1;
  let sum = 0;
  let max = Math.floor(valueOption);
  for (let i = 0; i < valueRollcount; i++) {
    for (let i = 0; i < diceCountValue; i++) {
      result = Math.floor(Math.random() * (max - min + 1)) + min;
      sum = sum + result;
    }
    rusultInsert.insertAdjacentText("beforeend", sum + ',' + "   ");
    sum = 0;
  };
  rusultInsert.style.display = "flex";
});
