// @ts-expect-error TS(2304): Cannot find name '$TSFixMe'.
function median(arr: $TSFixMe) {
  return arr.sort()[arr.length / 2];
}

// @ts-expect-error TS(2304): Cannot find name '$TSFixMe'.
function average(arr: $TSFixMe) {
  let result;
  for (let i = 0; i < arr.length; ++i) {
    if (result === undefined) {
      result = 0;
    }
    result += arr[i];
  }

  // @ts-expect-error TS(2532): Object is possibly 'undefined'.
  return result / arr.length;
}

// @ts-expect-error TS(2304): Cannot find name '$TSFixMe'.
function groupByAge(arr: $TSFixMe) {
  const result = {};

  for (let user of arr) {
    const age = user.age;
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (!result[age]) {
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      result[age] = [];
    }
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    result[age].push(user);
  }

  return result;
}

// @ts-expect-error TS(2304): Cannot find name 'exports'.
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
