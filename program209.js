function romanToInt(s) {
    // Define a map to store the values of Roman numerals
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        let currentVal = romanMap[s[i]];
        
        // If the next Roman numeral is larger, subtract the current value
        if (i < s.length - 1 && currentVal < romanMap[s[i + 1]]) {
            total -= currentVal;
        } else {
            // Otherwise, add the current value to the total
            total += currentVal;
        }
    }
    
    return total;
}

// Example usage:
console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
