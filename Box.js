class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.image1 = loadImage("sprites/polygon.png");
  }

  show(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image1, 0, 0, this.width, this.height);
    pop();
  }

  display(){
    if(this.body.speed<2.5){
      super.display()
    }
    else{
      World.remove(world, this.body);
      push()
    this.visbalety=this.visbalety-5
    tint(255,this.visbalety)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
    }
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
