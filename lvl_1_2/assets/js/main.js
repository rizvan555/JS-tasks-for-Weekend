function hallo() {
  console.log("hallo");
}
hallo();

// ====================================

function sum(x, y) {
  console.log(x + y);
}
sum(2, 3);

// ====================================

function mult(x, y) {
  console.log(x * y);
}
mult(2, 3);

// ====================================
function mix(parametr) {
  console.log(typeof parametr);
}
let i = true;
let j = "hi";
let k = 1;
let l = { name: "John" };
let a = [0, 1];

mix(i);
mix(j);
mix(1);
mix(l);
mix(a);
