class Particles {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,this.radius,options);
      this.radius = 10;
      this.color = color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circleMode(CENTER);
      
      fill(random(0,255),random(0,255),random(0,255));
      circle(pos.x, pos.y, this.radius);
    }
  };