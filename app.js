

 function circumference(radius) {
   let circumferenceConotainer = 2 * 3.14 * radius;
   return console.log(circumferenceConotainer) 
 }
 circumference(20);

let age = 17
if (age < 18){
  console.log("You are a minor");
}
else {
  console.log("You are an adult");
}

let customer = "student"
if (customer !== "student") {
  console.log("Pay 100%");
}
else {
  console.log("Pay 50%");
}
let age = 12
function InecAgeChecker (age){
  if (age <= 17) {
    console.log("You are not eligible to vote");
  }
  else{
    console.log("You are eligible to vote");
  }
}
console.log(age);


let age = 3
  if (age >=1 && age <=10) {
    console.log("You've got 75% discount");
  }
  else if (age >=11 && age <=17) {
    console.log("You've got 50% discount");
  }
  else if (age >=18 && age <=25) {
    console.log("You've got 25% discount");
  }
  else {
    console.log("You've got no discount");
  }

Arrays
 const classmates = ["Tope", "Tolu", "Tayo", "Temi", "Tola"]
console.log(classmates[2]);
Updating arrays
classmates[1] = "Kenny"
console.log(classmates.length);
classmates.push("Samuel")
console.log(classmates);
classmates.pop()
console.log(classmates);
classmates.shift()
console.log(classmates);
classmates.unshift("Bisi")
console.log(classmates);

const newClassmates = ["Bisi", "Tope", "Tolu", "Tayo", "Temi", "Tola"]
console.log(newClassmates.slice(0,1));

Object
let person = new Object()
person.firstName = "Ranju"
person.lastNanme = "Were"
person.phone = 2349078678798
person.hobbies = ["Coding", "Sleeping"]
person.married = false
person.debt = null

person.address = {
    city: "Lagos",
    street: "Yaba",
    state: "Lagos",
    Country: "Naija"
}

const staff = {
    fullName: "Ranju Were",
    email: "ranjuwere45@gmail.com",
    age: 45,
    phone: 23475657567,
    hobbies: ["Deliverance", "Fasting"],
    address: {
        street: "Yaba",
        city: "Lagos",
        state: "Lagos",
        Country: "Naija"
    },
    salaryPerDay: 20000,
    numberOfDaysPresent: 24,
    salaryPerMonth: function(){
        return this.salaryPerDay * this.numberOfDaysPresent
    }
}
console.log(staff.salaryPerMonth());

let cm = "Director"
switch(cm){
    case(cm == "Janitor"):
    console.log("not my job");
    break;
    case(cm == "Security"):
    console.log("not my job");
    break;
    case(cm == "Admin"):
    console.log("not my job");
    break;
    default:
    console.log("my job");
}

for (let i = 0; i < 9; i++){
    console.log(i);
}

let i = 0
while(i<9){
    console.log(i);
    i+=4
}