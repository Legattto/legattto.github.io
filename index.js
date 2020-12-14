let numberDice = document.querySelector("#dice");
let btnRoll = document.querySelector("#roll");
let rollCount = document.querySelector("#rollcount");

btnRoll.addEventListener("click", function (elem) {
  elem.preventDefault();
  let valueOption = numberDice.value;
  let valueRollcount = rollCount.value;
  let result;
  let min = 1;
  let max = Math.floor(valueOption);
  for (let i = 0; i < valueRollcount; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  };
  console.log(result);
});
