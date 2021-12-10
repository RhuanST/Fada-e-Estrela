var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada, vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozFada.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130, 520);
    fada.addAnimation("fadaVoando", imgFada);
    fada.scale = 0.25;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  keyPressed();
  if(star.position.y > 470 ){ 
   star.y = 470;
   fada.y = 500;
   fada.x = star.x - 140;
  }

  drawSprites();
}

function keyPressed() {
	if(keyDown(LEFT_ARROW)){
		fada.x -= 5;
	} else if(keyDown(RIGHT_ARROW)){
		fada.x += 5;
	} else if(keyDown(DOWN_ARROW)){
		star.velocityY = 15;
	}
}
