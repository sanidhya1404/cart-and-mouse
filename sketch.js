var canvas,bg,cat,mouse,catImg1,catImg2,mouseImg1,mouseImg2,togeather,catImg3,mouseImg3
function preload() {
    bg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")   
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse=createSprite(200,600)
   mouse.addAnimation("mouseStanding",mouseImg1)
   mouse.scale=0.15

   cat=createSprite(900,600)
   cat.addAnimation("catStanding",catImg1)
   cat.scale=0.25
   keyPressed()
}

function draw() {

    background(bg);
    if(cat.x -mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimage",catImg3);
        cat.changeAnimation("catlastimage")
        cat.x=300
        cat.scale=0.2
        mouse.addAnimation("mouselastimage",mouseImg3);
        mouse.changeAnimation("mouselastimage")
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
       if(keyCode === RIGHT_ARROW){
           mouse.addAnimation("mouseteasing",mouseImg2)
           mouse.changeAnimation("mouseteasing")
           mouse.framedelay=25;
           cat.velocityX=-5
           cat.addAnimation("catwalking",catImg2)
           cat.changeAnimation("catwalking")
       }
        
}
