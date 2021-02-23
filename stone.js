class Stone{

    constructor(x,y){

        var options={
            'isStatic':false,
            'restituition':0,
            'friction':1,
            'density':1.2
        }

        this.body=Bodies.circle(x,y,30,options)
        this.x=x;
        this.y=y;
        this.r=30;
        this.image=loadImage("images/stone.png");

        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
    }
}