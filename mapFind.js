const names = [
    {id: 24, name: "nurnabi"},
    {id: 39, name: "rakib"}

];

let studentName = names.map(e => e.name); //you can display or push id also.
console.log(studentName);

let studentNameLength = names.map(e => e.name.length);
console.log(studentNameLength);

let studentFilter = names.filter(e => e.name.length > 6); //if true value will be display.
console.log(studentFilter); //you can filter like many way.

let studentFind = names.find(e => e.id > 30);   //you can find anything with your logic.
console.log(studentFind);

