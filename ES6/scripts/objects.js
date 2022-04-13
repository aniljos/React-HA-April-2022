var x = 10;
var y = 20;


x.toString()
//x.print();

Number.prototype.print = function(){
    console.log(this);
}

x.print();
y.print();

class Test{
    constructor(x){
        this.x = x;
    }
}

class Demo extends Test{

    constructor(x, y){
        super(x);
        this.y = y;
    }
}

var yObj1 = new Demo(10, 20);
console.log(yObj1);

var yObj2 = new Demo(100, 200);
console.log(yObj2);


Demo.prototype.print = function(){
    console.log("print", this.x, this.y);
}
yObj1.print();
yObj2.print();
