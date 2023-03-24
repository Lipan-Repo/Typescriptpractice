"use strict";
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
const logdetails = (uid) => {
    console.log(`${uid}`);
};
logdetails(10);
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
