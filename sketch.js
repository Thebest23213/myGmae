var person1 , person1Img,person1Img2, person1Img3
var backgroundImage,floor,floorImg, collider
var elevator,elevatorImg,elevatorImg2,elevatorImg3
var door,doorImg,doorImg2
var hack,hackImg,hackImg2
var w, w2
var camera,cameraImg
var detector,detectorImg



 function preload () {
  person1Img=loadAnimation("./assets/New Piskel-1.png.png")
  person1Img2=loadAnimation("./assets/New Piskel-3.png.png","./assets/New Piskel-2.png.png")
  person1Img3=loadAnimation("./assets/New Piskel-1.png (3)-1.png (5).png")
  backgroundImage=loadImage("./assets/background.png")
  floorImg=loadImage("./assets/floor.png")
  elevatorImg=loadAnimation("./assets/elevator.png")
  elevatorImg2=loadAnimation("./assets/elevator.png","./assets/elevator2.png","./assets/elevator3.png","./assets/elevator4.png")
  elevatorImg3=loadAnimation("./assets/elevator4.png")
  doorImg=loadAnimation("./assets/Door.png")
  doorImg2=loadAnimation("./assets/Door2.png")
  hackImg=loadAnimation("./assets/hacker.png")
  hackImg2=loadAnimation("./assets/hacker2.png")
  cameraImg=loadAnimation("./assets/camera1.png","./assets/camera2.png","./assets/camera3.png","./assets/camera5.png")
  detectorImg=loadAnimation("./assets/detecter.png")


  elevatorImg2.looping=false;
 }





 function setup() {
  createCanvas(windowWidth,600);
    floor=createSprite(900,350,3000,500)
    floor.addImage(floorImg)
    elevator=createSprite(1700,440)
    elevator.addAnimation("closed",elevatorImg)
    elevator.addAnimation("opening",elevatorImg2)
    elevator.addAnimation("opened", elevatorImg3)
    elevator.scale=0.25
    door=createSprite(1000,415)
    door.addAnimation("locked",doorImg)
    door.addAnimation("open",doorImg2)
    door.scale=0.25
    person1=createSprite(350,200)
    person1.addAnimation("stay",person1Img)
    person1.addAnimation("walk",person1Img2)
    person1.addAnimation("hacking",person1Img3)
    person1.scale=0.15
    //person1.debug=true;
    //door.debug=true;
    person1.setCollider("rectangle",0,0,30,1020)
    door.setCollider("rectangle",0,0,200,800)
    collider=createSprite(900,830,3000,500)
    collider.visible=false;
    hack=createSprite(1000000000000000,280)
    hack.addAnimation("hack",hackImg)
    hack.addAnimation("hack2",hackImg2)
    hack.scale=0.2
    camera=createSprite(500,120)
    camera.addAnimation("whatch",cameraImg)
    camera.scale=0.08
    camera.visible=false;
    detector=createSprite(500,300)
    detector.addAnimation("dec",detectorImg)
    detector.scale=0.8
    detector.visible=false;
    
 }

 function draw() {
  
  background(backgroundImage);
     
  person1.velocityY+=5
  person1.velocityY+=5
  person1.collide(collider)
  person1.collide(door)


 if (mousePressedOver(hack)){
  hack.changeAnimation("hack2")
  door.changeAnimation("open")
  door.velocityY=3
 }
 if(keyDown("right")){
    person1.x+=8
    person1.changeAnimation("walk")  
  }
  else{
    person1.changeAnimation("stay")
  }
 
  if(keyDown("left")){
    person1.x-=8
  }
 
 if(person1.isTouching(elevator)){
  console.log("Touched");
  elevator.changeAnimation("opening")

  detector.visible=true;
  camera.visible=true;
 }
  if(keyDown("z")){
    person1.changeAnimation("hacking")
    hack.x=1020
    w=createSprite(person1.x-30,person1.y,10,10)
    w2=createSprite(person1.x+30,person1.y,10,10)
    w.visible= false;
    w2.visible= false;
    if(person1.isTouching(w)){
      person1.velocityX=0;
    }
  }
  else{
    hack.x=1000000
  }
  if(keyDown("space")){
    person1.velocityY=-20
   }
    drawSprites();
 }
 
