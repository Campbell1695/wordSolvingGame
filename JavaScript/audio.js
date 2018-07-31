var source = ["announcer_opening.wav","announcer_begin.wav","48 The King's Court.mp3"];
var song = new Audio();
var song2 = new Audio();
currentSong = 0;

audio = function()
{
  song.src = source[currentSong];
  song.play();

  song.onended = function()
  {
    document.getElementById("scroll_container").style.visibility = "hidden";
    currentSong++;

    song.src = source[currentSong];
    song.play();

    var interval = setInterval( "increment()", 1000);
    var time = setInterval("game.timer()", 1000);
  }
}

damage = function()
{
  song2.src = "laughter.wav";
  song2.play();
}
