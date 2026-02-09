/*
I don't think anyone needs it's solution. The idea is to traverse the array using loop and when the element
is equal to k return the same
*/

// CODE:-
function linearSearch(arr, n, k) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === k)
            return i;
    }
    return -1;
}

// TIME COMPLEXITY = O(N)
// SPACE COMPLEXITY = O(1)
