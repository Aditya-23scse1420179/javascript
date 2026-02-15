//API fetching data from an API and displaying it on the webpage
const url="https://dog.ceo/api/breeds/image/random";
const factPara=document.querySelector("#fact");
const button=document.querySelector("#btn");


// to get data use fetch
const getFacts=async()=>{
    console.log("getting data.....");
    let response=await fetch(url);
    console.log(response);//json format
    let data=await response.json();//to convert json format to js object to make it readable
    factPara.innerText=data.message;
};
//ajax fetching request from api
button.addEventListener("click",getFacts);
// status start with 2 means success
// status start with 4 means client error
// status start with 5 means server error

