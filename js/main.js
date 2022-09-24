// let floor1 = document.getElementById("floor1");
// let floor2 = document.getElementById("floor2");
// let floor3 = document.getElementById("floor3");
// let floor4 = document.getElementById("floor4");
// let floor5 = document.getElementById("floor5");
// let floor6 = document.getElementById("floor6");
// let floor7 = document.getElementById("floor7");
// let floor8 = document.getElementById("floor8");
// let floor9 = document.getElementById("floor9");
// let floor10 = document.getElementById("floor10");
// let floor11 = document.getElementById("floor11");
// let floor12 = document.getElementById("floor12");
// let floor13 = document.getElementById("floor13");
// let floor14 = document.getElementById("floor14");
// let floor15 = document.getElementById("floor15");
// let floor16 = document.getElementById("floor16");
let floorUp = document.getElementById("floorUp");
let floorDown = document.getElementById("floorDown");

floorUp.addEventListener("click", e => {
  elevator.upOneFloor();
});
floorDown.addEventListener("click", () => {
  elevator.downOneFloor();
});

console.log(floor7.innerText);

let lift = document.getElementById("lift");
let marginTop = 667;
function calcUp() {
  return (marginTop -= 44);
}
function calcDown() {
  return (marginTop += 44);
}

let elevator = {
  current: 1,
  minFloor: 1,
  maxFloor: 16,
  printFloor() {
    console.log(this.current);
  },
  upOneFloor() {
    if (this.current < this.maxFloor) {
      this.current++;
      lift.style.marginTop = `${calcUp()}px`;
      this.printFloor();
    } else {
      console.error("Error!");
    }
  },
  downOneFloor() {
    if (this.current > this.minFloor) {
      this.current--;
      lift.style.marginTop = `${calcDown()}px`;
      this.printFloor();
    } else {
      console.error("Error!");
    }
  },
  toFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      while (this.current < floor) {
        this.upOneFloor();
      }
      while (this.current > floor) {
        this.downOneFloor();
      }
    } else {
      console.error("Error!");
    }
  },
};
document.addEventListener("click", e => {
  elevator.toFloor(e.target.innerText);
});
