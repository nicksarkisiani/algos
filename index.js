const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// linear search

function linear (arr, target) {
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    
    return -1;
}

// binary search

function binarySearch(arr, target) {
    
    let start = 0;
    let end = arr.length - 1;
    let mid;
    
    while(start <= end){
        mid = Math.floor((end + start) / 2);
        
        if(arr[mid] === target){
            return mid;
        }
        console.log(start, end)
        if(arr[mid] > target) {
            end = mid - 1;
        
        } else {
            start = mid + 1;
        }
    }
    return -1;
}



// bubble sort

let arr = [2, 10, 4, 1, 5, 8];

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; i < arr.length; j++){
        if(j === arr.length - 1) break;
        if(arr[j] > arr[j + 1]){
            let tmp = arr[j]
            arr[j] = arr[j + 1];
            arr[j+1] = tmp;
        }
    }
}

console.log(arr)
// selection sort

arr = [2, 10, 4, 1, 5, 8]

let unSorted = arr.slice();
let sorted = [];
let min = 0;

for(let i = 0; i < arr.length; i++){
    min = unSorted[0]
    minIndex = 0;
    for(let j = 0; j < arr.length; j++){
        if(min > unSorted[j]){
            min = unSorted[j]
            minIndex = j;
        }
    }
    sorted.push(min);
    let tmp = unSorted[0];
    unSorted[0] = min;
    unSorted[minIndex] = tmp;
    unSorted.shift();
}

console.log(sorted)

arr = [2, 10, 4, 1, 5, 8];
// quick sort

function quickSort(arr) {
    if(arr.length <= 1) return arr
    
    let index = Math.floor(arr.length / 2);
    const pivot = arr[Math.floor(arr.length / 2)];
    
    const leftSide = [];
    const rightSide = [];
    
    for(let num of arr) {
        if(num === pivot) continue;
        if(num > pivot) {
            rightSide.push(num);
        } else {
            leftSide.push(num);
        }
    }
    
    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)]
    
}

console.log(quickSort(arr))

arr =  [2, 10, 4, 1, 5, 8];


// merge sort

// function mergeSort(arr) {
//     let half = Math.floor(arr.length / 2)
    
//     if(arr.length === 1) {
//         return arr;
//     }
    
//     let [left, right] = [mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half))];
    
//     let sorted = []
    

//     while(left.length || right.length) {
//         if(left[0] > right[0]){
//             sorted.push(right[0])
//             right.shift();
//         } else {
//             sorted.push(left[0])
//             left.shift();
//         }
        
//         if(left.length === 0){
//             sorted = [...sorted, ...right]
//             right = []
//         } 
//         if(right.length === 0){
//             sorted = [...sorted, ...left]
//             left = []
//         }
//     }
    
    
//     return sorted
// }


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    let sorted = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sorted.push(left[i++]);
        } else {
            sorted.push(right[j++]);
        }
    }

    return [...sorted, ...left.slice(i), ...right.slice(j)];
}


console.log(mergeSort(arr))



// factorial
function factorial (n) {
    if(n === 1) return 1;
    return n * factorial(n - 1);
}

// fibonacci
function fib (n){
    if(n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

// group by

function groupBy(arr) {
    return arr.reduce((prev, curr) => {
        let l = parseInt(curr);
        prev[l] ? prev[l].push(curr) : prev[l] = [curr];
        return prev;
    }, {})    
}


console.log(groupBy([6.1, 4.2, 6.3]))








