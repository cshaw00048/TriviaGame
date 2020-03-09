var score = 0;
var currentQuestion = 0;
var questions = [ {
    title: "Question 1",
    answers: ['a', 'b', 'c', 'd'],
    correct: 0
},

{   title: "Question 2",
    answers: ['a', 'b', 'c', 'd'],
    correct: 3
},

{   title: "Question 3",
    answers: ['a', 'b', 'c', 'd'],
    correct: 1
},

{   title: "Question 4",
    answers: ['a', 'b', 'c', 'd'],
    correct: 2
},

{   title: "Question 5",
    answers: ['a', 'b', 'c', 'd'],
    correct: 3
},

{   title: "Question 6",
    answers: ['a', 'b', 'c', 'd'],
    correct: 2
},

{   title: "Question 7",
    answers: ['a', 'b', 'c', 'd'],
    correct: 0
},

{   title: "Question 8",
    answers: ['a', 'b', 'c', 'd'],
    correct: 1
},

{   title: "Question 9",
    answers: ['a', 'b', 'c', 'd'],
    correct: 3
},

{   title: "Question 10",
    answers: ['a', 'b', 'c', 'd'],
    correct: 2
}
];

$document.ready(function(){
    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
    });

});

function startQuiz(){

}

function showQuestion(){

}

function checkAnswer() {

}

function showSummary() {

}
