class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("enemy.png");
		this.body=Bodies.circle(this.x, this.y, (this.r/4), options)
		this.Visiblity = 255;
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			imageMode(CENTER);
			image(this.image, 0,0,this.r+50, this.r+50)
			pop()


}}
