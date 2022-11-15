var readlineSync = require("readline-sync");

var dhanrashi = 0;

var questions1 = [{
  question : "What is the capital of India?",
  answer: "Delhi"
},{
  question : "What is the old capital of India?",
  answer: "Calcutta"
},{
  question : "Which city is known as Silicon valley Of India?",
  answer: "Bangalore"
}];

var questions2 = [{
  question : "MS dhoni plays which sports?",
  answer: "cricket"
},{
  question : "Who is the prime minister of India?",
  answer: "Narendra Modi"
},{
  question : "Which city is known as Pink City Of India?",
  answer: "Jaipur"
}];

function swagat(){
  var username = readlineSync.question('Apka Nam Batayeiga ');
  console.log('Aaj hamare sath  ' + username + ' Ji virajman hai Hotseat par');
}

function play(question, answer){
  var useranswer = readlineSync.question(question);
  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    console.log('sahi jawaaab!')
    dhanrashi = dhanrashi + 1000;
    console.log("abhi aap jeet chuke hai : ", dhanrashi)
  }
  else{
    console.log('maaf kijiye ga ye galat jawaab hai!')
    dhanrashi = dhanrashi - 1000;
  }
}


  function game(){
    for (var i=0; i<questions1.length; i++) {
      var sawal = questions1[i];
      play(sawal.question, sawal.answer)  
    }
  }
  

function game2(){
    for (var j=0; j<questions2.length; j++) {
      var sawal = questions2[j];
      play(sawal.question, sawal.answer)  
    }
  }




swagat();
game();



if(dhanrashi === 3000){
  console.log('Adbhut, Aap Jeet chuke hai ' + dhanrashi)
  console.log('Ab aap ke saamne agla padav aata hua')
  game2();
}
else{
  if(dhanrashi >= 4000){
  console.log('aaj aap jo rakam ghar le kar jaa rahi hai vo hai ', dhanrashi)
  }
}

