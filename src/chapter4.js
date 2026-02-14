//object
const employee={
    calcTax(){//function nahi likhna padta iske andar kyuki ye method hai
        console.log("Calculating tax for employee");
    }
};
const KaranArjun={
    salary:50000,
    calcTax(){//function nahi likhna padta iske andar kyuki ye method hai
        console.log("Tax rate 50%");
    }//ye method hai isme aur ye salary property hai isme aur ye method hai employee object ke andar
};//ye salary property hai isme aur ye method hai employee object ke andar
const KaranArjun2={
    salary:60000,
};
const KaranArjun3={
    salary:70000,
};
const KaranArjun4={
    salary:80000,
};
KaranArjun.__proto__=employee;
KaranArjun2.__proto__=employee;
KaranArjun3.__proto__=employee;//reuse the same method for all the objects reference of employee object
KaranArjun4.__proto__=employee;


//class
class toyota{
    start(){
        console.log("Starting the car");
    }
    stop(){
        console.log("Stopping the car");
    }
}
let fortuner=new toyota();//object of toyota class
let lexus=new toyota();//object of toyota class

class person{//inheritance
    eat(){
        console.log("Eating food");
    }
    sleep(){
        console.log("Sleeping");
    }
}
class Engineer extends person{
    work(){
        console.log("Working");
    }
}
let adi=new Engineer();//object of Engineer class

//q 1
class user{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("view data");
    }
}
let stu1=new user("adi","adi@gmail.com");

let a=5;
let b=10;
console.log(a);
console.log(b);
console.log(a+b);
try{//error handling
    console.log(a*b);
}catch(err){//agar error aata hai to catch block execute hoga
    console.log(err);
}//baki code normally chalega

console.log(a/b);
console.log(a-b);
console.log(a+b);






