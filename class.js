class student{
    constructor(fname, lname, address){
        this.fname = fname,
        this.lname = lname,
        this.address = address,
        this.district = "joypurhat"
    }
}
const student1 = new student("Nur", "Nabi", "Atapara");
const student2 = new student("afia", "anjum", "vallokgari");
console.log(student1);
console.log(student2);