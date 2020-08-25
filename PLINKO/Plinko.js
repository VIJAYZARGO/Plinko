class Plinko {
    constructor(x,y){
        var options2 ={
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,10,options2);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos2 = this.body.position;
        ellipseMode(RADIUS);   
        fill("pink");
        ellipse(pos2.x,pos2.y,this.r,this.r);
    }
};
