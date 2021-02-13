var bg, bgImage, bgSound, introgbg, introbgImage, you, youDeath;
var copter, copterImage, trap, trapImage, trapGroup;
var invisible1, invisible2, invisible3, invisible4, invisible5;
var ground, rope, ropeImage, heart1, heart2, heart3, gameover;
var fireSound, gameoverImg;
var enemy,
  deadbody,
  life = 3,
  score = 0,
  hiscore = 0;
var heliSound, hurtSound, introSound;
var gameState = "intro";

function preload() {
  //load image
  bgImage = loadImage("images/bggg.jpg");
  ropeImage = loadImage("images/rope.png");
  introbgImage = loadImage("images/introbg.jpg");
  gameoverImg = loadImage("images/defeatbg.png");
  bulletImage = loadImage("images/bullet.png");
  gunImage = loadImage("images/gun.png");
  bodyImage = loadImage("images/body.png");
  buttonImg = loadImage("images/playbutton.jpg");
  carImg = loadImage("images/car.png");
  howplayImg = loadImage("images/howtoplay.jpg");
  playAgainImg = loadImage("images/playagain.png");
  quitImg = loadImage("images/quit.png");
  howplayscreenImg = loadImage("images/howplayscreen.png");
  closeImg = loadImage("images/close.png");

  //load Animation
  copterImage = loadAnimation(
    "images/heli1.png",
    "images/heli2.png",
    "images/heli3.png",
    "images/heli4.png"
  );

  spaceship = loadAnimation("images/spaceship.png");

  youRunning = loadAnimation(
    "images/walking/run1.png",
    "images/walking/run2.png",
    "images/walking/run3.png",
    "images/walking/run4.png"
  );

  enemyImage = loadAnimation("images/imposter1.png");
  enemyOpen = loadAnimation("images/imposter2.png");
  heartImage = loadAnimation("images/heart1.png");
  heart2Image = loadAnimation("images/heart2.png");

  youStand = loadAnimation("images/walking/standamong.png");
  youDeath = loadAnimation("images/ghost.png");

  //load sounds
  heliSound = loadSound("sounds/spacecraft.mp3");
  hurtSound = loadSound("sounds/hurt.mp3");
  //bgSound = loadSound("sounds/bgplay.mp3");
  introSound = loadSound("sounds/amongustheme.mp3");
  fireSound = loadSound("sounds/gunshot2.mp3");
  walkingSound = loadSound("sounds/walking.mp3");
  lost = loadSound("sounds/lost.mp3");
  roundStart = loadSound("sounds/roundStart.mp3");
 
}

function setup() {
  createCanvas(750, 330);

  bg = createSprite(330, 150);
  bg.addImage(bgImage);
  bg.scale = 1.5;

  introbg = createSprite(370, 160);
  introbg.addImage(introbgImage);
  introbg.scale = 0.8;

  copter = createSprite(-110, 50);
  copter.addAnimation("sss", spaceship);
  copter.scale = 0.5;

  invisible1 = createSprite(230, 200, 5, 800);
  invisible1.visible = false;

  invisible2 = createSprite(290, 270, 1200, 5);
  invisible2.visible = false;

  invisible3 = createSprite(630, 150, 5, 600);
  invisible3.visible = false;

  invisible4 = createSprite(550, 150, 5, 600);
  invisible4.visible = false;

  invisible5 = createSprite(290, 290, 1200, 5);
  invisible5.visible = false;

  you = createSprite(70, 70);
  you.addAnimation("stand", youStand);
  you.addAnimation("running", youRunning);
  you.addAnimation("death", youDeath);
  you.scale = 0.5;
  you.visible = false;

  ground = createSprite(290, 300, 1200, 5);
  ground.visible = false;

  heart1 = createSprite(20, 20);
  heart1.addAnimation("heart1", heartImage);
  heart1.addAnimation("heart2", heart2Image);
  heart1.scale = 0.4;
  heart1.visible = false;

  heart2 = createSprite(80, 20);
  heart2.addAnimation("heart1", heartImage);
  heart2.addAnimation("heart2", heart2Image);
  heart2.scale = 0.4;
  heart2.visible = false;

  heart3 = createSprite(140, 20);
  heart3.addAnimation("heart1", heartImage);
  heart3.addAnimation("heart2", heart2Image);
  heart3.scale = 0.4;
  heart3.visible = false;

  car = createSprite(750, 270);
  car.addImage(carImg);
  car.scale = 0.75;
  car.visible = false;

  enemy = createSprite(750, 240);
  enemy.addAnimation("img", enemyImage);
  enemy.addAnimation("open", enemyOpen);
  enemy.scale = 1.0;
  enemy.visible = false;

  gameover = createSprite(370, 180);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.4;
  gameover.visible = true;

  deadbody = createSprite(65, 310);
  deadbody.addImage(bodyImage);
  deadbody.scale = 0.5;
  deadbody.visible = false;

  playbutton = createSprite(370, 250);
  playbutton.addImage(buttonImg);
  playbutton.visible = false;

  howplay = createSprite(370, 200);
  howplay.addImage(howplayImg);
  howplay.visible = false;

  playAgain = createSprite(710, 275);
  playAgain.addImage(playAgainImg);
  playAgain.visible = false;

  quit = createSprite(50, 275);
  quit.addImage(quitImg);
  quit.visible = false;
  quit.scale = 0.85;

  howplayscreen = createSprite(375, 150);
  howplayscreen.addImage(howplayscreenImg);
  howplayscreen.visible = false;
  howplayscreen.scale = 0.5;

  closescreen = createSprite(630, 25);
  closescreen.addImage(closeImg);
  closescreen.visible = false;
  closescreen.scale = 0.2;

  //load group
  bulletGroup = new Group();

  introSound.loop();
}

function draw() {
  background("blue");

  drawSprites();

  you.collide(ground);
  enemy.collide(invisible3);

  if (gameState == "intro") {
    gameover.visible = false;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    introbg.visible = true;
    deadbody.visible = false;
    car.visible = false;
    howplay.visible = true;
    playAgain.visible = false;
    quit.visible = false;
    

    if (keyDown("space") || mousePressedOver(playbutton)) {
      gameState = "play";
      roundStart.play();
      heliSound.play();

      walkingSound.loop();
      introSound.stop();
    }

    if (mousePressedOver(howplay)) {
      howplayscreen.visible = true;
      closescreen.visible = true;
    }

    if (mousePressedOver(closescreen)) {
      howplayscreen.visible = false;
      closescreen.visible = false;
    }

    playbutton.visible = true;
  }

  if (gameState == "play") {
    helicopter();
    enemy.visible = true;
    car.visible = true;
    introbg.visible = false;
    deadbody.visible = false;
    playbutton.visible = false;
    howplay.visible = false;
    playAgain.visible = false;
    howplayscreen.visible = false;
    closescreen.visible = false;
   

    if (you.isTouching(ground)) {
      copter.velocityX = 5;
      copter.lifetime = 150;
      you.velocityY = 0;
    }

    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    quit.visible = false;

    enemy.velocityX = -5;

    youMovenment();
    Enemy();

    if (bg.x == 0) {
      bg.x = 350;
    }

    fill("red");
    textSize(25);
    text("score : " + score, 20, 100);

    text("High Score : " + hiscore, 20, 130);

    if (frameCount % 40 === 0) {
      score = score + 1;
    }
  }

  if (gameState == "end") {

    gameover.visible = true;
    playAgain.visible = true;
    quit.visible = true;
     

    if (score > hiscore) {
      hiscore = score;
    }

    walkingSound.stop();
  }
  if (gameState === "end") {
    if (keyDown("r") || mousePressedOver(quit)) {
      gameState = "intro";
      reset();
      introSound.loop();
      lost.stop();
    }

    if (mousePressedOver(playAgain)) {
      gameState = "play";
      gameover.visible = false;
      walkingSound.play();
      lost.stop();
      you.visible = false;
      heliSound.play();

      reset();
    }
  }
}
