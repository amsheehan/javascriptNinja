/*
MergeSort is one of the most popular sorting algorithms and is used in Array.prototype.sort.
MergeSort involves three steps.
1. Split an array into two arrays of equal size.
2. Sort them recursively.
3. Merge them.
*/

function mergeSort(array) {
    // recursion ends if array has only one element
    if (array.length < 2)
        return array;
    var center = Math.floor(array.length / 2);
    // divide input array into two arrays
    var left = array.slice(0, center);
    var right = array.slice(center, array.length);

    // sort the left and right arrays recursively and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// this function merges two arrays
function merge(left, right) {
    // result array
    var result = [];
while(left.length && right.length){
    if (left[0] <= right[0]) {
        // push the smaller value into result first
        result.push(left.shift());
    }
    else {
    // if right[0] is smaller
        result.push(right.shift());
    }
}
while (left.length)
    result.push(left.shift());

while (right.length)
    result.push(right.shift());

return result;
}

var mySortedArray = mergeSort([37, 209, 3, 738, 201, 985, 199, 666, 7]);
console.log(mySortedArray); // [3, 7, 37, 199, 201, 209, 666, 738, 985]


// QuickSort is also a popular sorting algorithm. Involves the following steps.
// 1. Create two empty arrays, 'left' and 'right'.
// 2. Use the first element of the input array as the 'pivot' element.
// 3. Push elements less than 'pivot' in the 'left' array, and the remaining in the 'right' array.
// 4. Sort the two arrays 'left' and 'right' recursively.
// 5. Join the three - 'left', 'right' and 'pivot'.

function quickSort(array) {
    // recursion ends if input 'array' is empty
    if (array.length == 0)
        return [];

    var left = [];
    var right = [];
    var pivot = array[0];
    // Push elements less than 'pivot' in the 'left' array, 
    // and the remaining in the 'right' array
    for (var i = 1; i < array.length; i++ ) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }

    // Sort the two arrays 'left' and 'right' recursively
    // Then, join the three - 'left', 'right' and 'pivot'
    return quickSort(left).concat(pivot, quickSort(right));
}

mySortedArray = quickSort([9, 17, 7, 53, 41, 83, 99, 67, 80]);
console.log(mySortedArray); // [7, 9, 17, 41, 53, 67, 80, 83, 99]

// BubbleSort involves comparing each element of the array to
// the next and swapping them if the first element is less
// than the second element

function bubbleSort(array) {
    // boolean variable for a 'while loop'
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length - 1; i++ ) {
            // compare each element to the next
            // swap them if the first element is greater
            
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }
    // if 'swapped' is false loop ends
    while(swapped)
}

var myArray = [10, 30, 20, 70, 50, 40, 20, 40]
bubbleSort(myArray);
console.log(myArray);