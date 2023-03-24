//console.log("app")
// when we use ! err goes for null it is a html form element
//const anchor=document.querySelector('a')!
//second way
//const anchor=document.querySelector('a') as HTMLAnchorElement
// console.log(anchor.COMMENT_NODE);
//type of element is input
// const inp=document.getElementById('#inp') as HTMLInputElement
// inp.addEventListener('submit',(e:Event)=>{
//     e.preventDefault();
//     console.log(inp.value)
// })
//classes
// class invoice{
//     // client:string;
//     // details:string;
//     // amount:number;
//     // constructor(c:string,a:string,b:number){
//     //     this.client=c;
//     //     this.details=a;
//     //     this.amount=b;
//     // }
//     //second way using acess modifier
//     constructor(
//         readonly client:string,
//         private details:string,
//         public amount:number
//     ){}
//     format(){
//         return `${this.client} has ${this.details} taken ${this.amount}`
//     }
// }
import { invoice } from './classes/invice.js';
const invone = new invoice("lipan", "karnataka", 200);
const invtwo = new invoice("deava", 'westbengal', 300);
//invone.client="danish"
console.log(invone, invtwo);
const me = {
    name: "sanket",
    age: 24
};
//console.log(me)
const greetPerson = (isperson) => {
    console.log('hello ', isperson.name);
};
greetPerson(me);
