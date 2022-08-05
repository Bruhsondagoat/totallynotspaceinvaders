let bulletImg 
let shipImg
let bulletX, bulletY, bulletX_change, bulletY_change, bullet_state
let spaceY, spaceX


let myLeft, myRight, myTop, myBottom;

let myXPos = 250
let myYPos = 700
function preload() {
    bulletImg = loadImage("bullet.png");
    shipImg = loadImage("spaceship.png")

}

function setup() {
    createCanvas(500, 750);
    noStroke();
  
    rectMode(CENTER);
 }
  
 function draw() {
    background(0);

    fill(255, 0, 0)
    rect(myXPos, myYPos, 40, 40)

    if (keyIsDown(LEFT_ARROW)) {
        myXPos -=3
 }

 if (keyIsDown(RIGHT_ARROW)) {
    myXPos +=3

}


 if (myXPos < 20) {Z
    myXPos = 21
 }
 if (myXPos > 480) {
    myXPos = 480
 }

 if (keyIsDown(UP_ARROW)) {


spaceX = myXPos
spaceY = myYPos

bulletX = myXPos
bulletY = myYPos




}

spaceX += 5
spaceY -= 5
image(shipImg, spaceX, spaceY, 40,40)


bulletY -= 20
image(bulletImg, bulletX, bulletY, 15,15)


    }
//console.log(Bullet()) 
//function Bullet() {
    // Ready - You can't see the bullet on the screen
    // Fire - The bullet is currently moving
  //  bulletImg = image.load('bullet.png')
    //bulletX = 
//     bulletY = 480
//     bulletX_change = 0
//     bulletY_change = 10
//     bullet_state = "ready"



//  }
 
