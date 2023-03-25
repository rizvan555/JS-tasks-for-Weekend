let yearBorn = 1984;
const checkAge = (yearBorn) => {
  const aktuellesJahr = new Date().getFullYear(); // aktuellesJahr
  console.log(aktuellesJahr - yearBorn);
};
checkAge(yearBorn);

// =======================================================================

const comparison = (myAge, myFreundAge) => {
  let ageDiff = myAge - myFreundAge;
  return ageDiff;
};

let myAge1 = 39;
let myFreundAge1 = 37;
const differens = comparison(myAge1, myFreundAge1);
console.log("Our age differens is " + differens + " jear");
