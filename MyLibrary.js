function isTouching(movingRect, fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    return true
  
  }
  else {
    return false
  }
  }
  function bounceOff(s1,s2){
    if(s1.x - s2.x < s1.width/2 + s2.width/2
      && s2.x - s1.x < s2.width/2 +s1.width/2) {
     s1.velocityX = s1.velocityX*(-1);
     s2.velocityX = s2.velocityX*(-1);
    }
    if(s1.y - s2.y < s1.height/2 + s2.height/2
      && s2.y - s1.y < s2.height/2 + s1.height/2){
        s1.velocityY = s1.velocityY*(-1)
  s2.velocityY = s2.velocityY*(-1)      }
  }