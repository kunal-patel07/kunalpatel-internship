//1
let tree = {
  name: "krunal",
  age: 20,
};

tree.newObj = function () {
  console.log("hello!!!");
};

tree.newObj();
//2
let user3 = { name: "john" };
let admin = { name: "admin" };

function sayHello() {
  console.log(this.name);
}

user3.f = sayHello;
admin.f = sayHello;

user3.f();
admin.f();

//3
let user4 = {
  name: "Ilya",
  sayThis() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};
user4.sayThis();

//4
let calulator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  },
};
calulator.read();
alert(calulator.sum());
alert(calulator.mul());

//5

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep();
