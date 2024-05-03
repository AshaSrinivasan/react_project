class personaldetail{
    constructor (f,l,a){
        this.fname=f;
        this.lname=l;
        this.age=a;
    }
}
class projectdetail extends personaldetail{
    constructor(f,l,a){
        super(f,l,a)
        this.projectid=3002;
        this.projectname="dummy";

    }
}
let employe = new projectdetail('sam','kumar','45');
console.log(employe);

