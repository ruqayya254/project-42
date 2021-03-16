const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadAnimation("1.png");
    thunder2 = loadAnimation("2.png");
    thunder3 = loadAnimation("3.png");
    thunder4 = loadAnimation("4.png");
    boy=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,1000)

    boyImage=createSprite(200,500,50,50)
    boyImage.addAnimation("boy",boy)
    boy.scale=0.5

    createCanvas(400,700);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addAnimation(thunder1);
            break;
            case 2: thunder.addAnimation(thunder2);
            break; 
            case 3: thunder.addAnimation(thunder3);
            break;
            case 4: thunder.addAnimation(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();

    
}   