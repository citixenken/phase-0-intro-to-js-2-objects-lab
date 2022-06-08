// Write your solution in this file!

const employee = {
  name: "Cain",
  streetAddress: "00100-Bethlehem",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };

  //   const newObj = { ...obj };
  //   newObj[key] = value;
  //   return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  //does not mutate original employee object
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  //mutates original employee object
  delete obj[key];
  return obj;
}
