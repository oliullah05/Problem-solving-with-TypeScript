"use strict";
{
    // 
    // #####Problem 1:
    // Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
    // ###solution-1
    const stringLengthOrSqureNumber = (param) => {
        if (typeof param === "string") {
            return param.length;
        }
        else {
            return param * param;
        }
    };
    stringLengthOrSqureNumber(5);
    stringLengthOrSqureNumber("oliullah");
    // 
}
