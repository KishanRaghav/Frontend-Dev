// Q2 Student Result Processing
class Student {
    constructor(name, marks) { this.name = name; this.marks = marks; }
    calculateAverage() { return this.marks.reduce((a,m)=>a+m,0)/this.marks.length; }
    getGrade() {
        let avg=this.calculateAverage();
        if(avg>=90) return "A";
        else if(avg>=75) return "B";
        else if(avg>=50) return "C";
        else return "F";
    }
}

let s1=new Student("Kishan",[90,85,92]);
let s2=new Student("Raghav",[70,65,60]);
let s3=new Student("Aman",[40,45,30]);

console.log(s1.name,s1.calculateAverage(),s1.getGrade());
console.log(s2.name,s2.calculateAverage(),s2.getGrade());
console.log(s3.name,s3.calculateAverage(),s3.getGrade());
