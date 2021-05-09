class Paper{
    constructor(x, y) {
      var options = {
         isStatic:false, 
        'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50,options);
     // this.width = 60;
     // this.height = 60;
      
this.image=loadImage("paper.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      image(this.image,0,0,50,50);
      pop();
    }
  };