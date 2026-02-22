/*
QUESTION:
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter
represents a different task. Tasks could be done in any order. Each task is done in one unit
of time. For each unit of time, the CPU could complete either one task or just be idle.

APPROACH:
To minimize the total time, we need to consider the task with the maximum frequency.
Let's assume the maximum frequency is maxfreq. The CPU will need at least (maxfreq - 1)
intervals of cooldown time between the executions of the tasks with the maximum frequency.

1. Create a frequency map to count the occurrences of each task.
2. Find the maximum frequency maxfreq.
3. Calculate the total number of intervals required by multiplying (maxfreq - 1) with (n + 1).
4. Iterate through the frequency map and count the number of tasks with the maximum frequency.
   Add this count to the total number of intervals.
5. Return the maximum of the total number of intervals and the total number of tasks.

TIME COMPLEXITY:
The time complexity is O(N), where N is the number of tasks. We iterate through the tasks
twice: once to calculate the frequencies and find the maximum frequency, and once to count
the number of tasks with the maximum frequency.

SPACE COMPLEXITY:
The space complexity is O(1) because the frequency map has a fixed number of unique tasks
(26 uppercase letters).
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
    const size = tasks.length;
    const mp = new Map();

    // Count frequency of each task
    for (const task of tasks) {
        mp.set(task, (mp.get(task) || 0) + 1);
    }

    // Find maximum frequency
    let maxFreq = 0;
    for (const [, freq] of mp) {
        maxFreq = Math.max(maxFreq, freq);
    }

    // Calculate minimum intervals needed
    let ans = (maxFreq - 1) * (n + 1);

    // Count number of tasks having maximum frequency
    for (const [, freq] of mp) {
        if (freq === maxFreq) {
            ans++;
        }
    }

    // Return maximum of calculated intervals and total tasks
    return Math.max(ans, size);
}

// Example usage:
// console.log(leastInterval(['A','A','A','B','B','B'], 2)); // Output: 8
// console.log(leastInterval(['A','A','A','B','B','B'], 0)); // Output: 6
// console.log(leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2)); // Output: 16

