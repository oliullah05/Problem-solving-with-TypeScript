"use strict";
{
    // 
    //       Problem 1:
    // Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
    //       Solution-1
    const stringLengthOrSqureNumber = (param) => {
        if (typeof param === "string") {
            return param.length;
        }
        else {
            // console.log(param*param);
            return param * param;
        }
    };
    stringLengthOrSqureNumber(5);
    stringLengthOrSqureNumber("oliullah");
    const person1 = {
        name: "Oliullah",
        age: 22,
        address: {
            city: "Dhaka",
            street: "102 evenew ,Bangla Bazar"
        },
        phoneNumber: "01709112930"
    };
    const person2 = {
        name: "Oliullah",
        age: 22,
        phoneNumber: "01709112930"
    };
    const getAddressCity = (person) => {
        var _a;
        if (person.address) {
            return (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
        }
        return "No City Found";
    };
    // Problem 3:
    // Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
    // Solution-3
    class Cat {
        constructor(name, color, age) {
            this.name = name,
                this.color = color,
                this.age = age;
        }
    }
    const cat1 = new Cat("mikel", "white", 2);
    // console.log(cat2 instanceof Cat);
    const isCat = (cat) => {
        if (cat instanceof Cat) {
            return `it is a cat`;
        }
        else {
            return `no, it's not a cat`;
        }
    };
    const mixedData = [1, 'two', 3, 'four', 5, "six"];
    const findNumberAndSum = (arrey) => {
        let total = 0;
        for (let i = 0; i < arrey.length; i++) {
            const index = arrey[i];
            if (typeof index === "number") {
                total = total + index;
            }
        }
        return total;
    };
    const car = {
        make: "Tesla",
        model: "Tesla Model 3 Plus 2024",
        year: 2024
    };
    const driver = {
        name: "Oliullah",
        licenseNumber: "WB008TS"
    };
    const combinedCarAndDriver = (car, driver) => {
        const combinedInObject = Object.assign(Object.assign({}, car), driver);
        return combinedInObject;
    };
    /*  Problem 6:
    
            Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.*/
    // Solution-6
    const arr = [1, 2, 3, 4, 5, 6];
    // console.log(Array.isArray(arr));
    const calculateArraySum = (value) => {
        if (Array.isArray(value)) {
            let total = 0;
            let count = 0;
            // console.log(value.length);
            ;
            for (let i = 0; i < value.length; i++) {
                const index = value[i];
                if (typeof index === "number") {
                    count++;
                    total = total + index;
                }
            }
            if (count === value.length) {
                console.log(total);
            }
        }
        console.log("this is not an arrey of numbers");
    };
    calculateArraySum(arr)
    // 
}





//   // spical method in  every item of number
//   const arr2 = [1, 2, 3, 21];
//   const isArrayOfNumbers = arr2.every((item) => typeof item === 'number');
//   console.log(isArrayOfNumbers); //true