/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
const num = 600_851_475_143;

const isPrime = (x) => {
  const sqrt = Math.sqrt(x);
  for (let i = 2; i <= sqrt; i++) {
    if (!(x % i)) return false;
  }
  return true;
};

const max = Math.floor(num / 2);
for (let i = 1; i < max; i++) {
  const div = num / i;
  if (!Number.isInteger(div)) {
    continue;
  }

  if (isPrime(div)) {
    console.log(`${div} is a factor (${num} / ${i}) and is prime`);
    break;
  } else {
    console.warn(`${div} is a factor (${num} / ${i}) but is not prime`);
  }
}
