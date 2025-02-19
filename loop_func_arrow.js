for(i=2;i<=10;i++){
   if(i%2==0){
    alert(i);
   }
}

function returnMin(a,b){
    if(a<b){
        return a;
    }else {
        return b;
    }
}


function returnPow(x,n){
    let result=x;
   for (let i=1;i<result.length;i++){
    result=result*x;
   }    
}

let age=prompt("what is your age ?");
let welcome;

if (age>18){
    welcome=function(){
        console.log("greeting");
    }
}
else{
    welcome=function(){
        console.log("minor");
    }
}
welcome();  

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

ask(
    "do you agree?",
    ()=>alert("you agreed"),
    ()=>alert("not agreed")
)