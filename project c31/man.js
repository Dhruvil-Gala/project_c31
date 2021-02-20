class Man{
    constructor(x,y){
        this.body=Bodies.circle(x,y,80,{isStatic:true});
        World.add(world,this.body);
        
        this.image=loadImage("walking_6.png");
        this.image.scale=100;
        this.radius=70
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image, -12,38, 300, 300);
        
        pop();

    }
}