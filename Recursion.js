/*
Recursion happens when a function calls itself.
A recursive function calls itself until a condition is met.
*/

// A function to log output to the console.
function show(x) {
    console.log(x);
}

// A function to calculate Factorials.

function factorial(n) {
// Base Case.
    if (n == 1) {
        return 1;
    }

    // Recursive Case
    else {
        return n * factorial(n - 1);
    }
}

show(factorial(5)); // 120


// In mathematics, the Fibonacci numbers or Fibonacci series or Fibonacci sequence are the numbers in the following integer sequence:
// 0,1,1,2,3,5,8,13,21,34,55,89,144.

// By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

// An array to hold the Fibonacci numbers upto 'n'.
var resultArray = [];

function fibonacci(a, b, n) {
        if (a > n) return;
        resultArray.push(a);
        if (b > n) return;
        resultArray.push(b);
        
        // a becomes the sum of a and b.
        a = a + b;
        // b becomes the sum of the new 'a' and b.
        b = a + b;

        fibonacci(a, b, n);
            
        }

        fibonacci(0, 1, 150);
        show(resultArray); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

        // Binary Search is a function that searches for the index of an integer
        // in a sorted array of integers.

        // Assume the array of integers is sorted and contains several integers.

        function binarySearch(sortedArray, lowerIndex, upperIndex, integer) {
            // find the center of the sorted array
            var range = upperIndex - lowerIndex;
            var centerIndex = Math.floor((range / 2) + lowerIndex);

            if(range == 0 && sortedArray[lowerIndex] != integer){
            return ("Not IN ARRAY");
            }
            
            // if the center value matches the integer return the center index
            if (sortedArray[centerIndex] == integer) {
                return centerIndex;
            }
            if (integer < sortedArray[centerIndex]) {
            // no need to search the second half of the array
               return binarySearch(sortedArray, lowerIndex, centerIndex -1, integer);
            }
            if (integer > sortedArray[centerIndex]) {
                // no need to search the first half of the array
              return binarySearch(sortedArray, centerIndex + 1, upperIndex, integer );
            }
        }

        var myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        show(binarySearch(myArray, 0, 8, 70)); // 6

