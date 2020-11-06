class Ground{
    constructor(x,y,width,height){
        var options ={
            restituion:0.4
        }
this.body=Bodies.rectangle(x,y,width,height)
world.add(world,this. body)
    }
     display(){
         var pos =this.body.position
         rectMode(CENTER)
         rect(pos.x,pos.y,this.width,this.height)
     }   
    }
