class BouncyBall{
	constructor(x,y,r)
	{
		// var options={
		// 	restitution:0.3
		// 	friction:5
		// 	density:1
		// }

	


		//bouncyball=new bouncyball(900,450,70);
		

		// this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);


	}
	display()
	{
		    var bouncyBallPos=this.body.position;		
		    push()
		    translate(bouncyBallPos.x, bouncyBallPos.y);
			CENTERMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
		
			// circle(0,0,this.r, this.r);
			
			
			pop()
	}

}