// Split n into maximum composite numbers

// Given n, print the maximum number of composite numbers that sum up to n. First few composite numbers are 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ……… 
// Examples:  

// Input: 90   
// Output: 22
// Explanation: If we add 21 4's, then we 
// get 84 and then add 6 to it, we get 90.

// Input: 10
// Output: 2
// Explanation: 4 + 6 = 10

// Below are some important observations. 

// If the number is less than 4, it won’t have any combinations.
// If the number is 5, 7, 11, it wont have any splitting.
// Since smallest composite number is 4, it makes sense to use maximum number of 4s.
// For numbers that don't leave a composite remainder when divided by 4, we do following. If remainder is 1, we subtract 9 from it to get the number which is perfectly divisible by 4. If the remainder is 2, then subtract 6 from it to make n a number which is perfectly divisible by 4. If the remainder is 3, then subtract 15 from it to make n perfectly divisible by 4, and 15 can be made up by 9 + 6.
// So the main observation is to make n such that is composes of maximum no of 4’s and the remaining can be made up by 6 and 9. We won’t need composite numbers more than that, as the composite numbers above 9 can be made up of 4, 6, and 9 if it is possible to make them up with composite numbers.
// Below is the implementation of the above approach 


    // Javascript program to split a number
// into maximum number of 
// composite numbers.
  
// function to calculate the
// maximum number of composite 
// numbers adding upto n
function c_ount(n)
{
      
    // 4 is the smallest
    // composite number
    if (n < 4)
        return -1;
  
    // stores the remainder when
    // n is divided by 4
    let rem = n % 4;
  
    // if remainder is 0, then it 
    // is perfectly divisible by 4.
    if (rem == 0)
        return n / 4;
  
    // if the remainder is 1
    if (rem == 1) {
  
        // If the number is less 
        // then 9, that is 5, then
        // it cannot be expressed
        // as  4 is the only 
        //composite number less 
        // than 5
        if (n < 9)
            return -1;
  
        // If the number is greater 
        // then 8, and has a 
        // remainder of 1, then 
        // express n as n-9 a and
        // it is perfectly divisible 
        // by 4 and for 9, count 1.
        return (n - 9) / 4 + 1;
    }
  
      
    // When remainder is 2, just 
    // subtract 6 from n, so that n
    // is perfectly divisible by 4
    // and count 1 for 6 which is
    // subtracted.
    if (rem == 2)
        return (n - 6) / 4 + 1;
  
  
    // if the number is 7, 11 which
    // cannot be expressed as sum of
    // any composite numbers
    if (rem == 3) {
        if (n < 15)
            return -1;
  
        // when the remainder is 3, 
        // then subtract 15 from it 
        // and n becomes perfectly
        // divisible by 4 and we add
        // 2 for 9 and 6, which is 
        // getting subtracted to make
        // n perfectly divisible by 4.
        return (n - 15) / 4 + 2;
    }
}
  
// driver program to test the above
// function
  
    let n = 90;
    document.write(c_ount(n) + "<br>");
  
    n = 143;
    document.write(c_ount(n));