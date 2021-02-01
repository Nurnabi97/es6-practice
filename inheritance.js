class Parent{
    constructor(){
        this.fatherName = "Atikur Rahaman"
    }
  
}



class Child extends Parent{
    constructor(name, age){
        super();
       this.name = name,
       this.age = age
    }
    getFullname(){
        return this.name + "is dughter of " + this.fatherName;
    }
}

const childName = new Child("mitu", 14);
const childName2 = new Child("mouno", 10);
console.log(childName.getFullname()); //add fathers name.
console.log(childName2);

