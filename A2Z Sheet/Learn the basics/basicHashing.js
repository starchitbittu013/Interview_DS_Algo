// When to Use Array vs. Map for Faster Fetching
// Choosing between an Array and a Map depends on the type of data you're working with, how you plan to access it, and the performance requirements.

// 1. Arrays
// Use Arrays When:

// Index-Based Access:

// You need fast access by numeric indices (e.g., arr[5]).
// Arrays have O(1) time complexity for direct index access.

// Sequential Data:

// The data is ordered or naturally fits into a sequence.
// Useful for iterating through elements in order.

// Small Datasets with Dense Keys:

// The data has consecutive integer keys (e.g., Fibonacci numbers).
// No need for complex key-value lookups.

// Memory Efficiency:

// Arrays are more memory-efficient for small datasets.
// Lower overhead compared to Map.

// Example Use Cases for Arrays:

// Dynamic Programming:
// Storing computed values like Fibonacci sequences or factorials.

// Simple Caches:
// Caching results with integer keys, where the key space is small and dense.

// 2. Maps
// Use Maps When:

// Non-Numeric or Sparse Keys:

// You need to store data with non-integer keys (e.g., strings, objects).
// For example: map.set('name', 'Alice').

// Unordered or Sparse Data:

// When keys are not consecutive or there are large gaps between numeric keys.
// Using an array in such cases would waste memory.

// Frequent Insertions and Deletions:


// Maps handle dynamic changes more efficiently than arrays.

// Fast Lookup by Key:

// Maps provide O(1) average-time complexity for lookups, insertions, and deletions.

// Key Preservation:

// Maps maintain insertion order of keys, which is useful if you need to iterate in the order items were added.

// Example Use Cases for Maps:

// Memoization with Complex Keys:
// Storing results of expensive computations where keys are objects, strings, or non-sequential numbers.

// Counting Frequencies:
// Tracking the frequency of items in an array, like counting occurrences of words in a string.

// Sparse Dynamic Programming:
// When the state space is large but only a few states are actually computed.

// Performance Summary

// Criteria	                                    Array	                                       Map
// Access Time	                            O(1) for index-based access	            O(1) for key-based access
// Key Type	                                Numeric indices	                        Any data type (string, object)
// Ordering	                                Ordered by index	                    Maintains insertion order
// Memory Efficiency	                    More efficient for small data	        Overhead due to key hashing
// Dynamic Insertions/Deletions	            Slower for large arrays	                Faster due to hash map structure
// Sparse Data Handling	                    Inefficient (wasted memory)	            Efficient
// When to Choose Which?
// Choose Array if:

// You need fast, index-based access.
// Your keys are consecutive integers.
// You're working on small datasets or dynamic programming.

// Choose Map if:

// Your keys are non-integer or sparse.
// You need to store key-value pairs with dynamic keys.
// You require frequent insertions/deletions.
// You're doing memoization with complex states.

// Number Hashing and Character Hashing
// In number hashing, each index of the hash array represents an element in the given array. 
// So, somehow, we need to map the characters of the string to an integer so that we can represent them using 
// the indices of the hash array.

// In order to map the characters we need to use the ASCII values of the respective characters. 
// The ASCII value of lowercase a is 97. So, if we write int x = ‘a’, it will typecast the character, 
// ‘a’, into the ASCII value, 97, and store it in the variable x instead of throwing an error. So, similarly, 
// if we write hash[‘a’], it will signify hash[97]. 

// Case 1 - If the string contains only lowercase letters: In this case, we can map the characters like:
// In order to get the corresponding value for a character, we will use the following formula:

// corresponding value = given character - 'a'

// For example, if the given character is ‘f’, we will get the value as (‘f’ - ‘a’) = (102-97) = 5.  
// Here, we can easily observe that the maximum value can be 25. 

// So, for character hashing in this case, we need a hash array of size 26. And while 
// pre-storing we will do hash[s[i]-’a’] += 1 instead of hash[arr[i]] += 1, and 
// while fetching we will do hash[character-’a’] instead of hash[number]. 
// The rest of the methods will be as same as in the case of number hashing.

// Case 2 -  If the string contains only uppercase letters: In this case, we can map the characters like:
// In order to get the corresponding value for a character, we will use the following formula:

// corresponding value = given character - 'A'

// Then the process will be similar to case 1.

// Case 3 - If the string contains both uppercase and lowercase letters: 
// We have 256 characters in total in this case. So, we will create a hash array of size 256. 
// We will not subtract anything from the given character and will use the character as it is, 
// to access the hash array while pre-storing and fetching. For pre-storing hash[s[i]] += 1 and for 
// fetching we will use hash[character] only. The rest of the process will be exactly the same as in the number hashing.

// Note: The case 3 method also applies to case 1 and case 2. In character hashing, 
// the limit will not cross 256 and so we will always use this method.

// How to hash large numbers like 109 or higher:

// Until now, we have learned the method of number hashing but using this method we cannot 
// hash large numbers like 109 or higher. 
// We can solve this problem using the STL map and unordered_map in C++ or the HashMap in Java collection.

// Difference between map and unordered_map in C++:
// map: stores      all the lements in the sorted order of keys.
// unordered_map:   it does not follow any specific order

// Difference between array hashing and hashing using the map:

// Let’s understand the difference considering the array: [1, 2, 3, 1, 3, 2, 12]. 
// Here, the maximum element of the array is 12. So, if we apply array hashing, we need an array of size 13. 
// But if we apply the map data structure, length of the map data structure will be the number of unique 
// elements in the given Array. So, we are using lesser memory as compared to the array hashing.

// Note: If we want to fetch the value of a key that does not exist in the map, the map will always return 0 in C++,
//  null in Java and undefined in javascript.

// Time complexity of map data structure:
// The total time complexity will be O(N * time taken by map data structure).

// Storing(i.e. insertion) and fetching(i.e. retrieval) in a C++ map, 
// both take always O(logN) time complexity, where N = the size of the map. 

// But the unordered_map in C++ and HashMap in Java, both take O(1) time complexity 
// to perform storing(i.e. insertion) and fetching(i.e. retrieval). Now, it is valid for the best case and the average case. 

// But in the worst case, this time complexity will be O(N) for unordered_map. 
// Now, the worst case occurs very very rarely. It almost never happens and most of the time, 
// we will be using unordered_map. 

// Note: Our first priority will be always to use unordered_map and then map. 
// If unordered_map gives a time limit exceeded error(TLE), we will then use the map.

// The time complexity in the worst case is O(N) because of the internal collision.

// In order to understand collision properly, we need to understand the concept of how the hashing work with an optimized space.

// What is collision & How the hashing works:
// Hashing is done using several methods. Among them, the three most common ones are

// Division method
// Folding method
// Mid-Square method
// Here, we are only interested to discuss the division method. The rest two methods may be important for college exams but not much important in terms of interviews or coding rounds. 

// The map data structures in the C++ STL or in Java are implemented using different and complex methods. We need not know about them. But here we are going to discuss the division method so that we can understand the collision properly.

// Division Method:
// Let’s discuss it considering the following example:

// Assume, we are given an array: [2, 5, 16, 28, 139]. Here, we can apply array hashing, and to use that, we need to create an array of size 140. Now, what to do if we are given a constraint that we cannot use an array whose length is greater than 10?

// In order to solve this we will use the division method. We will simply consider the modulo 10 of each element of the array(element % 10) and we will hash(pre-store and fetch) the elements on the basis of the modulo value i.e. the remainder. The steps will look like the following:
// Pre storing: hash[arr[i]%10] += 1 and Fetching: hash[number%10]

// Now if we apply this method to the given array, the hash array will look like the following:


// This is how the division method works. We simply reduce the array elements and apply array hashing.

// Let’s discuss the questions that come up in the mind:

// Question: What if two or more array elements give the same remainder for modulo 10?
// In this case, we apply the linear chaining method. This method is implemented using Linked List which will be discussed later in another article. Here, we just need to understand the logic. While storing the elements we will maintain a chain(i.e. inserting the element itself to the corresponding index instead of just keeping the count) for each index(i.e. the remainder we get). And in that chains, we will store the elements in a sorted fashion.

// Let’s understand it considering the following example:

// Given array: [2, 5, 16, 28, 139, 38, 48, 28, 18]

// In this array 28, 38, 48, and 18 are giving the same value for modulo 10. So, we will apply linear chaining. The hash array will look like the following:


// Now to get the frequency of a number, we will first go to (number % 10) indexed chain and count the frequency of that number.

// Note: We can choose to take modulo of any number as per our need. Here for example we have taken the number 10.

// Collision:
// Now, if we are applying linear chaining and division rule and we find that all elements of an array get stored in a single index, then we will call it a case of collision.

// Example:

// Given array: [8, 18, 28, 38, 48, 58, 68, ….., 1008]
// If we apply the methods and take modulo 10 for every number, the hash array will look like the following:


// Now, while fetching we have to traverse N times(N = size of the given array) to find the frequency of an element. This is when the worst case happens and the time complexity becomes O(N). But this happens very very rarely.

// Whatever method the map is using, if all the elements go to the same hash index, we will call it a case of collision.

// Note: In the map data structure, the data type of key can be anything like int, double, pair<int, int>, etc.
//  But for unordered_map the data type is limited to integer, double, string, etc. 
// We cannot have an unordered_map whose key is pair<int, int>.

// Count frequency of each element in the array
// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	        5  2
//         15  1
// Explanation: 10 occurs 3 times in the array
// 	      5 occurs 2 times in the array
//               15 occurs 1 time in the array

// Solution 1: Use of two loops

// Intuition: We can simply use two loops, in which the first loop points to one element and 
// the second loop finds that element in the remaining array. We will keep track of the occurrence of 
// that same element by maintaining a count variable. We also have to maintain a visited array so that 
// it will keep track of the duplicate elements that we already count.  

// Solution 2: Using Map

// Intuition: We can use a map of value and frequency pair, in which we can easily update the 
// frequency of an element if it is already present in the map, if it is not present in the map then insert 
// it in the map with frequency as 1. After completing all the iterations, print the value frequency pair. 


