// Count the number of subarrays with given xor K
// Problem Statement: Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.

// Example 1:
// Input Format:
//  A = [4, 2, 2, 6, 4] , k = 6
// Result:
//  4
// Explanation:
//  The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

// Example 2:
// Input Format:
//  A = [5, 6, 7, 8, 9], k = 5
// Result:
//  2
// Explanation:
//  The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

function subarraysWithXorK(a, k) {
    const n = a.length; //size of the given array.
    let cnt = 0;
  
    // Step 1: Generating subarrays:
    for (let i = 0; i < n; i++) {
      let xorr = 0;
      for (let j = i; j < n; j++) {
  
        //step 2:calculate XOR of all
        // elements:
        xorr = xorr ^ a[j];
  
        // step 3:check XOR and count:
        if (xorr == k) cnt++;
      }
    }
    return cnt;
  }
  
//   const a = [4, 2, 2, 6, 4];
//   const k = 6;
//   const ans = subarraysWithXorK(a, k);
//   console.log(`The number of subarrays with XOR k is: ${ans}`);


function subarraysWithXorK(a, k) {
    const n = a.length; //size of the given array.
    let xr = 0;
    const mpp = new Map(); //declaring the map.
    mpp.set(xr, 1); //setting the value of 0.
    let cnt = 0;
  
    for (let i = 0; i < n; i++) {
      // prefix XOR till index i:
      xr = xr ^ a[i];
  
      //By formula: x = xr^k:
      const x = xr ^ k;
  
      // add the occurrence of xr^k
      // to the count:
      cnt += mpp.get(x) || 0;
  
      // Insert the prefix xor till index i
      // into the map:
      mpp.set(xr, (mpp.get(xr) || 0) + 1);
    }
    return cnt;
  }
  
  const a = [4, 2, 2, 6, 4];
  const k = 6;
  const ans = subarraysWithXorK(a, k);
  console.log(`The number of subarrays with XOR k is: ${ans}`);
  