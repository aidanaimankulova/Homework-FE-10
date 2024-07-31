// work1

// function processNumbers(a, b) {
//     if (a % 2 === 0 && b % 2 === 0) {
//       // Оба числа четные
//       return a * b;
//     } else if (a % 2 !== 0 && b % 2 !== 0) {
//       // Оба числа нечетные
//       return a + b;
//     } else {
//       // Одно четное, другое нечетное
//       return a % 2 !== 0 ? a : b;
//     }
//   }


// work2

function secondsToDays(seconds) {
    const secondsInDay = 86400; // 60 * 60 * 24
    return Math.floor(seconds / secondsInDay);
  }
  
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  
  function minOfTwo(a, b) {
    console.log(a < b ? a : b);
  }
  
  function rangeArray(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }