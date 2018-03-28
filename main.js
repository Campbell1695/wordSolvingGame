main = {};
main.wordArray = [];
main.wordUArray = [];


main.numInWordBank = words.length;

main.word = "test";
main.wordU = "";

//functions start There

main.pullword = function()
{
  main.word = words.List[(Math.floor(Math.random()*main.numInWordBank))];
}

main.setUnderline = function()
{
  main.pullword();
  for(i=0; i<main.word.length; i++)
  {
    main.wordArray[i] = main.word.charAt(i);
    main.wordUArray[i] = "_";
  }
  main.wordU = main.wordUArray.join("");
  document.getElementById("WORD").innerHTML = main.wordU;
}

main.updateLetter = function(letter)
{
  main.changes = 0;
  for(i = 0; i<main.word.length; i++){
    main.wordArray[i] = main.word.charAt(i)
    if(main.word.charAt(i) == letter){
      main.wordUArray[i] = letter;
    }
  }
  
  main.wordU = main.wordUArray.join("");
  document.getElementById("WORD").innerHTML = main.wordU;

  main.word1 = main.wordArray.join("");
  main.word2 = main.wordUArray.join("");

  if(main.word1 == main.word2){
    alert("you won: loading a new word");
    window.location.reload();
  }

  if(main.lives < 1){
    document.getElementById("WORD").innerHTML == main.word1;
    alert("you have run out of lives. Please try again");
    window.location.reload();
  }
}
main.pullword();
main.setUnderline();
