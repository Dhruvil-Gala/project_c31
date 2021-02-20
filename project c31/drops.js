class Drops{
    constructor(x,y) {
      var options = {
          isStatic: false,
          restiution:1,
          friction:0.0,
          density:0.3
      }
      this.body = Bodies.circle(x,y,5/2,options);
      this.radius =5/2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill(0,5,253);
      ellipse(0, 0, this.radius, this.radius);
      
      if (this.body.position.y > 400) {
       
        Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,600)})
      }
    
      pop()
    }
  };