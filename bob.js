class paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:3,
			friction:0,
			density:7.8,

			
			}
		
	
		this.body=Bodies.circle(x, y, 25, options)
		World.add(world, this.body);

	}
	display(){
	push()
	elipseMode(RADIUS)
	fill(254,0,255)
			
			//ellipse(this.body.position.x,this.body.position.y, 25,25);
			pop()
			
	}

}