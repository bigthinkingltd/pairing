const isPalindrome = require("./palindrome");

describe("src/palindrome", () => {
    it("when a string is a palindrome, it returns true", () => {
        var isPalindromeResult = isPalindrome("wow");

        expect(isPalindromeResult).toBeTruthy();
    })
    
    it("when a string is not a palindrome, it returns false", () => {
        var isPalindromeResult = isPalindrome("hello");

        expect(isPalindromeResult).toBeFalsy();
    })
})