

import { Hasformatter } from '../interfaces/Hasformatter.js';
export class invoice implements Hasformatter{
    
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}
        
    
    format(){
        return `${this.client} has ${this.details} taken ${this.amount}`
    }

}
//write code for pallindrome?
// function checkPalindrom (str) {
//   return str == str.split('').reverse().join('');
// }


