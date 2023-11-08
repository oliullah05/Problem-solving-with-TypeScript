{
    // 

    //       Problem 1:

    // Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

    //       Solution-1


    const stringLengthOrSqureNumber = (param: string | number):number=> {
       if(typeof param ==="string"){
      
        return param.length;
       }
       else{
        // console.log(param*param);
        return param*param;
       }
       
    }
      
    stringLengthOrSqureNumber(5)
    stringLengthOrSqureNumber("oliullah")



    // Problem 2:

    // Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

   // Solution-2


interface Person {
    name:string;
    age:number;
    address?:{
        city:string,
        street:string
    }
    phoneNumber?:string;
}

const person1 :Person = {
    name:"Oliullah",
    age:22,
    address:{
        city:"Dhaka",
        street:"102 evenew ,Bangla Bazar"
    },
    phoneNumber:"01709112930"

}


const person2 :Person = {
    name:"Oliullah",
    age:22,
    phoneNumber:"01709112930"

}


const  getAddressCity = (person:Person):string=>{
    if(person.address){
        return person.address?.city
    }
    return "No City Found"
}



    // Problem 3:

   // Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

    // Solution-3

class Cat {
    name:string;
    color:string;
    age:number;
    constructor(name:string,color:string,age:number){
        this.name=name,
        this.color=color,
        this.age=age
    }
}

const cat1 :Cat = new Cat("mikel","white",2)

// console.log(cat2 instanceof Cat);

const isCat:any  =(cat:any):string=>{
if (cat instanceof Cat){
    return `it is a cat` ;
}
else{
    return `no, it's not a cat` ;
}
}






/* Problem-4:

   You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

   To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

   Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions. */


    // Solution-4


type MixedData = (number|string )[];

const mixedData:MixedData = [1, 'two', 3, 'four', 5,"six"]


const findNumberAndSum =(arrey:MixedData):number=>{
    let total = 0;
for(let i =0;i<arrey.length;i++){
    const index = arrey[i]

    if( typeof index ==="number"){
    total=total+index
    }
    
}
return total;
}



/*  Problem-5:

       Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.*/


    // Solution-5

interface Car {
    make:string,
    model:string,
    year:number
}

interface Driver{
    name:"Oliullah",
    licenseNumber:"WB008TS"
}












































    // 
}