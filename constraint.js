class Sling {

    constructor(body1,pointB){
        
       var options={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }

        this.elastic=Constraint.create(options);
        this.bodyA=body1;
        this.pointB=pointB;
        World.add(world,this.elastic);
    }

    fly(){
        this.elastic.bodyA=null;
    }

    attach(body1){
      this.elastic.bodyA=body1;
    }

    display(){

        if(this.elastic.bodyA){


        var pointA= this.bodyA.position;
        var pointB= this.pointB;
        
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}