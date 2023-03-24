//object
//redaonly we are using we can modifiy
//Employee is type alias
// let employee:{
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=>void
// }={
//     id:1,
//     name:"",
//     retire:(date:Date)=>{
//         console.log(date)
//     }
// }
// employee.name='lipan'
//type alias
//type Employee{
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=>void

// }
// let employee:Employee={
//     id:1,
//     name:"",
//     retire:(date:Date)=>{
//         console.log(date)
//     }
// }
//union type means more than one type
// function kgtolbs(weight:number|string):number{
//     //narrowing means we are exactly defining the type
//     if(typeof weight=='number'){
//         return weight*2.2;
//     }
//     else{
//         return parseInt(weight)*2.2;
//     }
// }
//type intersection
// type dragable={
//     drag:()=>void
// }
// type resizeable={
//     resize:()=>void
// }
// type uiwiget=dragable & resizeable
// let textbox:uiwiget={
//     drag:()=>{},
//     resize:()=>{}
// }
//literal type
// type Quantity=50 |100;
// let quantity:Quantity=100;
// type metric='cm'|'inch'
//null type
// function greet(name:string| null |undefined){
//     if(name){
//         console.log(name.toUpperCase())
//     }
//     else{
//         console.log("can't do")
//     }
// }
// greet(undefined)
//number type
//let a:number=10
//enum type
//let arr:[number,string]=[23,"lkd"]
//let arr:number[]=[1,22,4]
//optional chaining
// type Customer={
//     birthday?:Date
// }
// function getcustomer(id:number):Customer|null|undefined{
//     return id==0?null:{birthday:new Date()}
// }
// let customer=getcustomer(1)
// //first way
// if(customer!=null || customer!=undefined){
//     //console.log(customer.birthday)
//     //optional acessing operator
//     console.log(customer?.birthday?.getFullYear())
// }
//otional element acsess operator
//customers?.[0]
//optiona call
// let log:any=null
// log?.('a');
//Array

//we have to initialize the array
// let ninjas:string[]=[];
// ninjas.push("lipan")


//type any
//let age:any
// age=25
// age="lipan"
//age:{name:"lipan"}
//console.log(age)
// let mixed:any[]=[]
// mixed.push(1)
// mixed.push("lipan")
// mixed.push(true)
//let ninja:{name:any,age:any,value:any}
//we can define both the way because we have not mentioned type it is any type
// ninja={name:"lipan",age:24,value:1}
// ninja={name:24,age:25,value:"lipan"}
// console.log(ninja)
// console.log("my name")
 //console.log("hi lipan")
type stringNum=string|number
const logdetails=(uid:stringNum):void=>{
    console.log(`${uid}`)
}
logdetails(10)
//et calc:(a:number,b:number,c:string)=>number;
// calc=(numone:number,numtwo:number,action:string)=>{
//     if(action==="add"){
//         return numone+numtwo;
//     }
//     else{
//        return numone-numtwo;
//     }
// }
// console.log(calc(3,2,"sub"))
