
  var countDownDate = new Date().getTime() + 64000;


var game =
{
 timer : function()
 {
   var now = new Date().getTime();

   var distance = countDownDate - now;

   var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var secs = Math.floor((distance % (1000 * 60)) / 1000);

   if (mins >= 1)
   {
     document.getElementById("clock_time").innerHTML = mins + "m " + secs + "s ";
   }else if (secs <= 59 && secs >= 10)
   {
     document.getElementById("clock_time").innerHTML = secs + "s ";
   }else if (secs <= 9)
   {
     document.getElementById("clock_time").innerHTML = secs + "s ";
     document.getElementById("clock_time").style.left = "30px";
   }
   if (distance < 0)
   {
     document.getElementById("clock_over").innerHTML = "GameOver";
     document.getElementById("clock_time").style.visibility = "hidden";
     document.getElementById("clock_over").style.visibility = "visible";
     alert("your out of time! Your word was "+main.word+": loading a new word");
     window.location.reload();
   }
 }, chance_text : function()
 {
   document.getElementById("chance_results").style.visibility = "hidden";
 },chance_wait : function()
 {
   document.getElementById("chance").style.visibility = "visible";
 }, chance : function()
 {
   var x = Math.floor((Math.random() * 10) + 1);

   document.getElementById("chance").style.visibility = "hidden";

   setTimeout(game.chance_wait, 10000);

   if(x==1)
   {
     document.getElementById("chance_results").style.visibility = "visible";
     document.getElementById("chance_results").style.color = "green";
     document.getElementById("chance_results").innerHTML="+10";
     countDownDate = countDownDate + 10000;
     setTimeout(game.chance_text, 3000);

   }if(x==2)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "green";
    document.getElementById("chance_results").innerHTML="+7";
    countDownDate = countDownDate + 7000;
    setTimeout(game.chance_text, 3000);
   }
   if(x==3)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "green";
    document.getElementById("chance_results").innerHTML="+5";
    countDownDate = countDownDate + 5000;
    setTimeout(game.chance_text, 3000);
   }if(x==4)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "green";
    document.getElementById("chance_results").innerHTML="+3";
    countDownDate = countDownDate + 3000;
    setTimeout(game.chance_text, 3000);
   }
   if(x==5)
   {
     document.getElementById("chance_results").style.visibility = "visible";
     document.getElementById("chance_results").innerHTML="hint 1";
    // hint one set to visible
    setTimeout(game.chance_text, 3000);
   }if(x==6)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").innerHTML="hint 2";
   // hint two set to visible
   setTimeout(game.chance_text, 3000);
   }
   if(x==7)
   {
     document.getElementById("chance_results").style.visibility = "visible";
     document.getElementById("chance_results").innerHTML="Free Letter";
     // show one Letter
    // may require series of if/else statements
    setTimeout(game.chance_text, 3000);
   }if(x==8)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "red";
    document.getElementById("chance_results").innerHTML="-3";
    countDownDate = countDownDate - 3000;
    setTimeout(game.chance_text, 3000);
   }
   if(x==9)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "red";
    document.getElementById("chance_results").innerHTML="-5";
    countDownDate = countDownDate - 5000;
    setTimeout(game.chance_text, 3000);
   }if(x==10)
   {
    document.getElementById("chance_results").style.visibility = "visible";
    document.getElementById("chance_results").style.color = "red";
    document.getElementById("chance_results").innerHTML="-7";
    countDownDate = countDownDate - 7000;
    setTimeout(game.chance_text, 3000);
   }
 }
}
