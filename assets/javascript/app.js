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
var countDown = 31;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var userPick;
var gameQa = question
var counterFunction;
var userScore = 0;
var counterDisplay = $('#counter');
var startButton = $('#startButton');
var countPlacement = $('#count-placement');
var questionPlacement = $('#question-placement');
var userScoreElement = $('#userscore');


startButton.click(function (event) {
    $(this).toggle();
    countPlacement.toggle();
    counterFunction = setInterval(decrement, 1000);
    gameQuestions();
});

function decrement() {
    countDown--;
    counterDisplay.html(countDown + " Seconds");
    if (countDown === 0 || isUserDone()) {
        stop();
        questionPlacement.toggle();
        counterDisplay.toggle();
        countPlacement.toggle();
        checkUserAnswers();
        scoreBoared();
    };
};

function scoreBoared() {
    var scoreToShow = userScore + " points!!";
    if (userScore == 1) {
        scoreToShow = userScore + " point!!";
    }
    userScoreElement.append(scoreToShow);
    userScoreElement.toggle("slow");
}

function gameQuestions() {
    $.each(questionsArray, function (i, currentQuestion) {
        displayQuestion(currentQuestion, i);
    });
}

function checkUserAnswers() {
    $.each(questionsArray, function (i, question) {
        var userValue = $('input[name=' + i + ']:checked').val();
        if (userValue == question.a) {
            userScore++;
        }
    })
}

function displayQuestion(question, i) {
    var formatQuestion = '<div class="questioncontainer"><p class="question" id="q' + i + ' " >' + question.q + '</p>';
    $.each(question.c, function (y, choice) {
        formatQuestion += '<input type="radio" class="choice" id="q' + i + '" name="' + i + '" value="' + y + '"> ' + choice + '<br> ';
    })
    formatQuestion += '</div><br><hr>'
    questionPlacement.append(formatQuestion);
}

function isUserDone() {
    var questionsCount = questionsArray.length;
    var answeredQuestions = 0;
    $.each(questionsArray, function (i, question) {
        if ($('input[name=' + i + ']:checked').val()) {
            answeredQuestions++;
        }
    })
    if (answeredQuestions == questionsCount) {
        return true;
    }
    return false;
}

function stop() {
    clearInterval(counterFunction);
};
