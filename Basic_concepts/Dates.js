// Date objects = objects that contain values that represent dates and times
//                  these date objects can be changed and formatted
// Date(year, month day, hour, minute, second, ms)

const date = new Date();

const year = `Year: ${date.getFullYear()}`;
const month = `Month: ${date.getMonth()}`;
const day = `Day: ${date.getDate()}`;
const hour = `Hour: ${date.getHours()}`;
const minutes = `Minute: ${date.getMinutes()}`;
const seconds = `Seconds: ${date.getSeconds()}`;
const dayOfWeek = `Day of the Week is: ${date.getDay()}`

console.log(date);

console.log(`${year}\n${month}\n${day}\n${hour}\n${minutes}\n${seconds}\n${dayOfWeek}`);


const date1 = new Date(2024, 6, 20, 5, 30, 45, 59);
console.log(date1);


const date2 = new Date("2024-07-20T05:30:59Z");
console.log(date2);
//set date
date2.setFullYear(2000);
console.log(date2);

