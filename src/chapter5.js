//Asynchronous JavaScript

setTimeout(()=>{
    console.log("hello");
},2000);//2sec

//nestes timeout
function getData(data,getNextData) {
    setTimeout(() => {
        console.log("data",data);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});//callback hell nested callback stacked below one another forming a pyramid shape(pyramid of doom)

// to solve this we have concept of promise and async await
//
// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//      resolve(123);
//     // reject("some err");
// });//promise is a constructor function which takes a callback function as an argument and this callback function takes two parameters resolve and reject which are also functions
//promise is used to handle asynchronous operations in JavaScript and it can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the asynchronous operation has completed successfully and the promise is resolved with a value. When a promise is rejected, it means that the asynchronous operation has failed and the promise is rejected with a reason. We can use the then() method to handle the fulfilled state of a promise and the catch() method to handle the rejected state of a promise.
function getData(data,getNextData) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data", data);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log(resolve);
        resolve("sucess");
    });
}

let promise=getPromise();
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});//then is used to handle the fulfilled state of a promise and catch is used to handle the rejected state of a promise.

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data1");
            resolve("async function");
        }, 2000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data2");
            resolve("async function");
        }, 2000);
    });
}

console.log("fetching data1...");
asyncFunc().then((res)=>{//then is used to handle the fulfilled state of a promise and it takes a callback function as an argument which is executed when the promise is fulfilled and it receives the resolved value as an argument
    console.log("fetching data2...");
    asyncFunc2().then((res)=>{});
});


//async -await
async function hello(){//async is a keyword which is used to declare an asynchronous function and it returns a promise and it can be used with the await keyword to wait for the promise to be resolved before executing the next line of code.
    console.log("hello");
}
function api(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000);
    });
}
async function fetchData(){
    await api();//await is a keyword which is used to wait for a promise to be resolved before executing the next line of code and it can only be used inside an async function
}
//iife
(async function(){
    console.log("fetching data...");
    await getData(1);
    console.log("fetching data....");
    await getData(2);
});// hume alag se call nahi lagani padegi jaise normal function ke liye lagani padti hai, ye apne aap call ho jayegi jaisi hi code run hoga.










