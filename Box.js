class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(World,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}










