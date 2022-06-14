console.log("HERE");

// function aFunction(are, arguments)
const aFunction = (arg1, arg2) => {
  return arg1 + arg2;
};

const withImplicitReturn = (arg1, arg2) => arg1 + arg2;

const arr = [1, 2, 3];

const mapped = arr.map((element) => {
  return element * 2;
});

console.log(aFunction(1, 2));

class Example {
  constructor() {
    this.counter = 0;
  }

  timer() {
    var that = this;
    setInterval(function () {
      console.log("RUNNING");
      that.counter++;
      //   console.log("this:", this);
    }, 1000);
  }
}
console.log(this);

const example = new Example();

example.timer();
