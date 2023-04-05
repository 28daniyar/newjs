// ----==== JS School - Lecture 4 HW ====---- 

/**
 * Сriteria for assessment
 * 
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 * 
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====---- 
/**
  * Exercise 1
  *
  * Write a function that returns odd array values.
  * [1,2,3,4] => [1,3]
  */
const getOddValues = numbers => {
  return numbers.filter(number => number % 2 !== 0);
};
/**
  * Exercise 2
  *
  * Write a function that returns the smallest value of an array
  * [4,2,10,27] => 2
  */
const getSmallestValue = numbers => {
  return Math.min(...numbers);
};
/**
  * Exercise 3
  *
  * Write a function that returns the biggest value of an array
  * [5,22,9,43] => 43
  */
const getBiggestValue = numbers => {
  return Math.max(...numbers);
};
/**
  * Exercise 4
  *
  * Write a function that takes an array of strings as input
  * and returns only those shorter than 20 characters
  *
  *[
  * 'I am a short string',
  * 'I seem to be short too',
  * 'And I am a long string'
  *] => [
  * 'I am a short string',
  *]
  *
  * Use: filter
  */
const getShorterStrings = (strings, characters = 20) => {
  return strings.filter(string => string.length < characters);
};
/**
  * Exercise 5
  *
  * Write a function that takes the following data as input:
  *
  *[
  * { name: 'shark', likes: 'ocean' },
  * { name: 'turtle', likes: 'pond' },
  * { name: 'otter', likes: 'fish biscuits' }
  *]
  *
  * And returns an array of strings:
  *
  * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
  *
  * Use: map
  */
const getComputedStrings = fish => {
  return data.map(obj => (`${obj.name} likes ${obj.likes}`));
};

const data = [
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }
];

getComputedStrings(data);



/**
  * Exercise 6
  *
  * Write a function that takes 2 objects as input and returns 1 with  
  * common properties. If properties have the same keys use the latter.
  *
  * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
  *
  * We use: ...
  */

const mergeObjects = (obj1, obj2) => {
  const merged = {};
  for (let prop in obj1) {
    merged[prop] = obj1[prop];
  }
  for (let prop in obj2) {
    merged[prop] = obj2[prop];
  }
  return merged;
};

mergeObjects({ name: 'Daniyar', surname: 'Kassymov', age: 27 }, { age: 28 });

/**
  * Exercise 7
  *
  * Write a function that returns the smallest value of an array
  * [5,200,-5,41] => -5
  *
  * Use: operator ... and Math.min
  */
const getSmallestValue2 = numbers => {
  return Math.min(...numbers);
};
/**
  * Exercise 8
  *
  * Write a function that returns odd array values.
  * [77,2,30,51] => [77,51]
  *
  * Use: reduce
  */
const getOddValues2 = (numbers) =>
  numbers.reduce((newArray, currentValue) => {
    if (currentValue % 2 !== 0) {
      newArray.push(currentValue);
    }
    return newArray;
  }, []);
getOddValues2([77, 2, 30, 51]);
/**
  * Exercise 9
  *
  * Write a function that accepts data from the basket as input in the following form:
  *
  *[
  * {price: 10, count: 2},
  * {price: 100, count: 1},
  * {price: 2, count: 5},
  * {price: 15, count: 6},
  *]
  * where price is the price of the item and count is the quantity.
  *
  * The function should return the total price for this order.
  *
  * Use: reduce
  */
const calculateTotal = products => {
  return products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);
};

const info = [
  { price: 10, count: 2 },
  { price: 100, count: 1 },
  { price: 2, count: 5 },
  { price: 15, count: 6 },
]

calculateTotal(info); //220

/**
  * Exercise 10
  *
  * Implement a function that has an array of numbers as input and an array of unique values as output
  * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
  *
  * Use: reduce and indexOf
  */
const getUniqueValues = (numbers) =>
  numbers.reduce((newArray, currentValue) => {
    if (newArray.indexOf(currentValue) === -1) {
      newArray.push(currentValue);
    }
    return newArray;
  }, []);
const info2 = [1, 2, 2, 4, 5, 5];
getUniqueValues(info2);
/**
  * Exercise 11
  *
  * Implement a function whose input is a numeric code of an error, the output is a string with a message
  * 500 => Server Error
  * 401 => Authorization failed
  * 402 => Server Error
  * 403 => Access denied
  * 404 => Not found
  *
  * Use: switch case or object like a map structure
  */
const getErrorMessage = code => {
  let message = '';
  switch (code) {
    case 500:
    case 402:
      message = 'Server Error';
      break;
    case 401:
      message = 'Authorization failed';
      break;
    case 403:
      message = 'Access denied';
      break;
    case 404:
      message = 'Not found';
      break;
    default:
      message = 'Unknown error';
      break;
  }
  return message;
};
/**
  * Exercise 12
  *
  * Write a function that returns the 2 smallest values of an array
  * [4,3,2,1] => [1,2]
  *
  * Use: .sort()
  */
const get2SmallestValues = numbers => {
  const sortedArr = numbers.sort((a, b) => a - b);
  return [sortedArr[0], sortedArr[1]];
};

const arr = [4, 3, 2, 1];
get2SmallestValues(arr); // [1, 2]

/**
  * Exercise 13
  *
  * Implement a function, at the input of which an object of the following form:
  * {
  * firstName: 'Peter',
  * secondName: 'Vasiliev',
  * patronymic: 'Ivanovich'
  *}
  * output line with the message 'Name: Petr Ivanovich Vasiliev'
  */
const getFullName = ({ firstName, secondName, patronymic }) => {
  return `Name: ${firstName} ${patronymic} ${secondName}`;
};
/**
  * Exercise 14
  *
  * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
  * a returns an array of the original array, each element of which has been multiplied by a factor:
  *
  * [1,2,3,4], 5 => [5,10,15,20]
  *
  * Use: map
  */
const multiplyTo = (numbers, multiplier) => {
  return numbers.map(num => num * multiplier);
};

/**
  * Exercise 15
  *
  * Implement a function that takes 2 arguments as input: an array and a franchise,
  * and returns a string with the names of the heroes separated by a comma:
  *
  *[
  * {name: "Batman", franchise: "DC"},
  * {name: "Ironman", franchise: "Marvel"},
  * {name: "Thor", franchise: "Marvel"},
  * {name: "Superman", franchise: "DC"}
  *],
  * Marvel
  * => Ironman, Thor
  *
  * Use: filter, map, join
  */
const getСharacterNames = (characters, franchise) => {
  return characters.filter(hero => hero.franchise === franchise).map(hero => hero.name).join(", ");
};

const heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

console.log(getСharacterNames(heroes, "Marvel")); // "Ironman, Thor"

// ----==== Advanced exercises (8 items) ====----
/**
  * Exercise 16
  *
  * Write a function that returns an array of the smallest row values of a two-dimensional array
  *[
  * [10,1,300,4],
  * [20,2,300,400],
  * [30,3,300,4],
  * [40,4,300,4],
  *]
  * => [1,2,3,4]
  */
const getSmallestRow = numbers => {
  return numbers.map(row => row.reduce((acc, curr) => Math.min(acc, curr)));
};

const arr2 = [
  [10, 1, 300, 4],
  [20, 2, 300, 400],
  [30, 3, 300, 4],
  [40, 4, 300, 4],
];

getSmallestRow(arr2); // [1, 2, 3, 4]
/**
* Exercise 17
*
* Write a function that returns an array of the smallest column values of a two-dimensional array
*[
* [1,2,3,4],
* [1,2,3,4],
* [1,2,30,4],
* [1,2,3,40],
*]
* => [1,2,3,4]
*/
const getSmallestColumn = numbers => {
  let result = Array(numbers[0].length).fill(0);
  for (let i = 0; i < numbers[0].length; i++) {
    let min = numbers.reduce((acc, cur) => {
      return Math.min(acc, cur[i]);
    }, Infinity);
    result[i] = min;
  }
  return result;
};
// Пример использования функции:
const arr3 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 30, 4],
  [1, 2, 3, 40],
];
getSmallestColumn(arr3); // [1,2,3,4]
/**
  * Exercise 18
  *
  * Write a function that returns the 2 biggest value of an array
  * [4,3,2,1] => [4,3]
  */
const get2BiggestValues = numbers => {
  return arr.sort((a, b) => b - a).slice(0, 2);
};
/**
  * Exercise 19
  *
  * Write a function that returns the number of vowels in a string in English
  * ( a, e, i, o, u ).
  *
  * 'Return the number (count) of vowels in the given string.' => 15
  */
const getNumberOfVowels = string => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

getNumberOfVowels('Return the number (count) of vowels in the given string.'); //15
/**
  * Exercise 20
  *
  * Write a function that returns an array of two strings where the first element
  * is the original string with uppercase even letters, and the second
  * with capital odd.
  * 'abcdef' => ['AbCdEf', 'aBcDeF']
  */
const getCapitalizedStrings = string => {
  const arr = string.split('');
  const even = arr.map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase());
  const odd = arr.map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter.toLowerCase());
  return [even.join(''), odd.join('')];
};

let str = 'abcdef';
console.log(getCapitalizedStrings(str)); //['AbCdEf', 'aBcDeF']
/**
  * Exercise 21
  *
  * Write a function that satisfies the following conditions:
  *
  * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
  * the function returns a string that does not contain three identical letters in a row
  * the function removes the minimum number of letters from the string S
  *
  * Examples:
  * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
  * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
  * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
  *
  * Assumptions:
  * N is an integer in the range [1..200,000]
  * S consists only of lowercase letters [a-z]
  */
const getCorrectString = string => {
  let result = '';
  for (let i = 0; i < S.length; i++) {
    if (i < 2 || S[i] !== S[i - 1] || S[i] !== S[i - 2]) {
      result += S[i];
    }
  }
  return result;
};
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const getFlattenedArray = numbers => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Array.isArray(numbers[i])) {
      result = result.concat(getFlattenedArray(numbers[i])); //рекурсия!
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
};

const arr4 = [1, 2, [3, 4], 5, [[6, 7], 8], 9];
console.log(getFlattenedArray(arr4)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
* Exercise 23
*
* Implement a function that has an array of numbers as input and an array of not unique values as output.
* 
* [1, 2, 2, 4, 5, 5] => [2, 5]
*/
const getNotUniqueValues = numbers => {
  const counts = {};
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (let num in counts) {
    if (counts[num] > 1) {
      result.push(parseInt(num));
    }
  }

  return result;
};

const arr5 = [1, 2, 2, 4, 5, 5];
console.log(getNotUniqueValues(arr5)); // [2, 5]
