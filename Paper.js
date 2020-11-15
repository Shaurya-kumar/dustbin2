class Paper{

constructor(x,y,r){

var options = {

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

this.image= loadImage("paper.png");

this.x=x; 
this.y=y; 
this.r=r; 


this.body=Bodies.circle(x, y, (r-20)/2 , options);
World.add(world, this.body);



}
display(){


    var groundPos=this.body.position; 
        
    push() 
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER) 
    //fill(255,0,0) 
    //rect(0,0,this.r,this.r); 
    imageMode(CENTER);
    image(this.image, 0, 0, this.r,this.r);
    pop() 
 }
}