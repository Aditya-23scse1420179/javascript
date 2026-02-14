let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#computer-score");

const genbotchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3)//generate random number agar floor hata dogai to decimal me dega 0 se jahan tak generate karana hai use ak bade number se multipy karo
    return options[randidx];
};


const drawgame=()=>{
    console.log("its a tie");
    msg.innerText="Game Draw!";
};
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        usersc.innerText=userscore;
        console.log("You win");
        msg.innerText="You win ";
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compsc.innerText=computerscore;
        console.log("you loose");
        msg.innerText="You loose";
        msg.style.backgroundColor="red";
    }
};


const playgame=(userchoice)=>{
    const compchoice=genbotchoice();
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};




choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})