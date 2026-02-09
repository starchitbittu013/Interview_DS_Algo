"""
QUESTION:
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.


Example:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


APPROACH:
To implement the LRU cache, we can use a combination of a hash map and a doubly linked list.
- The hash map will store the key-value pairs, where the key is the cache key and the value is a pointer to the corresponding node in the linked list.
- The doubly linked list will maintain the order of the recently used keys, where the front of the list represents the most recently used key and the back of the list represents the least recently used key.

IMPLEMENTATION:
1. Initialize the LRU cache with the given capacity.
2. Implement the get(key) function:
   - If the key exists in the cache, move the corresponding node to the front of the list (indicating it is the most recently used).
   - Return the value of the key if it exists, otherwise return -1.
3. Implement the put(key, value) function:
   - If the key already exists in the cache, update its value and move the corresponding node to the front of the list.
   - If the key does not exist:
     - If the cache is full, remove the least recently used key (from the back of the list) and remove its entry from the hash map.
     - Add the new key-value pair to the front of the list and insert its entry into the hash map.

CODE:
"""


class ListNode:
    def __init__(self, key: int, value: int):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.addr = {}  # key -> node
        # Dummy head and tail for easier manipulation
        self.head = ListNode(0, 0)
        self.tail = ListNode(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node: ListNode) -> None:
        """Remove a node from the list"""
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_front(self, node: ListNode) -> None:
        """Add a node to the front (after head)"""
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.addr:
            return -1  # Key not found

        node = self.addr[key]
        # Move to front
        self._remove(node)
        self._add_to_front(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        # If the key already exists, update its value and move it to the front
        if key in self.addr:
            node = self.addr[key]
            node.value = value
            self._remove(node)
            self._add_to_front(node)
            return

        # If the capacity is full, remove the least recently used key
        if len(self.addr) == self.capacity:
            lru_node = self.tail.prev
            self._remove(lru_node)
            del self.addr[lru_node.key]

        new_node = ListNode(key, value)
        self._add_to_front(new_node)
        self.addr[key] = new_node


"""
COMPLEXITY ANALYSIS:
- The time complexity of both the get() and put() operations is O(1) since we use a hash map to achieve constant time access and update.
- The space complexity is O(capacity) since the cache can store at most 'capacity' key-value pairs.
"""

if __name__ == "__main__":
    # Test example
    lru_cache = LRUCache(2)
    lru_cache.put(1, 1)
    lru_cache.put(2, 2)
    print(f"get(1): {lru_cache.get(1)}")  # 1
    lru_cache.put(3, 3)
    print(f"get(2): {lru_cache.get(2)}")  # -1
    lru_cache.put(4, 4)
    print(f"get(1): {lru_cache.get(1)}")  # -1
    print(f"get(3): {lru_cache.get(3)}")  # 3
    print(f"get(4): {lru_cache.get(4)}")  # 4
