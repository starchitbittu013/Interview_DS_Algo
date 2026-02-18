/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) {
//     const output = [];
//     for (let i = 0; i <= n; i++) {
//         let value = 0;
//         const binaryString = i.toString(2);
//         for (let j = 0; j < binaryString.length; j++) {
//             value += Number(binaryString[j]);
//         }
//         output.push(value);
//     }
//     return output;
// };
// Time Complexity = O(n^2)
// Space Complexity = O(n)

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n+1);
      ans[0] = 0;
      for(let index = 1; index<=n; index++){
          ans[index] = ans[Math.floor(index/2)] + index%2;
          console.log(ans[Math.floor(index/2)] )
          console.log(index%2);
          console.log(ans[index]);
      }
      return ans;
  };
//console.log(countBits(0));
console.log(countBits(2));

// var countBits = function(n) {
//     let ans = []

//     for(let i=0;i<=n;i++){
//         ans[i] = helper(i,ans)
//     }
//     return ans
// };

// const helper = (n,memo) => {
//     if(n==0) memo[n]=n
//     else if(n==1) memo[n]=n
//     if(memo[n]==undefined){
//         if(n%2==0){
//             memo[n]=helper((n/2),memo)
//         }
//         else{
//             memo[n]=helper(Math.floor(n/2),memo)+1
//         }
//     }
//     else{
//         if(memo[n]!=0) return memo[n];
//     }
//     return memo[n]
// }