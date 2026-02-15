//API fetching data from an API and displaying it on the webpage
const url="https://cat-fact.herokuapp.com";

// to get data use fetch
const getFacts=async()=>{
    console.log("getting data.....");
    let response=await fetch(url);
    console.log(response);
}