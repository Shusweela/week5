const assert = require("assert");
var triangle = require("../triangle");

describe("Area of a Triangle Calculator", function (){
    it("should return 12 when given 3 and 4", function (){
        assert.equal(12,triangle(3,4));
    });
});