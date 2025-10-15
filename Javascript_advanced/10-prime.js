function countPrimeNumbers() {
  let count = 0;

  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

const startTime = performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds`);
