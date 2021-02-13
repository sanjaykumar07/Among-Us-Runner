function youMovenment() {

    bg.x = bg.x - 10
    you.changeAnimation("running", youRunning)
  
    if (you.y > 250) {
      if (keyDown(UP_ARROW) ) {
        you.velocityY = -15;
        //you.changeAnimation("jump", youJump)
        //walkingSound.stop();
       
      }
      if(keyWentUp(UP_ARROW)){
        //walkingSound.loop();
      }
    }
  
    if (keyDown(DOWN_ARROW)) {
      //you.changeAnimation("sit", youSit)
      you.y = you.y + 10;
    }
    if (keyWentUp(DOWN_ARROW)) {
      //you.changeAnimation("stand", youStand)
    }
  
    /*if (you.x > 0) {
      if (keyDown(LEFT_ARROW)) {
  
        you.changeAnimation("back", youBack)
      }
    }
  
    if (keyWentUp(LEFT_ARROW)) {
      you.changeAnimation("back1", back)
    }*/
  
  
    you.velocityY = you.velocityY + 0.8
  
  }
  