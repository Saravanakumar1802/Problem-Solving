//1. Explain the concept of prime numbers and write a function to check if a given number is prime.

// If the num is divisible by 1 and itself it will be the prime.
function isPrime(num) {
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i * i < num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}
console.log(isPrime(19));


//2. Write a function to find the largest element in an array.

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const myArray = [3, 6, 2, 56, 32, 5, 89, 32];
console.log(findLargest(myArray));

//3.  Write a function to find the second largest element in an array.

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [3, 6, 2, 56, 32, 5, 89, 32];
console.log(findSecondLargest(myArray));

//4.  Write a function to find the nth Fibonacci number using iteration.

function fibonacciIterative(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacciIterative(12));

//5.  Write a function to calculate the factorial of a number using iteration.

function getFactorialForLoop(n) {
    let result = 1;

    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    } else {
        return "n has to be positive";
    }
}

console.log(getFactorialForLoop(5)); 
