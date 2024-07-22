import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.green(
    "\t\t\t*************** Welcome To University Management System ***********************"
  )
);

class Person {
  name: string;
  age: number;
  getName() {

  }
  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
}

class Course {
    id:number
    name:string
    students:Student[] = []
    instructor:Instructor[] = []
    addStudent(std:Student){
        this.students.push(std)

    }

    setInstructor(instructor:Instructor){
        this.instructor.push(instructor)

    }

    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }

}

class Department{
    name:string
    courses:Course[]= []
    addCourse(course:Course){
        this.courses.push(course)

    }
    constructor(name:string){
        this.name = name
    }
}
//  inheritance
class Student extends Person {
    rollNumber:string
    courses:Course[]= []
    registerForCources(courses:Course){
        this.courses.push(courses)

    }
    constructor(name:string,age:number,rollNumber:string){
        super(name,age)
        this.rollNumber = rollNumber
    }
}

class Instructor extends Person {
    salary:number
    courses:Course[]= []
    assignCourse(courses:Course){
        this.courses.push(courses)

    }
    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary = salary
    }
}

const std1 = new Student("zainab",17,"ce-123")
const std2 = new Student("Sakina",18,"ce-1234")

const instructor1 = new Instructor("Neha",17,60000)
const instructor2 = new Instructor("Yamna",18,50000)

const course1 = new Course(1,"Blockchain")
const course2 = new Course(2,"Metaverse")

course1.addStudent(std1)
course2.addStudent(std1)
course1.addStudent(std2)

course1.setInstructor(instructor1)
course2.setInstructor(instructor2)


const d1 = new Department("Computer Science")

d1.addCourse(course1)
console.log(d1.courses);


std1.registerForCources(course1)
std2.registerForCources(course2)
std1.registerForCources(course2)
console.log(std1.courses); // video task complete



console.log(course1.students);

