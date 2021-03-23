class Plinko{
    constructor(x,y,r) {
        this.options = {
            isStatic: true
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r,this.options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill(255,255,255);
        ellipse(0,0,this.r,this.r);
    }
}