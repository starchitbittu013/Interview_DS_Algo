"""
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
"""

from typing import List
from collections import Counter


def least_interval(tasks: List[str], n: int) -> int:
    """
    Calculate minimum intervals needed to complete all tasks with cooldown

    Args:
        tasks: List of task characters
        n: Cooldown period between same tasks

    Returns:
        Minimum number of intervals needed
    """
    size = len(tasks)

    # Count frequency of each task
    freq = Counter(tasks)

    # Find maximum frequency
    max_freq = max(freq.values())

    # Calculate minimum intervals needed
    # (maxfreq - 1) groups of (n + 1) slots
    ans = (max_freq - 1) * (n + 1)

    # Count number of tasks having maximum frequency
    # These tasks will fill the last group
    for count in freq.values():
        if count == max_freq:
            ans += 1

    # Return maximum of calculated intervals and total tasks
    return max(ans, size)


# Example usage:
# print(least_interval(['A','A','A','B','B','B'], 2))  # Output: 8
# print(least_interval(['A','A','A','B','B','B'], 0))  # Output: 6
# print(least_interval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2))  # Output: 16

