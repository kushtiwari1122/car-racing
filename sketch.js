var form, player, game;
var gameState=0;
var playerCount;
var database;
var backgroundImg;
var allPlayers
var car1,car2,car3,car4,cars

var car1Img,car2Img,car3Img,car4Img,trackImg
function preload(){
car1Img=loadImage("images/car1.png")
car2Img=loadImage("images/car2.png")
car3Img=loadImage("images/car3.png")
car4Img=loadImage("images/car4.png")
trackImg=loadImage("images/track.jpg")

}
function setup()
{
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}
function draw()
{
// check if the player count is 4, then update the game state to 1, and if game state is 1 start playing the game
if(playerCount===4){
game.update(1)
}



if(gameState===1){
  clear()
game.play()


}
}