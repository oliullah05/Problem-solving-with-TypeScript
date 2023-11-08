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


























    // 
}