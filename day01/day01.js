const fs = require('fs').promises;

// quicksort
// Example usage
/*
const array = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("Original array:", array);

quickSort(array);

console.log("Sorted array:", array);
*/
// Function to partition the array
function partition(array, low, high) {
    const pivot = array[high]; // Select the pivot element
    let i = low - 1; // Pointer for the smaller element

    for (let j = low; j < high; j++) {
        // If the current element is less than or equal to the pivot
        if (array[j] <= pivot) {
            i++;
            // Swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Place the pivot in its correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; // Return the pivot index
};

// Recursive QuickSort function
function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        // Find the pivot index
        const pivotIndex = partition(array, low, high);

        // Recursively sort the elements on either side of the pivot
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
};
// -- end of quicksort functions

function parser() {
    filePath = 'C:/Users/bmwoo/Desktop/PersonalGithubRepos/AdventOfCode2025/day01/day01_input_text.txt'
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
        console.log(data);
    });
};

parser();