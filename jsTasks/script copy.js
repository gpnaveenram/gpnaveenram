const getOddNumbers = numbers => {
    const oddNumbers = [];
    numbers.forEach(number => {
      if (number % 2 !== 0) {
        oddNumbers.push(number);
      }
    });
    return oddNumbers;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbers = getOddNumbers(numbers);
  console.log(oddNumbers);


  function titleCaps(input) {
    const words = input.split(' ');
    const splittedArray = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const resultString = splittedArray.join(' ');
    return resultString;
  }
  const input= "loorem ipsum test scripts to updated";
  const result = titleCaps(inputString);
  console.log(result);


var func = numbers => numbers.reduce((acc, num) => acc + num, 0);
var arr = [1, 2, 3, 4, 5];
var sum = func(arr);
console.log(sum);
  
var isPalindrome = str => {
  var revers = str.split('').reverse().join('');
  return str === revers;
};

var getAllPalindromes = arr => arr.filter(item => isPalindrome(item));
var words = ["madam", "Teset", "test", "javascript"];
var palindromes = getAllPalindromes(words);
console.log(palindromes);

var isPrime = num => {
  var reminder = num%2;
  if(reminder===0){
    return false;
  }else{
    return true;
  }
  
};

var checkprime = arr => arr.filter(item => isPrime(item));
var arr = [2,3,5,7,10];
var primeNumbers = checkprime(arr);
console.log(primeNumbers);

//Rotate arry for k times
var rotate = function (arr, k) {
  let tmp = 0;
  const len = arr.length;
  k = k % len;
  for (let i = 0; i < k; i++) {
     tmp = arr.pop();
     arr.unshift(tmp);
  }
 return arr;
};


//Remove Duplicates from array
function remDupe(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(remDupe([1,1,1,1,2,3,4]));


