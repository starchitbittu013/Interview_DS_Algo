// Allocate Minimum Number of Pages


// Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:

// Each student gets at least one book.
// Each book should be allocated to only one student.
// Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1

/**
 * Distributes books among students such that the maximum number of pages assigned
 * to any student is minimized.
 *
 * @param {number[]} books - An array representing the number of pages in each book.
 * @param {number} numBooks - Total number of books.
 * @param {number} numStudents - Total number of students.
 * @returns {number} - The minimum possible value of the maximum pages assigned to a student.
 */
function findPages(books, numBooks, numStudents) {
    // Edge case: not enough books for each student
    if (numBooks < numStudents) return -1;

    // Calculate the total pages and find the book with the maximum pages
    let totalPages = 0;
    let maxPagesInSingleBook = -Infinity;

    for (let i = 0; i < numBooks; i++) {
        totalPages += books[i];
        maxPagesInSingleBook = Math.max(maxPagesInSingleBook, books[i]);
    }

    // Binary search range
    let low = maxPagesInSingleBook; // Minimum possible max pages (must at least fit the biggest book)
    let high = totalPages;          // Maximum possible max pages (all books to one student)
    let optimalMaxPages = -1;

    /**
     * Helper function to check if it is possible to assign books such that
     * no student gets more than 'maxPagesAllowed' pages.
     */
    function canAllocateBooks(maxPagesAllowed) {
        let studentsRequired = 1;
        let currentPageSum = 0;

        for (let i = 0; i < numBooks; i++) {
            // If a single book has more pages than allowed, allocation is not possible
            if (books[i] > maxPagesAllowed) return false;

            // Allocate to next student if adding this book exceeds the limit
            if (currentPageSum + books[i] > maxPagesAllowed) {
                studentsRequired++;
                currentPageSum = books[i];

                // More students required than allowed
                if (studentsRequired > numStudents) return false;
            } else {
                currentPageSum += books[i];
            }
        }

        return true;
    }

    // Binary search to find the minimum possible maximum page count
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (canAllocateBooks(mid)) {
            optimalMaxPages = mid;     // Valid solution found, try for better (lower) one
            high = mid - 1;
        } else {
            low = mid + 1;             // Invalid, try with a higher page limit
        }
    }

    return optimalMaxPages;
}

module.exports.findPages = findPages;

