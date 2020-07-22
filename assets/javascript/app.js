var card = $("#quiz-area");
var countStartNumber = 30;

var questions = [
  {
    question: "What is the name of Han Solo's ship?",
    answers: ["Starship Enterprise","Battle Star Galactica","Millenium Falcon","Star Destroyer",],
    correctAnswer: "Millenium Falcon",
    image: "assets/images/millenium.gif",
  },

  {
    question: "In the Star Wars film, what invisible power binds the galaxy together?",
    answers: ["Atoms","The Force","The Heart Shakra","The God Particle",],
    correctAnswer: "The Force",
    image: "assets/images/theForce.gif",
  },

  {
    question: "What color is Yoda's lightsaber?",
    answers: ["Red","Yellow","Blue","Green",],
    correctAnswer: "Green",
    image: "assets/images/green.gif",
  },

  {
    question: "Who is Darth Tyranus also known as?",
    answers: ["Senator Palpatine","Senator Valorum","Jar-Jar Binks","Count Dooku",],
    correctAnswer: "Count Dooku",
    image: "assets/images/countDooku.gif",
  },
  {
    question: "Which star of Revenge of the Sith is the real-life nephew of Denis Lawson who played Wedge in the first Star Wars Trilogy?",
    answers: ["Ewan McGregor","Jimmy Smits","Hayden Christensen","Christopher Lee",],
    correctAnswer: "Ewan McGregor",
    image: "assets/images/ewanMcGregor.gif",
  },
  {
    question: "What is the battle armor used by Boba Fett in the Star Wars?",
    answers: ["Mandalorian","Battle Star Galactica","X Wing","Death Star",],
    correctAnswer: "Mandalorian",
    image: "assets/images/mandalorian.gif",
  },
  {
    question: "What is the famous weapon used by Jedi Knights in the Star Wars series?",
    answers: ["Blasters","X-Wing Fighter","Katana","Light Saber",],
    correctAnswer: "Light Saber",
    image: "assets/images/lightSaber.gif",
  },
  {
    question: "Which Jedi Knight becomes Darth VAder in Star Wars?",
    answers: ["Count Dooku","Anakin Skywalker","Obi-Wan Kenobi","Senator Palpatine",],
    correctAnswer: "Anakin Skywalker",
    image: "assets/images/anakinSkywalker.gif",
  },
  {
    question: "Who is Luke Skywalker and Princess Leia Organa's mother?",
    answers: ["Senator Bail Organa","Queen Breha Organa","Padme Amidala","Yoda",],
    correctAnswer: "Padme Amidala",
    image: "assets/images/padmeAmidala.gif",
  },
  {
    question: "What were the last words spoken in The Empire Strikes Back?",
    answers: ["Glad that's over!","May the Force be with you.","Live long and prosper.","I'll be back.",],
    correctAnswer: "May the Force be with you.",
    image: "assets/images/mtfbwy.gif",
  }];

var timer;

var game = {
  questions: question,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

countdown: function() {
  this.counter--;
  $("#counter-number").text(this.counter);
  if (this.counter === 0) {
    console.log("TIME IS UP!");
    this.timeUP();
  }
},

loadQuestion: function() {

  timer = setInterval(this.countdown.bind(this), 1000);

  card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

  for (i = 0; i < questions[this.currentQuestion].answers.length; i++) {

  }
}
};