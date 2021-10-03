class launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
    this.pointB = pointB;
    this.launcher1 = Constraint.create(options);

    World.add(world, this.launcher1);
    }
    fly(){
        this.launcher1.bodyA = null;
    }
    display(){
    
    push();
        
        if(this.launcher1.bodyA){
            var pointA = this.launcher1.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(3);
    
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+15, pointB.y-10);
            

            
        }
    pop();
    }
}         