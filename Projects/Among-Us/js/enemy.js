function Enemy() {

 

    if (gameState == "play") {
      if(copter.x > 500){
      if (frameCount % 75 === 0  ) {
        var bullet = createSprite(630, 240);
        bullet.addImage(bulletImage)
        bullet.velocityX = -7;
        bullet.velocityY = 0.5;
        bullet.scale = 0.1;
        bullet.lifetime = 100
        bulletGroup.add(bullet);
        fireSound.play();
      }
    }
    }
  
    if (bulletGroup.isTouching(you)) {
      if (life >= 0) {
        life = life - 1
        if(life!==0)
        hurtSound.play();
      }
      if(life === 0){
        lost.play();
      }
  
    }
    
    if (bulletGroup.isTouching(you)) {
  
      bulletGroup.destroyEach();
    }
    
    if (life == 2) {

      heart3.changeAnimation("heart2", heart2Image);
    }
  
    if (life == 1) {
      heart2.changeAnimation("heart2", heart2Image);
    }
  
    if (life == 0) {
      heart1.changeAnimation("heart2", heart2Image);
      you.changeAnimation("death", youDeath);

      gameState = "end";
    }
  
    /*if (frameCount % 300 === 0 && gameState === "play") {
      trap = createSprite(700, 300);
      trap.addImage(trapImage)
      trap.scale = 0.75;
      trap.velocityX = -5;
      trapGroup.add(trap);
  
    }
  
  
  
    if (you.isTouching(trapGroup)) {
      if (life >= 0) {
        life = life - 1;
      }
      //trapGroup.destroyEach();
      hurtSound.play()
    }*/
  }