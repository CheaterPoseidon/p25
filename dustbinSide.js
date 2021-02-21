class DustbinSide{
      constructor(x,y,width,height) {
          this.image=loadImage('dustbin.png')
            var options = {
                isStatic:true
            }
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.width=width
            this.height=height
            World.add(world,this.body)
        }
        display(){
            var pos =this.body.position;
            var angle=this.body.angle;
            imageMode(CENTER)
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(255)
            rect(0,0, this.width, this.height);
            pop();
            image(this.image,610,575,260,200)
        
        }
    
    
}