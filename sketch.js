var laserCannon, laserCannonimg
var bullet
var edges
var crabimg, crab
var crabGroup
var bulletGroup

function preload(){
laserCannonimg = loadImage("jet.png")
crabimg = loadImage("crab.png")

}

function setup() {
 createCanvas(600, 600)
 laserCannon = createSprite(250, 550, 20, 20)
 laserCannon.addImage(laserCannonimg)
 laserCannon.scale = 0.2
 //edges=createEdges()

 bulletGroup = new Group()

 crabGroup = new Group()
} 

function draw() {
 background("black")
 edges= createEdgeSprites();
 /*if(crabGroup.isTouching(bulletGroup)) {
   for (var i=0; i<crabGroup.lenth; i++) {
      if (crabGroup[i].isTouching(bulletGroup)) {
         crabGroup[i].destroy()
         bulletGroup.destroyEach()
      }
   }
 } */

 if(keyDown("a")) {
    laserCannon.x -= 5
 } 

 if(keyDown("d")) {
    laserCannon.x += 5
 }
 
 if(keyDown("space")) {
   spawnBullets()
 }
 
 laserCannon.bounceOff(edges)
 spawnCrab(65)
 spawnCrab(65+55)
 spawnCrab(65+60+55)
 spawnCrab(65+60+55+55)

 drawSprites()
}
function spawnBullets() {
   bullet = createSprite(480,480,10,40)
    //bullet.x=500 
    bullet.shapeColor = "#009900"
 bullet.x=laserCannon.x
 bullet.velocityY = -20
 bulletGroup.add(bullet)
 bullet.lifetime=50
 console.log("bullet")
 console.log(bullet.depth)
 bullet.depth = crab.depth
 bullet.depth += 1
}
function spawnCrab(y){
   for(c=0;c<6;c++){
      crab=createSprite(65+94*c,y,50,25)
      crab.addImage(crabimg)
      crab.scale = 0.09
      crabGroup.add(crab) 
    }
}

function crabHit(bullet,crab) {
   crab.destroy ()
}