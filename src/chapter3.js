/*console.log("Chapter 3: Document-object model");
// DOM is a tree of nodes, each node represents an element in the document
// The document object is the root of the tree
// We can access elements in the document using various methods
 let heading =document.getElementById(".heading");
 console.log(heading);// give output <h1 id="heading">Hello World</h1>
console.dir(heading);// give output as h1#heading


let headings= document.getElementsByClassName("heading");
console.log(headings);// give output HTMLCollection(2) [h1.heading, h2.heading]
console.dir(headings);
let para = document.getElementsByTagName("p");
console.log(para);// give output HTMLCollection(2) [p, p]
console.dir(para);

let para1 = document.querySelector("p");
console.log(para1);
let allpara= document.querySelectorAll("p");
console.log(allpara);// give i want to select id use #id and for class use .className
//navigation
let firstPara = document.querySelector("p");
console.log(firstPara.nextElementSibling);// give output <p>This is the second paragraph.</p>
console.log(firstPara.previousElementSibling);// give output null because there is no previous sibling*
let first=document.querySelector("div");
console.dir(first);
//manipulating the DOM
let dix=document.querySelectorAll(".box")
console.dir(dix);
dix[0].innerText="text change kar sakte hain aise ";
dix[1].innerText="ye bhi change kar sakte hain aise";
dix[2].innerText="ye bhi change kar sakte hain aise";// manual way to change text of divs but we can do this using loop also
let idx=1;
for(div of dix){// mentos zindagi me aise hi loop se kar sakte hain
    div.innerText=`aise hum loop se kar sakte hain ${idx}`;
    idx++;
};
let para =document.querySelector("p");
let id = para.getAttribute("class");
console.log(id);
console.log(para.setAttribute("class","new-class"));// change class name to new-class
let div=document.querySelector("div");
div.style.backgroundColor="green";


// now we'll learn how to insert new things
let btn=document.createElement("button");
btn.InnerText="Click me";
console.log(btn);
let div=document.querySelector("div");
div.append(btn);// add button at the end of div


let btn=document.createElement("button");
btn.innerText="Click me";
btn.style.backgroundColor="red";//add style to button style likhna padega and then property name and value dena padega
btn.style.color="white";
console.log(btn);
let body=document.querySelector("body");
body.prepend(btn);// add button at the start of body

let para=document.querySelector("p");
para.classList.add("newpara"); // add new class to paragraph dono properties rakhega purana naya */


/*Events in DOM
Events are actions that occur in the browser, such as a user clicking a button, hovering over an element, or submitting a form. We can listen for these events and execute code in response to them. There are two ways to add event listeners to an element: using the onclick property or using the addEventListener method. The onclick property can only have one event listener, while addEventListener can have multiple event listeners for the same event. To remove an event listener added with addEventListener, we need to store the handler function in a variable and pass it to the removeEventListener method.
let btn1=document.querySelector("#btn1");//use # for id
btn1.onclick=()=>{
    console.log("clicked");
}
const handler=()=>{
    console.log("clicked using addEventListener");
};
btn1.addEventListener("click",handler);// we can add multiple event listeners to the same element using addEventListener but not using onclick
btn1.removeEventListener("click",handler);// jisko remove karna hai usko kahin store kara lo kyunki memory me dono ka address alag hai */


// create button to change theme
let btn=document.querySelector("#btn1");
let body=document.querySelector("body");
let mode="light";
btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
});

