const { groupByAge, average, median } = require("./lib");

function main() {
  const users = [
    { name: "Radagon", age: 100 },
    { name: "Ranni", age: 75 },
    { name: "Marika", age: 100 },
  ];
  console.log("grouped", groupByAge(users));
  console.log("average-age", average(users.map(({ age }) => age)));
  console.log("median", median(users.map(({ age }) => age)));
}

main();
