// ES6 Modules  = An external file that contains reusable code 
//                  that can be imported into other Javascript files.
//                  Write reusable code for many different apps.
//                  Can contain variables, classes, functions ... etc
//                  Introduced as part of ECMAScript 2015 update

import { PI, getCircumference, getArea, getVolume } from './MathUtil.js';

console.log(PI);

const Circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${Circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);


