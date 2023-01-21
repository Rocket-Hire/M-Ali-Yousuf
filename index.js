// Question: Common letters and their frequencies
// Given a function which takes an array of words as input, find the common letters among the words and their frequency. Return the letters with their frequency.

// Example 1:
// Input: words = ["browser","brother","brand"]
// Output: b:3,r:3,o:2,e:2,r:3

// Example 2:
// Input: words = ["cat","dog","zebra"]
// Output: a:2

// Example 3:
// Input: words = ["car","wish"]
// Output: ""
function commonLetters(words) {
    let letters = {};
    for (let word of words) {
        for (let letter of word) {
            if (!letters[letter]) {
                letters[letter] = 1;
            } else {
                letters[letter]++;
            }
        }
    }
    let letterFrequency = "";
    for (let letter in letters) {
        letterFrequency += letter + ":" + letters[letter] + ",";
    }
    return letterFrequency.slice(0, -1);
}
console.log(commonLetters(["browser","brother","brand"]))
