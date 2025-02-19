let que =prompt("What's the “official” name of JavaScript?");

if (que=="ECMAScript"){
    alert("you are right!");
}else {
    alert("you don't know ECMAScript??");
}

let que1 = prompt("Who's there?");

if (que1 == "cancel") {
  alert("canceled");
} else if (que1 == "other") {
  alert("i don't know you");
}
if (que1 == "admin") {
  let pass = prompt("password?");
  if (pass == "cancel") {
    alert("canceled");
  } else if (pass == "other") {
    alert("Wrong Password");
  } else if (pass == "themaster") {
    alert("Welcome!");
  }
}
