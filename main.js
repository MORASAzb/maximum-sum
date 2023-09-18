import './style.css'


const inputArr = [];
while (true) {
  const inputStr = prompt('enter your number : ');

  if (inputStr === "quit") {
    break;
  }

  inputArr.push(+inputStr);

}

console.log(inputArr);

function maximumSum(num) {

  let maxSum = 0;
  let maxSumCurrent = 0;
  

  for (let i = 0; i < num.length; i++) {
    maxSumCurrent = Math.max(num[i], maxSumCurrent + num[i])
    maxSum = Math.max(maxSum, maxSumCurrent);

  }

return maxSum;

}

console.log(maximumSum(inputArr));