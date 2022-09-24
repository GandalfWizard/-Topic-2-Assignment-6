"use strict";
/*
# Digit Swap
Read one number (`int`) as input.

If the number has exactly two digits, the program swaps both digits.
Otherwise, the number is printed as is.
The sign of the number is **always** preserved.

**Non-functional requirement:** The input is a number, do not try to convert it to a string.
**Hint:** The integer division does not exist in JavaScript.
You can simulate an integer division, however, by doing a regular (decimal)
division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`.

## Examples:
    > 1234
    1234

    > -1234
    -1234

    > -4
    -4

    > 6
    6

    > 34
    43

    > -12
    -21

    > -70
    -7
*/
import io from "../../utils/io-for-pf.js";

const n = parseInt(io.read("Number: "));
const absoluteNumber = Math.abs(n);
if (absoluteNumber < 10) {
  io.write(n);
} else if (absoluteNumber >= 100) {
  io.write(n);
} else {
  const firstNumber = Math.floor(absoluteNumber / 10);
  const secondNumber = absoluteNumber % 10;
  if (n > 0) {
    io.write(secondNumber + "" + firstNumber);
  } else {
    io.write("-" + secondNumber + "" + firstNumber);
  }
}