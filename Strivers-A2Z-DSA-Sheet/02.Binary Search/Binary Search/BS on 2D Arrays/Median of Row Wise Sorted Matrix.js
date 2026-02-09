// Median of Row Wise Sorted Matrix

// Problem Statement: Given a row-wise sorted matrix of size MXN, where M is no. of rows and N is no. of columns, find the median in the given matrix.


// Note: MXN is odd.

// Example 1:
// Input Format:M = 3, N = 3, matrix[][] =
// 1 4 9 
// 2 5 6
// 3 8 7
// Result: 5

// Explanation:  If we find the linear sorted array, the array becomes 1 2 3 4 5 6 7 8 9. So, median = 5

// Example 2:
// Input Format:M = 3, N = 3, matrix[][] =
// 1 3 8 
// 2 3 4
// 1 2 5
// Result: 3

// Explanation:  If we find the linear sorted array, the array becomes 1 1 2 2 3 3 4 5 7 8. So, median = 3

                                
function upperBound(arr, x, n) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] > x) {
            ans = mid;
            // look for a smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

function countSmallEqual(matrix, m, n, x) {
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        cnt += upperBound(matrix[i], x, n);
    }
    return cnt;
}

function median(matrix, m, n) {
    let low = Number.MAX_SAFE_INTEGER, high = Number.MIN_SAFE_INTEGER;

    // point low and high to the right elements:
    for (let i = 0; i < m; i++) {
        low = Math.min(low, matrix[i][0]);
        high = Math.max(high, matrix[i][n - 1]);
    }

    let req = Math.floor((n * m) / 2);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let smallEqual = countSmallEqual(matrix, m, n, mid);
        if (smallEqual <= req) low = mid + 1;
        else high = mid - 1;
    }
    return low;
}


const matrix = [
    [1, 2, 3, 4, 5],
    [8, 9, 11, 12, 13],
    [21, 23, 25, 27, 29]
];
const m = matrix.length;
const n = matrix[0].length;
const ans = median(matrix, m, n);
console.log("The median element is: " + ans);             
                                
                            