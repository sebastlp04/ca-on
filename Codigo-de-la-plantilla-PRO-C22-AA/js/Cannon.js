class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannonImg = loadImage("./assets/canon.png");
    this.cannonbaseImg = loadImage("./assets/cannonBase.png");
    
  }
  
  display()
  {
    push();

    imageMode(CENTER);
    //rectMode(CENTER);
    //rect(this.x,this.y,this.width,this.height);
    image(this.cannonImg,this.x,this.y,this.width,this.height);
    pop();

    
    //rect(70,20,200,200);
    image(this.cannonbaseImg,70,20,200,200);
    noFill();

  }
}
