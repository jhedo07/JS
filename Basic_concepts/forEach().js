// forEach() = method used to iterate over the elements of an array
//              and apply a specific function (callback)
//              to each element

//              array.forEach(callback)
//              element, index, array are provided

let numbers = [1, 2, 3, 4, 5];


function evenNUm(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);

}

numbers.forEach(evenNUm);
numbers.forEach(display);


let letters = ["a", "b", "c", "d", "e"];


function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}



letters.forEach(toUpperCase);
letters.forEach(display);