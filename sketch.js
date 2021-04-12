var catImg,cat,catImg2,catImg3,catImg4
var gardenImg,garden
var mouse,mouseImg,mouse2,mouse3,mouse4
var mouseImg2,mouseImg3



function preload() {

   // load the images here

    gardenImg.loadImage("images/garden.png")
    catImg.loadAnimation("images/cat1.png")
    //catImg2.loadAnimation("images/cat2.png","images/cat3.png")
   // catImg3.loadAnimation("images/cat4.png")
    mouseImg.loadAnimation("images/mouse1.png")

}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    garden = createSprite(870,600)
    garden.addImage("backgroundpark",gardenImg)



    cat = createSprite(870,600)
    cat.addAnimation("catsleeping",catImg)
    cat.scale=0.2

    mouse = createSprite(200,600)
    mouse.addAnimation("standingmouse",mouseImg)
    mouse.scale = 0.15

    cat
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
