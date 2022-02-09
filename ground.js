class Ground 
{
  constructor(x, y, w, h,color) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color
    World.add(world,this.body);
  }

  display()
  {
   
    angle = angle+1;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    fill(this.color)
    rect(0,0,20,90)
    pop();
  }
 
   
}
