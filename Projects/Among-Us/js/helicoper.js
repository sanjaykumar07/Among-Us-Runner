function helicopter() {

    copter.velocityX = 3;
  
    if (copter.isTouching(invisible1)) {
      rope = createSprite(110, 180);
      rope.addImage(ropeImage)
      rope.lifetime = 40;
  
      copter.velocityX = 0;
      invisible1.destroy();
  
      you.x = copter.x;
      you.y = copter.y;
      you.visible = true;
      you.velocityY = 4;
    }
  }