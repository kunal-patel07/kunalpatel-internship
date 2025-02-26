//use push method
let fruits = ["apple", "banana", "mango"];
fruits.push("graps");
console.log(fruits);

//perform operation
let styles = ["jazz", "blue"];
styles.push("Rock-n-Roll");
styles.shift();
console.log(styles);
styles.unshift("rap", "Reggae");
console.log(styles);

// giving sum of input numbers

function sumInput(){
    let numbers=[];
    while(true){
     let value =prompt("enter number");
     if (value === "" || value ===null || !isFinite(value)) break;
     numbers.push(+value);
    }
    let sum =0;
    for (let number of numbers){
        sum=sum+number;
    }
    return sum;
}
