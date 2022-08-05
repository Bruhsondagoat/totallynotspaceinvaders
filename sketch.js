let myXPos = 250;
let myYPos = 700;
let bulletX = 250;
let bulletY = 700;
let enemyXPos = 250;
let enemyYPos = 40;
let direction = 1;
let bulletDirection = 1;
let enemyYBullet = 40;
let enemyXBullet = 250;
let gameOver = false

function setup() {
    createCanvas(500, 750);
    noStroke();
    rectMode(CENTER);
 }

 function start() {
   background(0);
    if (keyPressed == ENTER){
    draw();
 }
}

 function draw() {
   game();

   enemy();
   keyPressed();
   flying();
   myHitBox();
   enemyHitBox();
   theEnd();
}


function game(){
background(0);
    fill(0, 255, 0);
    rect(bulletX, bulletY, 6, 14);

    fill(255, 0, 0);
    rect(myXPos, myYPos, 40, 40);

    if (keyIsDown(LEFT_ARROW)) {
        myXPos -=3;
        if (bulletY == 700) {
         bulletX -=3;
       }
 }
 if (keyIsDown(RIGHT_ARROW)) {
    myXPos +=3;
    if (bulletY == 700) {
      bulletX +=3;
    }
    }
if (myXPos < 20) {
   myXPos = 21;
   bulletX = 21;
 }
 if (myXPos > 480) {
    myXPos = 479;
    bulletX = 479;
 }

 fill(255, 164, 0)
 rect(enemyXBullet, enemyYBullet, 10, 22)
 fill(0, 0, 255)
 rect(enemyXPos, enemyYPos, 34, 34)

 if (enemyXPos > 476) {
   enemyXPos = 475;
 }
 if (enemyXPos < 24){
   enemyXPos = 25;
 }

 let speed = random([6, 10])
 enemyXPos += speed * direction;
enemyXBullet += speed * bulletDirection;

 if (enemyXPos > 476 || enemyXPos < 24 ){
   direction *= -1;
   bulletDirection *= -1;
}

if (bulletY < -8) {
   bulletY = myYPos;
   bulletX = myXPos;
}
}

function flying() {
   if (bulletY < 700) {
      bulletY -=8;
   }
}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      bulletY -= 1;
}
}

function enemy(){
   if (enemyYBullet > 40) {
      bulletDirection *= 0;
   }
   
   if (enemyYBullet > 800) {
      enemyYBullet = 40;
      enemyXBullet = enemyXPos;
   }
   enemyYBullet += 1;

   if (enemyYBullet > 40) {
      enemyYBullet +=9;
   }
}

function myHitBox() {
myLeft = myXPos - 20;
myRight = myXPos + 20;
myTop = myYPos - 20;
myBottom = myYPos + 20;

bulletLeft = enemyXBullet - 5;
bulletRight = enemyXBullet + 5;
bulletTop = enemyYBullet - 11;
bulletBottom = enemyYBullet + 11;

if (myLeft > bulletRight || myRight < bulletLeft || myTop > bulletBottom || myBottom < bulletTop) {

}

else {
   background(0)

    fill(255, 255, 255);
    textSize(100);
    text("L", 250, 350);
    gameOver = true
   }
}

function enemyHitBox() {
   myBulletLeft = bulletX - 3;
   myBulletRight = bulletX + 3;
   myBulletTop = bulletY - 7;
   myBulletBottom = bulletY + 7;
   
   enemyLeft = enemyXPos - 17;
   enemyRight = enemyXPos + 17;
   enemyTop = enemyYPos - 17;
   enemyBottom = enemyYPos + 17;
   
   if (myBulletLeft > enemyRight || myBulletRight < enemyLeft || myBulletTop > enemyBottom || myBulletBottom < enemyTop) {
   
   }
   
   else {
      background(0)
   
       fill(255, 255, 255);
       textSize(80);
       text("You won!", 100, 350);
       gameOver = true
      }
 }

function theEnd() {
   if (gameOver == true)
   noLoop();
}
