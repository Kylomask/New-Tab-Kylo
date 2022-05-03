var title
var bgImg,titleImg;
var ground,ground2,groundImg,runman,runimg,spike,spikeImg,spikeG,coin,coinImg,coins,coinget,coin2,coins2,coin3,coin3,wait,play;
var score = 0
var hiscore = 0
var gameState = 0
var cursor,cursorImg;
var app1,app1Img;
var app2,app2Img;
var app3,app3Img;
var app4,app4Img;
var app5,app5Img;
var app6,app6Img;
var app7,app7Img,faker,lose;
var collectedCoins = 0;

function preload(){
  bgImg = loadImage("OIP(1).png");
  titleImg = loadImage("e3e0853cc46b3bfda8c5b37318f3b78d6280c7f984ab59283b84facef159bd84621d5fcb7aa90cabda39a3ee5e6b4b0d3255bfef95601890afd80709f2e9afc85c07cc1278cd1cc27395078e.png");
  groundImg = loadImage("R.png");
  runimg = loadImage("costume2 (2).png");
  spikeImg = loadImage("spike.png");
  coinImg = loadImage("Coin.png");
  coinget = loadSound("coinget.mp3");
//   wait = loadSound("new_tab_game_wait.mp3");
  play = loadSound("new_tab_game.mp3");
  app1Img = loadImage("scratch.png");
  app2Img = loadImage("github.png");
  app3Img = loadImage("spotify.png");
  app4Img = loadImage("quizizz.png");
  app5Img = loadImage("th-_4_-_1_ (1).png");
  app6Img = loadImage("office.png");
  app7Img = loadImage("youtube.png");
  faker = loadImage("youtubent.png");
  cursorImg = loadImage("cursor.png");
  lose = loadSound("lose.mp3")
}

function setup() {
//   wait.loop()
  createCanvas(windowWidth, windowHeight);
  title = createSprite(width/2,height/4)
  title.addImage(titleImg)
  ground = createSprite(422,height-150)
  ground.addImage(groundImg)
  ground.scale = 2
  ground2 = createSprite(width-422,height-150)
  ground2.addImage(groundImg)
  ground2.scale = 2
  ground.setCollider("rectangle",0,103)
  runman = createSprite(width/4,height*0.5)
  runman.addImage(runimg)
  runman.scale = 3
  spikeG = createGroup()
  coins = createGroup()
  coins2 = createGroup()
  coins3 = createGroup()

  var str = "heilo"
  for (i = 0; i < str.length;i++)
  {
    if (str[i]=='i')
    {
      console.log("Found text at "+i)
    }
  }
  app1 = createSprite(width/2,height/2.2)
  app1.addImage(app1Img);
  app1.scale = 0.1
  app2 = createSprite(width/2 - 100,height/2.2-20)
  app2.addImage(app2Img);
  app2.scale = 0.25
  app3 = createSprite(width/2 + 100,height/2.2-20)
  app3.addImage(app3Img);
  app3.scale = 0.02
  app4 = createSprite(width/2 + 200,height/2.2-40)
  app4.addImage(app4Img);
  app4.scale = 1.5
  app5 = createSprite(width/2 - 200,height/2.2-40)
  app5.addImage(app5Img);
  app5.scale = 0.5
  app6 = createSprite(width/2 - 300,height/2.2-60)
  app6.addImage(app6Img);
  app6.scale = 0.5
  app7 = createSprite(width/2 + 300,height/2.2-60)
  app7.addImage(app7Img);
  app7.scale = 0.1
  cursor = createSprite(mouseX,mouseY)
  cursor.addImage(cursorImg)
  cursor.scale = 2
}
function draw() {
  background(bgImg)
  textAlign(CENTER,CENTER)
  runman.velocityY+=2
  runman.collide(ground)
  cursor.x = mouseX + 16
  cursor.y = mouseY + 16
  if (score > hiscore){
    hiscore = score
  }
  if (keyWentDown("up")&&runman.y >= 540){
    runman.velocityY = -20
    if (gameState === 0){
      music()
      gameState = 1
    }

    
  }
  drawSprites()
  fill("white")
  if (gameState === 1){
    handleDanger()
    text("Run Man Jumpy\n" + score + "     " + "HI "+ hiscore,width/2,height/1.5);
    score++   
  }else{
    text("Run Man Jumpy\nPress up to jump",width/2,height/1.5)
  }
  if (runman.isTouching(coins)){
    coins.destroyEach()
    score += 50
    coinget.play()
  }
  if (runman.isTouching(coins2)){
    coins2.destroyEach()
    score += 50
    coinget.play()
  }
  if (runman.isTouching(coins3)){
    coins3.destroyEach()
    score += 50
    coinget.play()
  }
  if (mousePressedOver(app1)){
    window.location.href = "https://scratch.mit.edu"
  }
  if (mousePressedOver(app2)){
    window.location.href = "https://github.com/"
  }
  if (mousePressedOver(app3)){
    window.location.href = "https://open.spotify.com/playlist/6hN2VAOhCHQeVKUnoLtBVm?si=90cca7d1018542f0"
  }
  if (mousePressedOver(app4)){
    window.location.href = "https://quizizz.com/admin"
  }
  if (mousePressedOver(app5)){
    window.location.href = "https://kahoot.it"
  }
  if (mousePressedOver(app6)){
    window.location.href = "https://www.office.com/?auth=1"
  }
  if (mousePressedOver(app7)){
    app7.addImage(faker);
  }
  // text(mouseX + " " + mouseY,mouseX,mouseY)
}


//hiscore = 2857618
//hiscore = 0
//usernumber958469414644649848 = 2857618
//score % 10000 = 9999 {
//  bobux++
//}

function handleDanger(){
  if (frameCount % 30 === 0){
    spike = createSprite(width,ground.y+24)
    spike.velocityX = -15 - (score / 100)
    spike.lifetime = 300
    spike.addImage(spikeImg)
    spike.scale = 0.08
    spikeG.add(spike)
  }
  if (runman.isTouching(spikeG)){
    spikeG.destroyEach()
    score = 0
    coins.destroyEach()
    coins2.destroyEach()
    coins3.destroyEach()
  }

  if (frameCount % 60 === 10){
    coin = createSprite(width,runman.y);
    coin.addImage(coinImg)
    coin.scale = 0.03
    coin.velocityX = -15 - (score / 100)
    coins.add(coin)
  }
  if (frameCount % 60 === 30){
    coin2 = createSprite(width,runman.y);
    coin2.addImage(coinImg)
    coin2.scale = 0.03
    coin2.velocityX = -15 - (score / 100)
    coins2.add(coin2)
  }
  if (frameCount % 60 === 50){
    coin3 = createSprite(width,runman.y);
    coin3.addImage(coinImg)
    coin3.scale = 0.03
    coin3.velocityX = -15 - (score / 100)
    coins3.add(coin3)
  }
}
function music(){
//   wait.stop()
  play.loop()
}
