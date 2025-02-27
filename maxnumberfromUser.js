let max =  parseInt(prompt("enter the max number you want?"));
let num = Math.floor(Math.random()*max)+1;
let guess= prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quitted");
        break;
    }else if(guess ==num){
        console.log("Congrats!! You guessed right.... number is ",num);
        break;
    }
    if(guess> num){
        guess =prompt("Your guess is too big try to guess smaller");
    }else if(guess < num){
        guess=prompt("Your guess is too small try to guess bigger");
    }
}