/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const nums = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

let product = nums.reduce((acc, curr) => acc * curr);
while (true) {
  const initialProduct = product;

  // See if there is a number we can divide by where the result is stlil divisible by all numbers we care about
  for (let i = 2; i < product; i++) {
    const newProduct = product / i;
    if (nums.every((num) => !(newProduct % num))) {
      product = newProduct;
    }
  }

  // If we divided by something, go again in case we can keep going
  if (product === initialProduct) {
    // We divided by everything and nothing worked
    break;
  }
}

console.log(product);
