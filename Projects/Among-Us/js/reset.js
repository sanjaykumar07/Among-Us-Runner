function reset() {
    life = 3;
    score = 0;
  
    heart1.changeAnimation("heart1", heartImage);
    heart2.changeAnimation("heart1", heartImage);
    heart3.changeAnimation("heart1", heartImage);
  
    copter = createSprite(-110, 50);
    copter.addAnimation("sss", spaceship);
    copter.scale = 0.5;
  
    invisible1 = createSprite(200, 200, 5, 800)
    invisible1.visible = false;
  }