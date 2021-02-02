let phone1 = ["nokia", "samsung", "oppo", "onePlus"];
let phonePrice = [500, 1000, 1500, 3000, 5000];
let phoneLocation = [ "dhaka", "rajsahi", "joypurhat"];

let allArray = [...phone1, ...phonePrice, ...phoneLocation]; 
console.table(allArray);


//maximum value in array.
const value = [650, 780, 360];
const maximum = Math.max(...value);
console.log(maximum);