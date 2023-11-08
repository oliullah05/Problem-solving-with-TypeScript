# Problem-solving-with-TypeScript

#### Question 1 : What are some benefits of using TypeScript over JavaScript in a project?

Answer 1 : TypeScript can define type in his code but JavaScript can't define any properties type. And typescript provide us excellant error support by code editor so that we can find error on the spot in code editor and dont need be run to find error . This enhence our code error checking, and debugging  and make development more efficient.  Especially for large codebases typeScript's type annotations make it easier to understand and maintain code.

#### Question 2 : What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.

Answer 2: 

Optional Chaining (?.):- Optional chaining is like if-else shorter version. If-else and optional chaining do the same task but another form.The purpose of the optional chaining is use if-else middle of the function but very effectively to use it's short form optional chaining. 

## Usage/Examples

```
const age = 20;
if(age===20){
    return 20;
}
else{
    return "age not 20"
}
```
We can use Same thing with Optional Chaining.
```
const age = 20;
age===20? 20:"age not 20"
```
Nullish Coalescing (??) :- Nullish Coalescing used for in typeScript to check targeted type is null or undefined . We basically use this when we want some dessition based on null or undefined. Like this:-  


```
 const person = {name:"maruf",number:null};
 const isNumber = person.number??"no number"
 console.log(isNumber); //output = "no number"

```

