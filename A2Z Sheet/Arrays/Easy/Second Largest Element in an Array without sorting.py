# Given an array arr of size n, print the second largest distinct element from an array. 
# If the second largest element doesn't exist then return -1.

# Example 1:

# Input: 
# n = 6, arr[] = {12, 35, 1, 10, 34, 1}
# Output: 34
# Explanation: The largest element of the array is 35 and the second largest element is 34.
# Example 2:

# Input: 
# n = 3, arr[] = {10, 5, 10}
# Output: 5
# Explanation: The largest element of the array is 10 and the second largest element is 5.
# Expected Time Complexity: O(n)
# Expected Auxiliary Space: O(1)

# Constraints:
# 2 ≤ n ≤ 105
# 1 ≤ arri ≤ 105


class Solution:
    def secondLargest(self, arr, n):
        large = float('-inf')
        second_large = float('-inf')

        if(n < 2):
            return -1

        for i in range(n):
            if(arr[i] > large):
                second_large = large
                large = arr[i]

            elif(arr[i] > second_large and arr[i] < large):
                second_large = arr[i]    

        return second_large



if __name__ == '__main__':
    arr = [1, 2, 4, 6, 7, 5]
    n = len(arr)
    obj = Solution()
    secondLargest = obj.secondLargest(arr, n)
    print("Second Largest: ", secondLargest)


