const freunds = [
  {
    name: "John",
    age: 22,
    height: 170,
  },
  {
    name: "Mike",
    age: 34,
    height: 168,
  },
];
const mult = () => {
  let johnPunkt = freunds[0].age * 5 + freunds[0].height;
  let mikePunkt = freunds[1].age * 5 + freunds[0].height;
  if (johnPunkt > mikePunkt) {
    return {
      winner: freunds[0].name,
      points: johnPunkt,
    };
  } else if (johnPunkt < mikePunkt) {
    return {
      winner: freunds[1].name,
      points: mikePunkt,
    };
  }
};
const firstResult = mult();

const lastResult = document.createElement("div");
document.body.appendChild(lastResult);
lastResult.innerHTML = `Winner is ${firstResult.winner} and his points are ${firstResult.points}.`;
console.log();
