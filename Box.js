class Box{ 
    constructor(x,y,w,h)
 
    { 
        var options={ 
            
            isStatic:true 
        } 
    
    this.x=x; 
    this.y=y; 
    this.w=w 
    this.h=h 
    
    this.image = loadImage("dustbingreen.png");

    this.body=Bodies.rectangle(x, y, w, h , options);
     World.add(world, this.body);
    
    } 
     
     display() { 
         
        var groundPos=this.body.position; 
        image(this.image,590,450,170,200);
    push() 
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER) 
    fill(0,255,0) 
    rect(0,0,this.w, this.h); 
    imageMode(CENTER)
    
    //image(this.image,0,0,this.w,this.h)
    pop() 
} 

}