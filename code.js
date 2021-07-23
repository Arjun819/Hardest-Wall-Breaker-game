var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f7fafd44-c4c4-4cd9-b721-8652facbaff5","fecd3d3c-53c0-461e-8e14-770e80a9cf49","d0ff4518-5773-4c01-90d1-5cdc70917db3","c514d186-ab6a-4701-931c-a08175db71b0","c5b75cf7-71e5-4833-affd-8a050de88f22","d1f99ca7-555f-43a1-978f-07717fbce035","711c093b-ab10-43cc-8d7a-06b1e62ddf82","1566147c-49d9-43cf-9c77-6414d1cf2a61","55d10cc5-44d8-4543-9837-3ec1c476cc2c","5bce25b1-9589-44d0-bbc0-bb97b7f081ef"],"propsByKey":{"f7fafd44-c4c4-4cd9-b721-8652facbaff5":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png"},"fecd3d3c-53c0-461e-8e14-770e80a9cf49":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/2PzLvIilnxHk8GaBnlIIdpEuJbGNDCoB/category_vehicles/minecart.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"2PzLvIilnxHk8GaBnlIIdpEuJbGNDCoB","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2PzLvIilnxHk8GaBnlIIdpEuJbGNDCoB/category_vehicles/minecart.png"},"d0ff4518-5773-4c01-90d1-5cdc70917db3":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/PsL7aQMAiQPU3mxOT28VFMthN6yvstH0/category_sports/bocceball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"PsL7aQMAiQPU3mxOT28VFMthN6yvstH0","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PsL7aQMAiQPU3mxOT28VFMthN6yvstH0/category_sports/bocceball.png"},"c514d186-ab6a-4701-931c-a08175db71b0":{"name":"gold","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"9B8jgz9YAiUpdz0dYyc1fAoNAiPnYYkS","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c514d186-ab6a-4701-931c-a08175db71b0.png"},"c5b75cf7-71e5-4833-affd-8a050de88f22":{"name":"diamond","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/c5b75cf7-71e5-4833-affd-8a050de88f22.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":4,"version":"t80.u0b2SzDUqZ5TDZu_FkFWc5CXunn.","loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/c5b75cf7-71e5-4833-affd-8a050de88f22.png"},"d1f99ca7-555f-43a1-978f-07717fbce035":{"name":"copper","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/d1f99ca7-555f-43a1-978f-07717fbce035.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"A4QH3JVpozy8US3SY7F9SoU9GWXYe66b","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/d1f99ca7-555f-43a1-978f-07717fbce035.png"},"711c093b-ab10-43cc-8d7a-06b1e62ddf82":{"name":"iron","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/711c093b-ab10-43cc-8d7a-06b1e62ddf82.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"quzYhFdOAVDnwk7ewOs1P19Ebdo7VKQq","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/711c093b-ab10-43cc-8d7a-06b1e62ddf82.png"},"1566147c-49d9-43cf-9c77-6414d1cf2a61":{"name":"emerald","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/1566147c-49d9-43cf-9c77-6414d1cf2a61.png","frameSize":{"x":362,"y":362},"frameCount":1,"looping":true,"frameDelay":4,"version":"3i5nu7zUnRk8.y3pCI3Mwf3.PJjJuXGa","loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":362},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/1566147c-49d9-43cf-9c77-6414d1cf2a61.png"},"55d10cc5-44d8-4543-9837-3ec1c476cc2c":{"name":"you_win","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/55d10cc5-44d8-4543-9837-3ec1c476cc2c.png","frameSize":{"x":590,"y":332},"frameCount":1,"looping":true,"frameDelay":4,"version":"cCjjX9knjwlRWK8VsQaYSuYMoz60U4fQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":590,"y":332},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/55d10cc5-44d8-4543-9837-3ec1c476cc2c.png"},"5bce25b1-9589-44d0-bbc0-bb97b7f081ef":{"name":"you_lose","sourceUrl":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/5bce25b1-9589-44d0-bbc0-bb97b7f081ef.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"FLE2Lb0q4dzptXuTKq7FQgJb9oQGtwtv","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/iaEphD7TUOQYTAks3KgLiMa8Zx25TfIUPFIwKFYYRVk/5bce25b1-9589-44d0-bbc0-bb97b7f081ef.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var iron_1 = 3;
var iron_2 = 3;
var iron_3 = 3
var iron_4 = 3

var gold_1 = 5
var gold_2 = 5

var emerald_1 = 5
var emerald_2 = 5

var diamond_1 = 10

copper1_boolean = false
copper2_boolean = false
copper3_boolean = false
copper4_boolean = false
copper5_boolean = false

iron1_boolean = false
iron2_boolean = false
iron3_boolean = false
iron4_boolean = false
iron5_boolean = false

gold1_boolean = false
gold2_boolean = false

emerald1_boolean = false
emerald2_boolean = false

diamond1_boolean = false


var money = 0

bg = createSprite(200,200,20,20)
bg.setAnimation("bg")
bg.scale = 1
player = createSprite(200,370,20,20)
player.setAnimation('player')
player.scale = 0.6

iron1 = createSprite(15,20,20,20)
iron1.setAnimation('iron')
iron1.scale = 0.1
iron1.width = 600

copper1 = createSprite(75,20,20,20)
copper1.setAnimation('copper')
copper1.scale = 0.1
copper1.width = 600

gold1 = createSprite(135,20,20,20)
gold1.setAnimation('gold')
gold1.scale = 0.1
gold1.width = 600

copper2 = createSprite(195,20,20,20)
copper2.setAnimation('copper')
copper2.scale = 0.1
copper2.width = 600

iron2 = createSprite(255,20,20,20)
iron2.setAnimation('iron')
iron2.scale = 0.1
iron2.width = 600

copper3 = createSprite(315,20,20,20)
copper3.setAnimation('copper')
copper3.scale = 0.1
copper3.width = 600

emerald1 = createSprite(375,20,20,20)
emerald1.setAnimation('emerald')
emerald1.scale = 0.1
emerald1.width = 600
emerald1.height = 400

iron3 = createSprite(30,60,20,20)
iron3.setAnimation('iron')
iron3.scale = 0.1
iron3.width = 600

gold2 = createSprite(90,60,20,20)
gold2.setAnimation('gold')
gold2.scale = 0.1
gold2.width = 600

diamond1 = createSprite(150,60,20,20)
diamond1.setAnimation('diamond')
diamond1.scale = 0.1
diamond1.width = 610
diamond1.height = 400

emerald2 = createSprite(210,60,20,20)
emerald2.setAnimation('emerald')
emerald2.scale = 0.1
emerald2.width = 600
emerald2.height = 400

copper4 = createSprite(270,60,20,20)
copper4.setAnimation('copper')
copper4.scale = 0.1
copper4.width = 600

iron4 = createSprite(330,60,20,20)
iron4.setAnimation('iron')
iron4.scale = 0.1
iron4.width = 600

copper5 = createSprite(390,60,20,20)
copper5.setAnimation('copper')
copper5.scale = 0.1
copper5.width = 600

ball = createSprite(200,250,20,20)
ball.setAnimation('ball')
ball.scale = .06 

function draw() {
  background("white");
  createEdgeSprites(LEFT)
  createEdgeSprites(RIGHT)
  createEdgeSprites(TOP)
  createEdgeSprites(BOTTOM)
  
  ball.bounceOff(player)
  ball.bounceOff(leftEdge)
  ball.bounceOff(rightEdge)
  ball.bounceOff(topEdge)

  
  if(keyDown("space")){
  ball.velocityX = -4
  ball.velocityY = 4  
  }
  if(keyDown('right')){
    player.x = player.x + 4
  }
  if(keyDown('left')){
    player.x = player.x - 4
  }
  if(player.isTouching(leftEdge)){
    player.collide(leftEdge)
  }
  if(player.isTouching(rightEdge)){
    player.collide(rightEdge)
  }
  
  if(ball.isTouching(copper1)){
    copper1.destroy(ball)
    copper1_boolean = true
    if(copper1_boolean == true){
      money += 50
      copper1_boolean = false
    }
  }
  if(ball.isTouching(copper2)){
    copper2.destroy(ball)
    copper2_boolean = true
    if(copper2_boolean == true){
      money += 50
      copper2_boolean = false
    }
  }
  if(ball.isTouching(copper3)){
     copper3.destroy(ball)
    copper3_boolean = true
    if(copper3_boolean == true){
      money += 50
      copper3_boolean = false
    }
  }
  if(ball.isTouching(copper4)){
     copper4.destroy(ball)
    copper4_boolean = true
    if(copper4_boolean == true){
      money += 50
      copper4_boolean = false
    }
  }
  if(ball.isTouching(copper5)){
     copper4.destroy(ball)
    copper4_boolean = true
    if(copper4_boolean == true){
      money += 50
      copper4_boolean = false
    }
  }
  
  if(ball.isTouching(iron1)){
   iron_1 -= 1
   ball.bounceOff(iron1)
  }
  if(ball.isTouching(iron2)){
   iron_2 -= 1
  }
  if(ball.isTouching(iron3)){
   iron_3 -= 1
   ball.bounceOff(iron3)
  }
  if(ball.isTouching(iron4)){
   iron_4 -= 1
   ball.bounceOff(iron4)
  }
  
  if(ball.isTouching(gold1)){
    gold_1 -= 1
    ball.bounceOff(gold1)
  }
  if(ball.isTouching(gold2)){
    gold_2 -= 1
    ball.bounceOff(gold2)
  }
  if(ball.isTouching(gold2)){
    gold_2 -= 1
    ball.bounceOff(gold2)
  }
  
   if(ball.isTouching(emerald1)){
    emerald_1 -= 1
    ball.bounceOff(emerald1)
  }
  if(ball.isTouching(emerald2)){
    emerald_2 -= 1
    ball.bounceOff(emerald2)
  }
  
  if(ball.isTouching(diamond1)){
    diamond_1 -= 1
    ball.bounceOff(diamond1)
  }
  
  if(iron_1 == 0){
    iron1.destroy(ball)
    iron1_boolean = true
    if(iron1_boolean == true)
    money += 200
    iron1_boolean = false
  }
  if(iron_2 == 0){
    iron2.destroy(ball)
    iron2_boolean = true
    if(iron2_boolean == true)
    money += 200
    iron2_boolean = false
  }
  if(iron_3 == 0){
    iron3.destroy(ball)
     iron3_boolean = true
    if(iron3_boolean == true)
    money += 200
    iron3_boolean = false
  }
  if(iron_4 == 0){
    iron4.destroy(ball)
    iron4_boolean = true
    if(iron4_boolean == true)
    money += 200
    iron4_boolean = false
  }
  
  if(gold_1 == 0){
    gold1.destroy(ball)
    gold1_boolean = true
    if(gold1_boolean == true)
    money += 500
    gold1_boolean = false
  }
  if(gold_2 == 0){
    if(gold_1 == 0){
    gold1.destroy(ball)
    gold1_boolean = true
    if(gold1_boolean == true)
    money += 500
    gold1_boolean = false
  }
  }
  
  if(emerald_1 == 0){
   if(emerald_1 == 0){
    emerald1.destroy(ball)
    emerald1_boolean = true
    if(emerald1_boolean == true)
    money += 500
    emerald1_boolean = false
  }
  }
  if(emerald_2 == 0){
    if(emerald_1 == 0){
    emerald1.destroy(ball)
    emerald1_boolean = true
    if(emerald1_boolean == true)
    money += 500
    emerald1_boolean = false
  }
  }
  
  if(diamond_1 == 0){
    if(diamond_1 == 0){
    diamond1.destroy(ball)
    diamond1_boolean = true
    if(diamond1_boolean == true)
    money += 1000
    diamond1_boolean = false
  }
  }
  if(ball.isTouching(bottomEdge)){
    bg.setAnimation("you_lose")
    ball.visible = false
    player.visible = false
    copper1.visible = false
    copper2.visible = false
    copper3.visible = false
    copper4.visible = false
    copper5.visible = false
    iron1.visible = false
    iron2.visible = false
    iron3.visible = false
    iron4.visible = false
    gold1.visible = false
    gold2.visible = false
    emerald1.visible = false
    emerald2.visible = false
    diamond1.visible = false
  }
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
