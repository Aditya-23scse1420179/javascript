let boxes=document.querySelectorAll('.box');//selecting all the boxes by . class
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#reset-btn");
let msg=document.querySelector(".msg-conatiner");
let msgc=document.querySelector("#msg");

let turnO=true;//first player
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]//winning pattern;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="0";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    })
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const Enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msgc.innerText=`Badhaye ho! ${winner}`;
    msg.classList.remove("hide");
    disablebox();
};
const checkwin=()=>{
    for (let pattern of winpattern){
         let pos1=boxes[pattern[0]].innerText;
         let pos2=boxes[pattern[1]].innerText;
         let pos3=boxes[pattern[2]].innerText;
         if(pos1!==""&&pos2!==""&&pos3!=="") {
             if (pos1 === pos2 && pos2 === pos3) {
                 console.log("winner");

                 showWinner(pos1);
             }
         }
    }
}

const resetgame=()=>{
    turn0=true;
    Enablebox();
    msg.classList.add("hide");


}
newbtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);




