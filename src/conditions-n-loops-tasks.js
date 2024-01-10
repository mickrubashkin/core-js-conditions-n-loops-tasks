/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b) {
    if (b >= c || a >= c) {
      return a;
    }
  } else if (b >= c) {
    return b;
  }

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if ((queen.x - king.x) ** 2 === (queen.y - king.y) ** 2) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a === b && a + b > c) {
    return true;
  }
  if (a === c && a + c > b) {
    return true;
  }
  if (b === c && b + c > a) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const ROMAN_DIGITS_DICT = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };

  if (num <= 5) {
    return ROMAN_DIGITS_DICT[num];
  }

  if (num <= 10) {
    if (num === 10) {
      return ROMAN_DIGITS_DICT[num];
    }
    if (num === 9) {
      return ROMAN_DIGITS_DICT[num];
    }

    return ROMAN_DIGITS_DICT[5] + ROMAN_DIGITS_DICT[num % 5];
  }

  let romanNumber = '';

  for (let i = 0; i < Math.floor(num / 10); i += 1) {
    romanNumber += 'X';
  }

  return romanNumber + convertToRomanNumerals(num % 10);
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }

    if (i < numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = `${num}`;

  for (let i = 0; i < numStr.length; i += 1) {
    if (+numStr[i] === digit) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  let rightSum = 0;
  let leftSum = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    rightSum += arr[i];
  }

  for (let i = 1; i < arr.length; i += 1) {
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let count = 1;
  let topRow = 0;
  let bottomRow = size - 1;
  let leftCol = 0;
  let rightCol = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  while (leftCol <= rightCol && topRow <= bottomRow) {
    for (let i = leftCol; i <= rightCol; i += 1) {
      matrix[topRow][i] = count;
      count += 1;
    }
    topRow += 1;

    for (let i = topRow; i <= bottomRow; i += 1) {
      matrix[i][rightCol] = count;
      count += 1;
    }
    rightCol -= 1;

    for (let i = rightCol; i >= leftCol; i -= 1) {
      matrix[bottomRow][i] = count;
      count += 1;
    }
    bottomRow -= 1;

    for (let i = bottomRow; i >= topRow; i -= 1) {
      matrix[i][leftCol] = count;
      count += 1;
    }
    leftCol += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const res = matrix;

  for (let i = 0; i < res.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const tmp = res[i][j];
      res[i][j] = res[j][i];
      res[j][i] = tmp;
    }
  }

  for (let i = 0; i < res.length; i += 1) {
    for (let j = 0; j < res.length / 2; j += 1) {
      const tmp = res[i][j];
      res[i][j] = res[i][res.length - j - 1];
      res[i][res.length - j - 1] = tmp;
    }
  }

  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function partition(arr, start, end) {
  const cpArr = arr;
  const pivot = cpArr[Math.floor((end + start) / 2)];
  let leftPointer = start;
  let rightPointer = end;
  while (leftPointer <= rightPointer) {
    while (cpArr[leftPointer] < pivot) {
      leftPointer += 1;
    }
    while (cpArr[rightPointer] > pivot) {
      rightPointer -= 1;
    }
    if (leftPointer <= rightPointer) {
      const tmp = cpArr[leftPointer];
      cpArr[leftPointer] = cpArr[rightPointer];
      cpArr[rightPointer] = tmp;

      leftPointer += 1;
      rightPointer -= 1;
    }
  }
  return leftPointer;
}

function quickSort(arr, start, end) {
  let index;

  if (arr.length > 1) {
    index = partition(arr, start, end);
    if (start < index - 1) {
      quickSort(arr, start, index - 1);
    }
    if (index < end) {
      quickSort(arr, index, end);
    }
  }

  return arr;
}

function sortByAsc(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffle(string) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) {
        evenChars += string[i];
      } else {
        oddChars += string[i];
      }
    }

    return evenChars + oddChars;
  }

  const cache = {};
  let shuffledStr;
  let fullCircleIdx = null;

  for (let i = 1; i <= iterations; i += 1) {
    if (!fullCircleIdx) {
      shuffledStr = cache[i - 1] || str;
      cache[i] = shuffle(shuffledStr);

      if (cache[i] === str) {
        fullCircleIdx = i;
      }
    } else {
      return cache[iterations % fullCircleIdx];
    }
  }

  return cache[iterations];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberStr = `${number}`;
  const digits = [];

  for (let i = 0; i < numberStr.length; i += 1) {
    digits.push(+numberStr[i]);
  }

  let firstDigitToSwapIdx = null;
  for (let i = digits.length - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      firstDigitToSwapIdx = i;
      break;
    }
  }

  if (!firstDigitToSwapIdx) {
    return number;
  }

  let secondDigitToSwapIdx = null;
  let smallestGreater = null;
  for (let i = firstDigitToSwapIdx + 1; i < digits.length; i += 1) {
    if (digits[i] > digits[firstDigitToSwapIdx]) {
      if (!smallestGreater) {
        smallestGreater = digits[i];
        secondDigitToSwapIdx = i;
      }
      if (digits[i] < smallestGreater) {
        smallestGreater = digits[i];
        secondDigitToSwapIdx = i;
      }
    }
  }

  const tmp = digits[firstDigitToSwapIdx];
  digits[firstDigitToSwapIdx] = digits[secondDigitToSwapIdx];
  digits[secondDigitToSwapIdx] = tmp;

  const head = [];
  const tail = [];
  for (let i = 0; i <= firstDigitToSwapIdx; i += 1) {
    head.push(digits[i]);
  }

  for (let i = firstDigitToSwapIdx + 1; i < digits.length; i += 1) {
    tail.push(digits[i]);
  }

  tail.sort((a, b) => a - b);

  const result = +[...head, ...tail].join('');

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
