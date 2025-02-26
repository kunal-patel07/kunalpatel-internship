//make function which makes first char of string into uppercase
let str ="anything";
let str1="capital"
function firstLetter(str){
    if(!str) return str;
    return str[0].toUpperCase()+str.slice(1);
}
console.log(firstLetter(str))
console.log(firstLetter(str1))

//change the first char of strig
let doller="$120";
function changeDoller(doller){
    return +doller.slice(1);
}

//function that allows limited char to display

let word="hi,good moring this is for prac";

function maxChar(word,maxLength){
    return (word.length>maxLength)?
    word.slice(0,maxLength-3)+"...":word;
}
console.log(maxChar(word,16));