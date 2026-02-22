"""
QUESTION:
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user,
and is able to see the 10 most recent tweets in the user's news feed.

APPROACH:
To design the Twitter class, we can use the following data structures:

1. following: Dict that stores the users and the set of users they are following.
2. posts: Dict that stores the tweets of each user as list of (timestamp, tweetId).
3. time: Variable that keeps track of the timestamp for tweets.

The Twitter class provides the following methods:
1. __init__(): Initializes the Twitter object.
2. post_tweet(userId, tweetId): Composes a new tweet with ID tweetId by the user userId.
3. get_news_feed(userId): Retrieves the 10 most recent tweet IDs in the user's news feed.
4. follow(followerId, followeeId): The user with ID followerId starts following the user with ID followeeId.
5. unfollow(followerId, followeeId): The user with ID followerId stops following the user with ID followeeId.

TIME COMPLEXITY:
- post_tweet: O(1)
- get_news_feed: O(F * P * log(P)) where F is followers count and P is max posts
- follow/unfollow: O(1)

SPACE COMPLEXITY:
O(U + P) where U is the number of users and P is the total number of posts.
"""

from collections import defaultdict
from typing import List


class Twitter:
    def __init__(self):
        self.following = defaultdict(set)  # userId -> set of followeeIds
        self.posts = defaultdict(list)      # userId -> list of (timestamp, tweetId)
        self.time = 0

    def post_tweet(self, userId: int, tweetId: int) -> None:
        """Compose a new tweet."""
        # Each user follows themselves
        self.following[userId].add(userId)

        # Add tweet with timestamp (at front for most recent)
        self.posts[userId].insert(0, (self.time, tweetId))
        self.time += 1

        # Keep only 10 most recent tweets per user
        if len(self.posts[userId]) > 10:
            self.posts[userId].pop()

    def get_news_feed(self, userId: int) -> List[int]:
        """Retrieve the 10 most recent tweet IDs in the user's news feed."""
        # Ensure user follows themselves
        self.following[userId].add(userId)

        # Collect all posts from followed users
        all_posts = []
        for followee_id in self.following[userId]:
            all_posts.extend(self.posts[followee_id])

        # Sort by timestamp (descending) and get top 10
        all_posts.sort(key=lambda x: x[0], reverse=True)

        return [post[1] for post in all_posts[:10]]

    def follow(self, followerId: int, followeeId: int) -> None:
        """Follower follows a followee."""
        self.following[followerId].add(followerId)  # Ensure follows self
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        """Follower unfollows a followee."""
        if followerId != followeeId and followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)


# Example usage:
# twitter = Twitter()
# twitter.post_tweet(1, 5)
# print(twitter.get_news_feed(1))  # [5]
# twitter.follow(1, 2)
# twitter.post_tweet(2, 6)
# print(twitter.get_news_feed(1))  # [6, 5]
# twitter.unfollow(1, 2)
# print(twitter.get_news_feed(1))  # [5]

