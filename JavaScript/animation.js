var x = setInterval(animate,200);

function animate()
{
  var left_line = Math.floor((Math.random()*90)+10);
  left_line = left_line +"%";
  var opacity_line = Math.floor((Math.random()*5)+1);
  opacity_line = opacity_line/10;

  var left_line2 = Math.floor((Math.random()*90)+10);
  left_line2 = left_line2 +"%";
  var opacity_line2 = Math.floor((Math.random()*5)+1);
  opacity_line2 = opacity_line2/10;

  var top_splat = Math.floor((Math.random()*75)+10);
  top_splat = top_splat +"%";
  var left_splat = Math.floor((Math.random()*85)+10);
  left_splat = left_splat +"%";

  var top_splat2 = Math.floor((Math.random()*75)+10);
  top_splat2 = top_splat2 +"%";
  var left_splat2 = Math.floor((Math.random()*85)+10);
  left_splat2 = left_splat2 +"%";

  var top_splat3 = Math.floor((Math.random()*75)+10);
  top_splat3 = top_splat3 +"%";
  var left_splat3 = Math.floor((Math.random()*85)+10);
  left_splat3 = left_splat3 +"%";

  var top_stroke = Math.floor((Math.random()*75)+10);
  top_stroke = top_stroke +"%";
  var left_stroke = Math.floor((Math.random()*85)+10);
  left_stroke = left_stroke +"%";

  var top_stroke2 = Math.floor((Math.random()*75)+10);
  top_stroke2 = top_stroke2 +"%";
  var left_stroke2 = Math.floor((Math.random()*85)+10);
  left_stroke2 = left_stroke2 +"%";

  document.getElementById("line_static").style.left = left_line;
  document.getElementById("line_static").style.opacity = opacity_line;

  document.getElementById("line_static2").style.left = left_line2;
  document.getElementById("line_static2").style.opacity = opacity_line2;

  document.getElementById("splat").style.top = top_splat;
  document.getElementById("splat").style.left = left_splat;

  document.getElementById("splat2").style.top = top_splat2;
  document.getElementById("splat2").style.left = left_splat2;

  document.getElementById("splat3").style.top = top_splat3;
  document.getElementById("splat3").style.left = left_splat3;

  document.getElementById("stroke").style.top = top_stroke;
  document.getElementById("stroke").style.left = left_stroke;

  document.getElementById("stroke2").style.top = top_stroke2;
  document.getElementById("stroke2").style.left = left_stroke2;
}
