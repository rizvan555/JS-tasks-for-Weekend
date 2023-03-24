const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});
console.log(geradeZahlen);

const ungeradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 !== 0;
});
console.log(ungeradeZahlen);
