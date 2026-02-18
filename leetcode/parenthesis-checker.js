const ispar = function(x) {
        //your code here
        let stack = [];
        let result = false;
        for (let i = 0; i < x.length; i++) {
            console.log(x[i]);
            if (x[i] === '}') {
                console.log(stack);
                if(stack[stack.length - 1] !== '{') {
                    return false;
                } else {
                    console.log(stack);
                    stack.pop();
                    result = true;
                }
            }
            if (x[i] === ']') {
                console.log(stack);
                if(stack[stack.length - 1] !== '[') {
                    return false;
                } else {
                    console.log(stack);
                    stack.pop();
                    result = true;
                }
            }
            if (x[i] === ')') {
                console.log(stack);
                if(stack[stack.length - 1] !== '(') {
                    return false;
                } else {
                    console.log(stack);
                    stack.pop();
                    result = true;
                }
            }
            if(x[i] === '{' || x[i] === '[' || x[i] === '(') {
                stack.push(x[i]);
                console.log(stack);
            }            
        }
    console.log(stack);
    var newNode = new StackNode(data);

    return result;
}

console.log(ispar('{([])}'));