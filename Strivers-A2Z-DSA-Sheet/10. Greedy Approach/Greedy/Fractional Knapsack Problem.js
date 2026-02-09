// Fractional Knapsack Problem

// Problem Statement: The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.

// Note: We can either take the item as a whole or break it into smaller units.

// Example 1:
// Input:
//  val = [60, 100, 120], wt = [10, 20, 30], capacity = 50  
// Output:
//  240.000000  
// Explanation:
  
// - Take item 0 (w = 10, v = 60)  
// - Take item 1 (w = 20, v = 100)  
// - Take 2⁄3 of item 2 (w = 20, v = 80)  
// Total value = 60 + 100 + 80 = 240

// Example 2:
// Input:
//  val = [60, 100], wt = [10, 20], capacity = 50  
// Output:
//  160.000000  
// Explanation:
  
// Both items fit entirely since total weight 10 + 20 = 30 ≤ 50.  
// Total value = 60 + 100 = 160


// Algorithm
// The greedy approach to maximize the answer is to prioritize items with higher values.
// Since items can be broken into smaller units, we focus on selecting items with the highest value-to-weight ratio first.
// To achieve this, sort the items in decreasing order based on their value-to-weight ratio.
// Once sorted, iterate through the items and pick those whose weight is less than or equal to the current capacity of the knapsack.
// If an item's weight exceeds the remaining capacity, break the item into smaller units, calculate its value according to the remaining capacity, and add this value to the total.


function fractionalKnapsack(capacity, values, weights) {
    const n = values.length;

    // Create items with value, weight, ratio
    const items = [];
    for (let i = 0; i < n; i++) {
        items.push({
            value: values[i],
            weight: weights[i],
            ratio: values[i] / weights[i]
        });
    }

    // Sort by ratio descending
    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;

    for (const item of items) {
        if (capacity === 0) break;

        if (item.weight <= capacity) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += item.value * (capacity / item.weight);
            capacity = 0;
        }
    }

    return totalValue;
}


// # Class to represent an item with value and weight
// class Item:
//     def __init__(self, value, weight):
//         self.value = value
//         self.weight = weight

// # Function to calculate the maximum value we can get with fractional knapsack
// def fractionalKnapsack(W, arr, n):

//     # Sort items based on the value/weight ratio in descending order
//     arr.sort(key=lambda x: (x.value / x.weight), reverse=True)

//     curWeight = 0  # Current weight of knapsack
//     finalvalue = 0.0  # Final value we can achieve

//     # Iterate through the sorted items
//     for i in range(n):

//         # If the current item can be fully added to the knapsack
//         if curWeight + arr[i].weight <= W:
//             curWeight += arr[i].weight
//             finalvalue += arr[i].value  # Add the full value of the item
//         else:
//             # If the current item can't be fully added, take the fractional part
//             remain = W - curWeight
//             finalvalue += (arr[i].value / arr[i].weight) * remain
//             break  # Break as we have filled the knapsack

//     return finalvalue  # Return the maximum value that can be carried

// # Main function
// def main():
//     # Input data
//     n = 3
//     weight = 50  # Capacity of knapsack
//     arr = [Item(100, 20), Item(60, 10), Item(120, 30)]

//     # Calculate the maximum value we can get with the fractional knapsack
//     ans = fractionalKnapsack(weight, arr, n)

//     # Output the result
//     print(f"The maximum value is: {ans:.2f}")

// # Call the main function
// if __name__ == "__main__":
//     main()



// 0/1 Knapsack
// The 0/1 Knapsack problem is a problem where we determine the maximum value that can fit into a knapsack with a limited capacity. Unlike the Fractional Knapsack problem, in the 0/1 Knapsack problem, we must take all items (0 or 1), and we cannot take fractions.

// Greedy Approach:

// To solve this problem using a greedy approach, we select items based on their value-to-weight ratio, starting with the highest ratio and continuing until the knapsack is full.

// Example:

// Suppose we have the following items:

// Item 1: Value = 60, Weight = 10
// Item 2: Value = 100, Weight = 20
// Item 3: Value = 120, Weight = 30
// Knapsack Capacity = 50
// Calculate the value-to-weight ratio for each item:

// Item 1: 60/10 = 6
// Item 2: 100/20 = 5
// Item 3: 120/30 = 4
// Sort the items based on their value-to-weight ratio (highest first):

// Item 1: 6
// Item 2: 5
// Item 3: 4
// Step-by-Step selection:

// Start with Item 1:
// The knapsack can hold 50 weight units, and Item 1 weighs 10.
// Select the entire Item 1.
// Remaining capacity: 50 - 10 = 40
// Move to Item 2:
// The knapsack can still hold 40 weight units, and Item 2 weighs 20.
// Select the entire Item 2.
// Remaining capacity: 40 - 20 = 20
// Move to Item 3:
// The knapsack can hold 20 more weight units, but Item 3 weighs 30.
// Since fractions are not allowed in 0/1 Knapsack, we skip Item 3 because it doesn’t fit.
// Final selection:

// Item 1 → Value = 60
// Item 2 → Value = 100
// Total Value = 60 + 100 = 160
// The greedy algorithm successfully selects the best items that maximize the value while fitting within the knapsack’s capacity. The final optimal value is 160.

// This example works fine, but the greedy method does not guarantee the optimal solution for all instances of 0/1 knapsack problem. Dynamic programming or branch and bound algorithms should be used instead for optimal solutions.