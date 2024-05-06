const reverse = require("./reverse");

describe("src/palindrome", () => {
    it("returns the correctly reversed text", () => {
        var reverseResult = reverse("helicopter");

        expect(reverseResult).toEqual("retpocileh");
    })
})