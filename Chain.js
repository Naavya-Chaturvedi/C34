class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 300
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA !== null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;;
            push()
            strokeWeight(4);
            stroke("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }
        
    }
    
}