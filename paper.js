class Paper{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restituiton:0.3,
            friction:0.5,
            density:0.2
        }
        this.body=Bodies.circle(x,y,diameter/2,options)
        this.diameter=diameter
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        fill(255)
        image(this.image,0,0,this.diameter/2,this.diameter/2)
        pop();
        
    }
    
}