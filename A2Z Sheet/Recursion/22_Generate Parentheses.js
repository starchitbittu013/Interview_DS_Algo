// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8


// ✅ Recursive Solution (Backtracking)

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(current, open, close) {
        // If the current string has reached the maximum length (2*n), it's a valid combination
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // If we can add more '(', do it
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // If we can add more ')', do it
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
};

// 📘 Terminology
// current: The string being built ("(()", "()", etc.).

// open: How many '(' are already added.

// close: How many ')' are already added.

// Base case: When current.length === 2 * n, we add it to result.
// ---

// ## 🔁 Why It’s Called **Backtracking**

// > **Backtracking** is a technique where we **build a solution step by step**, 
// and **backtrack (go back)** when we realize we can’t move forward with a partial solution.

// Here:
// - We try to build each string one character at a time.
// - We **try both** adding `'('` and `')'` as long as it remains valid.
// - If adding a character leads to an invalid state (e.g., more `)` than `(`), we **backtrack** and try the other option.

// So it's a **DFS-style** (Depth First Search) exploration where invalid branches are **pruned** early.

// ---

// ## ✅ Validity Checks
// ```js
// if (open < n)     // We can still add more '('
// if (close < open) // Only add ')' if we have an unmatched '('


//                           "", 0, 0
//                            |
//                     add '(' ↓
//                        "(", 1, 0
//                          |
//                   add '(' ↓
//                      "((", 2, 0
//                        |
//                 add '(' ↓
//                    "(((", 3, 0
//                      |
//              can only add ')' now
//                     "((()", 3,1
//                        |
//                     "((())", 3,2
//                          |
//                     "((()))", 3,3  ✅ (added to result)

// Backtrack ⬅️ and try adding ')' earlier:

//                      "((", 2, 0
//                        |
//                try ')': "(()", 2,1
//                   /              \
//           "(()(", 3,1          "(()))", ❌ invalid
//                |
//          "(()()", 3,2
//                |
//          "(()())", 3,3 ✅

// ...and so on until all branches are explored.

// ---

// ## 📦 Result (n = 3)
// Final combinations found:
// [
// "((()))",
// "(()())",
// "(())()",
// "()(())",
// "()()()"
// ]

    //                               "" (0, 0)
    //                               /       
    //                          add '('       
    //                            ↓         
    //                        "(" (1, 0)
    //                       /         \
    //                add '('         add ')'
    //                 ↓                 ↓
    //             "((" (2, 0)        "()" (1, 1)
    //              /                     \
    //        add ')'                     add '('
    //         ↓                            ↓
    //       "(()" (2,1)                "()(" (2,1)
    //         |                           |
    //    add ')'                          |
    //      ↓                              ↓
    //   "(())" (2,2) ✅               "()()" (2,2) ✅
