var player1= {}
var player2={}
 function player {
   this.roll= 0;
   this.turnscore= 0;
   this.totalscore=0;
 }
 player.prototype.turn= function(){
   this.totalscore+=this.turnscore;
   alert("next please");
 }
 player.prototype.checkrule function(){
   if (this.roll===1){
     this.turnscore=0;
     (alert ("sorry you lost it all"))
   }
   else {this.turnscore+=this.roll;
   }
 };
 player.prototype.win= function(){
  if (totalscore>=100)
   alert ("we have a winner")
 }
 var calc=function(){
   return Math.floor((Math.random()*6)+1)
 }

 //USER LOGIC

 $ (document).ready(function(){
      event.preventDefault();
   var player1input= $(input#play1).val();
   var player2input= $(input#play2).val();
   $("#player1".text(player1input);
   $("#player2".text(player2input);
   event.preventDefault();

player1.roll= rollvalue();
$("#sroll1")
 $(button#rollone).click(function(event)
{
  event.preventDefault();
  player1.rollone= rollValue();
  $("roll1").text (player1.rollone);
  $("roll1").text (player1.rollone);
  player1.check1();

})
$(button#rolltwo).click(function(event)
{
  event.preventDefault();
  player2.rollone= rollValue();
  $("roll1").text (player1.rollone);
  $("roll1").text (player1.rollone);
  player1.check1();

})
$(button#roll1).click(function(event)
{
  event.preventDefault();
  player1.hold();
  player1.win();
  $(#stotal1).text(player1.totalscore);
})
$(button#hold1).click(function(event)
{
 event.preventDefault();

})
$(button#hold2).click(function(event)
{
 event.preventDefault();
player2.hold();
player2.win();
$(#stotal2).text(player2.totalscore);

})
