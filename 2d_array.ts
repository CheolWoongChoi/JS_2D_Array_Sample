function traverse2dArray(arr, ROW, COLUMN) {
  for (let i = 0; i < ROW; i++) {
    let row = "";

    for (let j = 0; j < COLUMN; j++) {
      row += arr[i][j] + " ";
    }

    console.log(row);
  }
}

function traverse2dArray2(arr) {
  arr.forEach((rowArray) => {
    let row = "";

    rowArray.forEach((column) => {
      row += column + " ";
    });

    console.log(row);
  });
}

const ROW = 4;
const COLUMN = 3;

// #1 | arr + 초기값 | arr[4][3]
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// traverse2dArray(arr, ROW, COLUMN);
// traverse2dArray2(arr);

// #2 | new Array + 초기값
const arr2 = new Array([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);

// traverse2dArray(arr2, ROW, COLUMN);
// traverse2dArray2(arr);

// #2-1 | new Array + 초기값 반복해서 넣기, params 자체가 1번이랑 똑같다. 비효율적
const params = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const arr2_1 = new Array(...params);

// traverse2dArray(arr2_1, ROW, COLUMN);
// traverse2dArray2(arr);

// #3 | new Array + 반복문
const arr3 = new Array(ROW);

for (let i = 0; i < ROW; i++) {
  arr3[i] = new Array(COLUMN).fill(null);
}

// traverse2dArray(arr3, ROW, COLUMN);
// traverse2dArray2(arr3);

// #4 | new Array + forEach
const arr4 = new Array(ROW).fill(null);

arr4.forEach((_, idx) => {
  arr4[idx] = new Array(COLUMN).fill(null);
});

// traverse2dArray(arr4, ROW, COLUMN);
// traverse2dArray2(arr4);

// #5 | Array.from
const arr5 = Array.from(new Array(ROW), (_) => new Array(COLUMN).fill(null));

// traverse2dArray(arr5, ROW, COLUMN);
// traverse2dArray2(arr5);
