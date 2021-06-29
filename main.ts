
let greeting:string='hello world';

let age:number=35;


let success:boolean=true;

let result:any='100';
result=100;

interface IUser{
    name:string,
    age?:number,
    print():string
}

let user:IUser = {
    name: 'john',
    print:function(){return ''}
};

console.log(user);

class Manager{
    name:string='Mike';
    age:number=40;
}

let m=new Manager();
console.log(m.name);


