//Create variables here
var dog,dogimg1,dogimg2,database
var stock=0
function preload()
{
	//load images here
  dogimg1=loadImage("images/dogImg.png")
  dogimg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimg1)
  dog.scale=0.15
  database.ref('food').on("value",readstock)
}


function draw() {  
background("green")
  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROW)){
    dog.addImage(dogimg2)
     writestock(stock) 
  }

  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+stock,170,200);

}
function readstock(data){
stock=data.val()
}
function writestock(x){
if (x<=0) {
  x=0
} 
else {
  x=x-1
}
database.ref('/').update({
  food:x
})
}


