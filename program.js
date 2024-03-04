class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};

class Directory {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    getSize() {
        let totalSize = 0;
        for (const child of this.children) {
            if(child instanceof File) {
                totalSize += child.size;
            } else if(child instanceof Directory) {
                totalSize += child.getSize();
            }
        }
        return totalSize;
    }
};

const root = new Directory('root');
const dir1 = new Directory('dir1');
const dir2 = new Directory('dir2');

const file1 = new File('file1.txt', 100);
const file2 = new File('file2.txt', 200);
const file3 = new File('file3.txt', 300);

root.addChild(dir1);
root.addChild(dir2);

dir1.addChild(file1);
dir1.addChild(file2);
dir2.addChild(file3);

console.log(dir1.getSize());
console.log(dir2.getSize());
console.log(root.getSize());


// Rate Limit 
class RateLimiter {
    constructor(requestCount, requestWindow) {
      this.requestCount = requestCount;
      this.requestWindow = requestWindow;
      this.map = new Map();
    }
  
    allowRequest() {
      const currentTime = Date.now();
      const currentWindowStart = Math.floor(currentTime / this.requestWindow) * this.requestWindow;
  
      if (!this.map.has(currentWindowStart)) {
        this.windows.set(currentWindowStart, 0);
      }
  
      const currentWindowCount = this.map.get(currentWindowStart);
  
      if (currentWindowCount < this.requestCount) {
        this.map.set(currentWindowStart, currentWindowCount + 1);
        return true; 
      } else {
        return false;
      }
    }
  }
  
  const rateLimiter = new RateLimiter(10, 60);
  console.log(rateLimiter.allowRequest());
  
  // Simulate 15 requests in a loop
  for (let i = 1; i <= 15; i++) {
    if (rateLimiter.allowRequest()) {
      console.log(`Request ${i}: Allowed`);
    } else {
      console.log(`Request ${i}: Denied`);
    }
  }