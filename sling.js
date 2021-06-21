class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB = pointB
        this.slings = Constraint.create(options);
      
  World.add(world,this.slings)
}
fly(){
    this.slings.bodyA = null;
}

display(){
   if(this.slings.bodyA){
       line(this.slings.bodyA.position.x,this.slings.bodyA.position.y,this.pointB.x,this.pointB.y)
   }
}
}