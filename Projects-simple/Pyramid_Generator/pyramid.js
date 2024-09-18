const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

for (let j = 1; j <= count; j++) {
  if (inverted) {
    rows.unshift(padRow(j, count));
  } else {
    rows.push(padRow(j, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);