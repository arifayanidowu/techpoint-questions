/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
  // Your code should go here.
  const chunk_arr = (arr, size) => {
    let index = 0,
      arrayLength = arr.length,
      newArr = [];

    for (index; index < arrayLength; index += size) {
      chunk = arr.slice(index, index + size);
      newArr.push(chunk);
    }

    return newArr;
  };

  const chunkedData = chunk_arr(input, 3);

  let group1 = chunkedData[0];
  let group2 = chunkedData[1];
  let group3 = chunkedData[2];
  let group4 = chunkedData[3];
  let group5 = chunkedData[4];
  let group6 = chunkedData[5];

  // Group 1
  let getData1 = group1.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Group 2
  let getData2 = group2.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Group 3
  let getData3 = group3.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Group 4
  let getData4 = group4.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Group 5
  let getData5 = group5.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Group 6
  let getData6 = group6.map(arr => {
    return {
      name: arr.name,
      age: new Date().getFullYear() - new Date(arr.dob).getFullYear(),
      regNos: arr.regNo
    };
  });

  // Member data 1
  let getAge1 = getData1.map(arr => arr.age);
  let getNameAndAge1 = getData1.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge1 = getAge1.reduce((acc, cur) => acc + cur, 0);
  let getReg1 = getData1.map(arr => Number(arr.regNos));
  let getMaxAge1 = Math.max(...getAge1);

  // Member data 2
  let getAge2 = getData2.map(arr => arr.age);
  let getNameAndAge2 = getData2.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge2 = getAge2.reduce((acc, cur) => acc + cur, 0);
  let getReg2 = getData2.map(arr => Number(arr.regNos));
  let getMaxAge2 = Math.max(...getAge2);

  // Member data 3
  let getAge3 = getData3.map(arr => arr.age);
  let getNameAndAge3 = getData3.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge3 = getAge3.reduce((acc, cur) => acc + cur, 0);
  let getReg3 = getData3.map(arr => Number(arr.regNos));
  let getMaxAge3 = Math.max(...getAge3);

  // Member data 4
  let getAge4 = getData4.map(arr => arr.age);
  let getNameAndAge4 = getData4.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge4 = getAge4.reduce((acc, cur) => acc + cur, 0);
  let getReg4 = getData4.map(arr => Number(arr.regNos));
  let getMaxAge4 = Math.max(...getAge4);

  // Member data 5
  let getAge5 = getData5.map(arr => arr.age);
  let getNameAndAge5 = getData5.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge5 = getAge5.reduce((acc, cur) => acc + cur, 0);
  let getReg5 = getData5.map(arr => Number(arr.regNos));
  let getMaxAge5 = Math.max(...getAge5);

  // Member data 6
  let getAge6 = getData6.map(arr => arr.age);
  let getNameAndAge6 = getData6.map(arr => {
    return {
      name: arr.name,
      age: arr.age
    };
  });
  let totalAge6 = getAge6.reduce((acc, cur) => acc + cur, 0);
  let getReg6 = getData6.map(arr => Number(arr.regNos));
  let getMaxAge6 = Math.max(...getAge6);

  const output = {
    noOfGroups: 6,
    group1: {
      members: getNameAndAge1,
      oldest: getMaxAge1,
      sum: totalAge1,
      regNos: getReg1
    },
    group2: {
      members: getNameAndAge2,
      oldest: getMaxAge2,
      sum: totalAge2,
      regNos: getReg2
    },
    group3: {
      members: getNameAndAge3,
      oldest: getMaxAge3,
      sum: totalAge3,
      regNos: getReg3
    },
    group4: {
      members: getNameAndAge4,
      oldest: getMaxAge4,
      sum: totalAge4,
      regNos: getReg4
    },
    group5: {
      members: getNameAndAge5,
      oldest: getMaxAge5,
      sum: totalAge5,
      regNos: getReg5
    },
    group6: {
      members: getNameAndAge6,
      oldest: getMaxAge6,
      sum: totalAge6,
      regNos: getReg6
    }
  };
}

module.exports = classifier;
