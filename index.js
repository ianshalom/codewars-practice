console.log("CODE WARS");

//##############################
//##############################
//8 kyu
//##############################
//##############################
//Challenge: make the first character in the string "word" upper case
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//##############################
//##############################
//7 kyu
//Challenge: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//Solution
function sumTwoSmallestNumbers(numbers) {
  //return numbers.sort((a,b) => a - b) - Works the same but shorter syntax
  function compareNums(num1, num2) {
    return num1 - num2;
  }
  numbers.sort(compareNums);
  return numbers[0] + numbers[1];
}
//##############################
//##############################
//6 kyu
//Challenge: Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// function list(names) {
//   return names.reduce((prev, current, index, array) => {
//     if (index === 0) {
//       return current.name;
//     } else if (index === array.length - 1) {
//       return prev + " & " + current.name;
//     } else {
//       return prev + ", " + current.name;
//     }
//   }, "");
// }

//My Solution
function list(names) {
  var namesStr = [];
  for (let i = 0; i < names.length; i++) {
    namesStr.push(names[i].name);
  }
  if (namesStr.length <= 1) {
    return namesStr.toString();
  }

  if (namesStr.length === 2) {
    return `${namesStr[0]} & ${namesStr[1]}`;
  }
  if (namesStr.length > 2) {
    var lastTwo = namesStr.splice(namesStr.length - 2, 2).join(" & ");
    return namesStr.join(", ") + ", ".concat(lastTwo);
  }
}
//##############################
//##############################
//Challenge: Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
//##############################
//##############################
//Challenge:

function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);

  function even(num) {
    return num % 2 === 0;
  }

  function odd(num) {
    return !even(num);
  }
}
//##############################
//##############################
//Challenge :Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// arrayDiff([1,2],[1]) == [2]

//This solution filters out the elements from array a that do not exist in array b!!
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
//##############################
//##############################
//Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

function high(x) {
  return x.split(" ").reduce((accum, current) => {
    console.log(accum, current);
    return score(current) > score(accum) ? current : accum;
  });
}

function score(word) {
  return word.split("").reduce((accum, current) => {
    return accum + (current.charCodeAt() - 96);
  }, 0);
}

//##############################
//##############################
//##############################
//##############################//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
//##############################
