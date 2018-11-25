// add a button to start game 
// add timer 30 sec 
//  have pultiple choise questions come out and players could ony chose one 
// at the end add........ ALL Done! correct answers:   Incorrect Answers:  unansweard: 

var questionsArray = [
    { q: "Which of these last names does Leia NOT have a family connection to?", a: 0, c: ["Fett", "Amidala", "Skywalker", "Organa"] },
    { q: "What color lasers do Tie Fighters shoot?", a: 3, c: ['Red', 'Blue', "Orange", "Green"] },
    { q: "How old was Yoda when he Passed?", a: 0, c: ["900", "800", "700", "1,000"] },
    { q: "How old was Padme when she became Queen?", a: 0, c: ["14", "16", "12", "21"] },
    { q: "What color Lasers do X-Wings Shoot?", a: 2, c: ["Green", "Orange", "Red", "Blue"] },
    { q: "Han Solo Obtain what rank during the Galactic Cival War?", a: 1, c: ["Commander", "General", "Admiral", "Captin"] },
    { q: "Who played Princess Leia?", a: 3, c: ["Jessica Alba", "Linda Hammilton", "Sigourney Weaver", "Carrie Fisher"] },
    { q: "On which planet do we first meet Rey in The Force Awakens?", a: 0, c: ["Jakku", "Tatooine", "Dantooine", "Farax"] }

];
var question = 0;
var countDown = 30;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var userPick;
var gameQa = question
var counterFunction;
var counterDisplay = $('#counter');
var startButton = $('#startButton');
var countPlacement = $('#count-placement');
var questionPlacement = $('#question-placement');


startButton.click(function (event) {
    $(this).toggle();
    countPlacement.toggle();
    counterFunction = setInterval(decrement, 1000);
    gameQuestions();
});

function run() {
}

function decrement() {
    countDown--;
    counterDisplay.html(countDown + " Seconds");
    if (countDown === 0) {
        stop();
    };
};

function gameQuestions() {
    $.each(questionsArray, function (i, currentQuestion) {
        displayQuestion(currentQuestion, i);
    });
}

function displayQuestion(question, i) {
    var formatQuestion = '<div class="questioncontainer"><p class="question" id="q' + i + ' " >' + question.q + '</p>';
    $.each(question.c, function(y, choice) {
        formatQuestion += '<input type="radio" class="choice" id="q'+ i +'" name="'+i+'" value="'+y+'"> ' + choice + '<br> ';
    })
    formatQuestion += '</div><br><hr>'
    questionPlacement.append(formatQuestion);
}

function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");

    //  The following line will play the audio file we linked to above:
    audio.play();
}



function stop() {
    clearInterval(counterFunction);
};





$(function () {
    //  Execute the run function.
    run();
});

