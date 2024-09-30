function isValid(s) {
    // Stack to store opening brackets
    const stack = [];
    
    // Map of matching pairs
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // If it's a closing bracket
        if (char in map) {
            // Pop the top element of the stack if it's not empty, otherwise assign a dummy value
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // Check if the top element matches the corresponding opening bracket
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets are properly closed
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
