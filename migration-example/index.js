function median(arr) {
  return arr.sort()[arr.length / 2];
}

function average(arr) {
  let result;
  for (let i = 0; i < arr.length; ++i) {
    if (result === undefined) {
      result = 0;
    }
    result += arr[i];
  }

  return result / arr.length;
}

function groupByAge(arr) {
  const result = {};

  for (let user of arr) {
    const age = user.age;
    if (!result[age]) {
      result[age] = [];
    }
    result[age].push(user);
  }

  return result;
}

exports.default = average;

function main() {
  const users = [
    { name: "Radagon", age: 100 },
    { name: "Ranni", age: 75 },
    { name: "Marika", age: 100 },
  ];
  console.log("grouped", groupByAge(users));
  console.log("average-age", average(users.map(({ age }) => age)));
}


main()
