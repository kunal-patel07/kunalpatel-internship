let user = {};
user.name = "john";
user.surename = "smith";

user.name = "pete";
delete user.name;

function isEmpty(user) {
  for (let key in user) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));


//2

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function getSum(salaries) {
  sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
console.log(getSum(salaries));

//3

let obj = {
  width: 100,
  height: 300,
  title: "My menu",
};

function multiNum(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiNum(obj));

//4

let student = {
  age: 20,
  height: 153,
};

function dblNum(student) {
  for (let key in student) {
    if (typeof student[key] == "number") {
      student[key] *= 2;
    }
  }
  return student;
}
console.log(dblNum  (student));

//5

let tech = {
  sams: 39,
  apple: 123,
};

function mulVal(tech) {
  for (let key in tech) {
    if (typeof tech[key] == "number") {
      tech[key] *= 2;
    }
  }
  return tech;
}

console.log(mulVal(tech));
