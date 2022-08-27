const l = console.log;

// -------------------------------------------------------------------------------------------------

// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

// Answer :
// =>

/**
 *
 * @param {length of first side} l1
 * @param {length of second side} l2
 * @param {length of third side} l3
 * @returns
 */
const typeOfTriangle = (l1, l2, l3) =>
  (l1 === l2 && l2 === l3 && "Equilateral Triangle") ||
  ((l1 === l2 || l2 === l3) && "Isosceles Triangle") ||
  "Scalene Triangle";

// Output :
l(typeOfTriangle(60, 60, 60));
l(typeOfTriangle(34, 34, 35));
l(typeOfTriangle(34, 42, 45));

// -------------------------------------------------------------------------------------------------

// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

// Answer :
// =>

/**
 *
 * @param {marks in numeric form} marks
 * @returns Grade based on the numeric entry
 */
const gradeFromMarks = (marks = 0) => {
  const parsedMarks = parseInt(marks);
  switch (true) {
    case parsedMarks >= 90 && parsedMarks < 100:
      return "S grade";
    case parsedMarks >= 80 && parsedMarks < 90:
      return "A grade";
    case parsedMarks >= 70 && parsedMarks < 80:
      return "B grade";
    case parsedMarks >= 60 && parsedMarks < 70:
      return "C grade";
    case parsedMarks >= 50 && parsedMarks < 60:
      return "D grade";
    case parsedMarks >= 40 && parsedMarks < 50:
      return "E grade";
    case parsedMarks >= 0 && parsedMarks < 40:
      return "Student has failed";
    default:
      return "Invalid marks";
  }
};

// Output :
l(gradeFromMarks(90));
l(gradeFromMarks(83));
l(gradeFromMarks(73));
l(gradeFromMarks("63"));
l(gradeFromMarks("43"));
l(gradeFromMarks(33));
l(gradeFromMarks(-33));
l(gradeFromMarks(NaN));

// -------------------------------------------------------------------------------------------------

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

/**
 *
 * @param {range over which sum is required} num
 * @returns sum of the multiples of 3 and 5
 */
const sum = (num = 1000) => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      total += i;
    }
  }
  return total;
};

// Output :
l(sum())
l(sum(50))

// -------------------------------------------------------------------------------------------------

// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

/**
 * 
 * @param {*} num 
 * @returns factorial of num
 */
 const factorialOfNum = (num) => (num !== 0 ? num * factorialOfNum(num - 1) : 1);

/**
 *
 * @param {lower range number} numOne
 * @param {upper range number} numTwo
 */
const prime = (numOne = 1, numTwo = 100) => {
  // Print display message
  l(`Prime numbers between ${numOne} and ${numTwo} are: `);
  // Traverse each number in the interval
  // with the help of for loop
  for (i = numOne; i <= numTwo; i++) {
    // Skip 0 and 1 as they are
    // neither prime nor composite
    if (i == 1 || i == 0) continue;

    // flag variable to tell
    // if i is prime or not
    flag = 1;

    for (j = 2; j <= i / 2; ++j) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }

    // flag = 1 means i is prime
    // and flag = 0 means i is not prime
    if (flag == 1) l(i, " ",factorialOfNum(i));
  }
};

prime();

// -------------------------------------------------------------------------------------------------
