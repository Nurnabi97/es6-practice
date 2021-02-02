function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clock1 = stopWatch(); //calling function with clock1 named.
console.log(clock1());
console.log(clock1());
console.log(clock1());  //last count 3.


const clock2 = stopWatch(); //calling function with clock2 named.
console.log(clock2());  //1st count for clock2 is 1.
console.log(clock2());  //2nd count for clock2 is 2.

console.log(clock1());  //count start 4 because before count upto 3.
console.log(clock1());  // count 5 for clock1

console.log(clock2()); // last count for clock2 is 3.

//this is one big table and distribute other table clock1 = 1,2,3,4,5.. clock2 = 1,2,3,4,5.. like as.

