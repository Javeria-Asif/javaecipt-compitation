// question no 1 : Given an integer array nums, find a subarray that has the largest
// product, and return the product.

function maxSubarrayProduct(nums) {
  if (nums.length === 0) {
      return 0;
  }

  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
      let tempMax = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      let tempMin = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      
      maxProduct = tempMax;
      minProduct = tempMin;
      
      result = Math.max(result, maxProduct);
  }

  return result;
}

function getUserInput() {
  let inputStr = prompt("Enter a list of numbers");
  if (!inputStr) {
      alert("No input provided.");
      return;
  }

  let nums = inputStr.split(",").map(Number).filter(num => !isNaN(num));

  if (nums.length === 0) {
      alert("No valid numbers provided.");
      return;
  }

  let maxProduct = maxSubarrayProduct(nums);
  alert("Maximum Subarray product is " + maxProduct);
}

getUserInput();


// question no 2
function twosum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}  

function input2() {
    let targetSumInput = prompt("Enter a list of numbers to add");
    if (!targetSumInput) {
        alert("No input provided.");
        return;
    }
    let nums = targetSumInput.split(",").map(Number);
    
    let target = parseInt(prompt("Enter the target sum:"));
    if (isNaN(target)) {
        alert("Invalid target sum provided.");
        return;
    }
    
    let result = twosum(nums, target);
    if (result.length === 2) {
        alert(`Indices of the two numbers that add up to ${target}: ${result[0]} and ${result[1]}`);
    } else {
        alert("No two numbers found that add up to the target sum.");
    }
}

input2();

// Qestion no 3
// Reverse each word in a given input string.

let input = prompt("Enter an word to Reverse");
let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}
alert("the reverse is " + reversed);
// Question no 4 Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "steve Jobs",
    title: "Water Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: the Final book of the hunger games",
    readingStatus: false,
  },
];
if (library[0].readingStatus === true) {
  alert(
    library[0].title +
      " of the writer " +
      library[0].author +
      "reading status is read " +
      library[0].readingStatus
  );
} else {
  alert(
    library[0].title +
      " of the writer " +
      library[0].author +
      "is non read" +
      library[0].readingStatus
  );
}
if (library[1].readingStatus == true) {
  alert(
    library[1].title +
      " of the writer " +
      library[1].author +
      "reading status is read " +
      library[0].readingStatus
  );
} else {
  alert(
    library[1].title +
      " of the writer " +
      library[1].author +
      "is non read " +
      library[0].readingStatus
  );
}
if (library[2].readingStatus == true) {
  alert(
    library[2].title +
      " of the writer " +
      library[2].author +
      "reading status is read " +
      library[0].readingStatus
  );
} else {
  alert(
    library[2].title +
      " of the writer " +
      library[2].author +
      "is non read" +
      library[0].readingStatus
  );
}

// Question no 5 Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

function amountTocoins(amount, coin) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coin[0]) {
        let leftamount = amount - coin[0];
        return [coin[0]].concat(amountTocoins(leftamount, coin));
      } else {
        coin.shift();
        return amountTocoins(amount, coin);
      }
  }
}

var niceOutput = function() {
    let amount=prompt("Enter an Amount ")
let coin=[5000,1000,500,100,50,20,10,5,2,1]
    var result = amountTocoins(amount,coin);
    alert( result + "");
  }
  niceOutput()
