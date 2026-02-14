/*let a=2;
let b =2;
console.log("a+b=",a + b);
console.log("a**b=",a ** b);// exponentiation
console.log("a-b=",a - b);// subtraction
console.log("a/b=",a / b);// division
console.log("a%b=",a % b);// modulus
console.log("a*b=",a * b);// multiplication
console.log("++a=",++a);// increment unary operator and pre pahle increment fir print
console.log("--b=",--b);// decrement unary operator same pahle decremrent fir print
console.log("a++=",a++);// increment unary operator and post pahle print fir increment
console.log("a--=",a--);// decrement unary operator same post pahle print fir decrement
console.log("a=",a);
console.log("b=",b);
console.log("a==b",a==b);// equal to
console.log("a===b",a===b);// equal value and equal type

let grade = prompt("Enter number:");
if (grade>=90&&grade<=100) {
    console.log(grade + " is A.");// to check between marks use and operator
}else if (grade>=70&&grade<=89) {
    console.log(grade + " is B.");
} else if (grade>=60&&grade<=69) {
    console.log(grade + " is C.");
} else if (grade>=50&&grade<=59) {
    console.log(grade + " is D.");
}else {
    console.log("grade is F.");
}

// conditional statements 
for(let i =1;i<=5;i++){
    console.log("hello adi");// for loop 
}
let str="hello aditya";
for(let i of str){
    console.log("i=",i);// for of loop work as an iterator 
}
let student ={
    name:"aditya",
    age:21,
    college:"ABC",
    isPass:true
};
for(let i in student){
    console.log(i);// for in loop work on object to get keys
    console.log("key=",i," value=",student[i]);// to get value of keys
}

// pratice questions
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i," is even number");// even number
    }
}
//question 2
let gamenumber =7;
let userNumber = prompt("Guess the number between ");
while(userNumber!=gamenumber){
    userNumber = prompt("Wrong guess try again:");
}
console.log("Congratulations! you guessed the correct number:",gamenumber);

// string interpolation
let obj={
    name:"aditya",
    age:21,
    college:"ABC",
    isPass:true
};
let output =`The name of student is ${obj.name} and age is ${obj.age} studying in ${obj.college} .The student pass status is ${obj.isPass}`;
console.log(output);// template literals....placeholder ko backticks me likh do 

str = "hello aditya";
let str1=" welcome to js";
let str2= str.concat(str1);// concat
console.log(str2);// concatenated string join kar do dono ko also done by (str1+str2.......+n)
console.log(str.length);// length of string
console.log(str.toUpperCase());// uppercase
console.log(str.toLowerCase());// lowercase
console.log(str.slice(0,5));// slice return part of str start ,end value aur ending value include nahi hogi for ex 5
console.log(str.replace("aditya","Adi"));// replace old value jisko search karke nayi se replace karna hai 
console.log(str.includes("aditya"));// includes
console.log(str.indexOf("aditya"));// index of
console.log(str.charAt(6));// char at
console.log(str.split(" "));// split
console.log(str.trim());// trim remove white space fom start and end

//question 3
let username = prompt("Enter username:");
console.log(`@${username}${username.length}`); // print username with @ and length of username

// Arrays --
let arr=[1,2,3,4,5];
console.log(arr);
arr.push(6);// push add element at end
console.log(arr);
arr.pop();// pop remove element from end
console.log(arr);*/
// functions and methods
function myfunction(){
    console.log("hello aditya");
    console.log("welcome to js");
}
myfunction();// function call
//arrow function modern js
const arrowSum=(a,b)=>{//add
    console.log(a+b);
};
const arrowMul=(a,b)=>{//multiply
    console.log(a*b);
};
function countvovels(str){
    let count=0;
    for(const char of str){
        if(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){
            count++;
        }
    }
    return count;
}// normal function to count vovels in string
const arrowCount=(str)=>{
    let count=0;
     for(let char of str){
         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
             count++;
         }
     }
     return count;
}
// for each loop ->
let arr=[1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
});
arr.forEach((val,idx)=>{
    console.log(val,idx,arr);
});
let arr2=[1,2,3,4];
arr2.forEach((val)=>{
    console.log(val*val);
});
// map method create new array from calling function for each element
arr2.map((val)=>{
    console.log(val);
});
let newArr=arr.filter((val)=>{
    return val%2===0;
});
// reduce method is used to reduce array to single value by executing a reducer function on each element of the array from left to right
let arr3=[1,2,3,4,5,6];
let narr=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(narr);// reduce method reduces array to single value by executing a reducer function
let narr3=arr3.reduce((prev,curr)=>{
    return prev>curr?prev:curr;// to find max value in array
});
console.log(narr3);
let marks=[80,90,70,85];
let nmarks=marks.filter((val)=>{
    return val>=80;
});
console.log(nmarks);// filter method creates new array with elements that pass the test implemented by the provided function
let n=prompt("enter a number:");
let arr5=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);// to create array of numbers from 1 to n-1
let add=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(add);// to find sum of array elements using reduce method
let mat=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(mat);// to find product of array elements using reduce method