class Ball{

    constructor(x,y){
        var options = {
            restitution:0.8
        }
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        fill("skyblue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}