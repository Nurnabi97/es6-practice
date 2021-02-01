//destructuring object.
const bioData = {name: "nurnabi", father: "nurhossain", village: "atapara", postalCode: "5270"};

const  {village, name, postalCode} = bioData; //destructure the desire object by invoking property name inside {}.
console.log(name, village, postalCode); // invoking what do you want in result.


//also you can do this type destructuring.
const complexObject = {
    friendName: "shamim",
    info: {
        age: "28",
        married: "false",
    }
}
const {friendName, married} = complexObject.info; //friendName: undefine because we are inside of complexObject.
console.log(friendName, married);


//destructuring array.
const district = ["JOYPURHAT", "DHAKA", "NOAKHALI", "BORISHAL", "CUMILLA", "GAZIPUR"];

let [mydistrict, getdhaka] = district;   //name mean position 0,1,2,3....n
console.log(mydistrict, getdhaka);       

//comment out and see result of the rest district name.
// let [mydistrict, ...restDistrict] = district; // we can get also rest of district.
// console.log(mydistrict, restDistrict);
