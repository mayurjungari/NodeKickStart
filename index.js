console.log('hello world');
// -------------------
let multiply=(a,b)=>a*b;
console.log(multiply(89,2));
// --------------
const student={
    name : 'mayur',
    Age :  6,
    class : "7th",
    greet(){
        console.log(`My name is ${this.name} i am in ${this.class}`);
    }
    
    
}
student.greet();