/*
QUESTION:
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user,
and is able to see the 10 most recent tweets in the user's news feed.

APPROACH:
To design the Twitter class, we can use the following data structures:

1. following: Map that stores the users and the set of users they are following.
2. posts: Map that stores the tweets of each user as array of [timestamp, tweetId].
3. time: Variable that keeps track of the timestamp for tweets.

The Twitter class provides the following methods:
1. Twitter(): Initializes the Twitter object.
2. postTweet(userId, tweetId): Composes a new tweet with ID tweetId by the user userId.
3. getNewsFeed(userId): Retrieves the 10 most recent tweet IDs in the user's news feed.
4. follow(followerId, followeeId): The user with ID followerId starts following the user with ID followeeId.
5. unfollow(followerId, followeeId): The user with ID followerId stops following the user with ID followeeId.

TIME COMPLEXITY:
- postTweet: O(1)
- getNewsFeed: O(F * P * log(P)) where F is followers count and P is max posts
- follow/unfollow: O(1)

SPACE COMPLEXITY:
O(U + P) where U is the number of users and P is the total number of posts.
*/

class Twitter {
    constructor() {
        this.following = new Map(); // userId -> Set of followeeIds
        this.posts = new Map();     // userId -> array of [timestamp, tweetId]
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        // Each user follows themselves
        if (!this.following.has(userId)) {
            this.following.set(userId, new Set([userId]));
        } else {
            this.following.get(userId).add(userId);
        }

        if (!this.posts.has(userId)) {
            this.posts.set(userId, []);
        }

        // Add tweet with timestamp
        this.posts.get(userId).unshift([this.time, tweetId]);
        this.time++;

        // Keep only 10 most recent tweets per user
        if (this.posts.get(userId).length > 10) {
            this.posts.get(userId).pop();
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const allPosts = [];

        // Initialize following set if not exists
        if (!this.following.has(userId)) {
            this.following.set(userId, new Set([userId]));
        }

        // Collect all posts from followed users
        for (const followeeId of this.following.get(userId)) {
            if (this.posts.has(followeeId)) {
                for (const post of this.posts.get(followeeId)) {
                    allPosts.push(post);
                }
            }
        }

        // Sort by timestamp (descending) and get top 10
        allPosts.sort((a, b) => b[0] - a[0]);

        const result = [];
        const n = Math.min(10, allPosts.length);
        for (let i = 0; i < n; i++) {
            result.push(allPosts[i][1]);
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set([followerId]));
        }
        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId !== followeeId && this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}

// Example usage:
// const twitter = new Twitter();
// twitter.postTweet(1, 5);
// console.log(twitter.getNewsFeed(1)); // [5]
// twitter.follow(1, 2);
// twitter.postTweet(2, 6);
// console.log(twitter.getNewsFeed(1)); // [6, 5]
// twitter.unfollow(1, 2);
// console.log(twitter.getNewsFeed(1)); // [5]

