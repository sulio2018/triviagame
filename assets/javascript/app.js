//questions and answers array

var questionaire = [{
    question: "As of 2018, which national team has won the most World Cups?",
    answerList: ["France", "Brazil", "Germany", "Argentina", "Italy"],
    correctAnswer: "Brazil",
}, {
    question: "In the 1994 World Cup, a player was alledgedly murdered for scoring an own goal. Where was that player from?",
    answerList: ["Mexico", "Colombia", "Russia", "Bulgaria", "Nigeria"],
    correctAnswer: "Colombia",
}, {
    question: "Where was the first World Cup held?",
    answerList: ["England", "France", "Argentina", "Uruguay", "Brazil"],
    correctAnswer: "Uruguay",
}, {
    question: "In the 1986 World Cup, the Argentinian player, Diego Maradona scored one of the most infamous goals in World Cup history with his hand. That goal became known as?",
    answerList: ["The hand of God", "The black hand", "The soft hand", "The miracle", "The curse"],
    correctAnswer: "The hand of God",
}, {
    question: "In what US city was the final game of the 1994 World Cup played?",
    answerList: ["Dallas", "Boston", "San Francisco", "Miami", "Pasadena"],
    correctAnswer: "Pasadena",
}, {
    question: "Red and yellow cards were first introduced in which World Cup?",
    answerList: ["Uruguay 1930", "Brazil 1950", "England 1966", "Mexico 1970", "Spain 1982"],
    correctAnswer: "Mexico 1970",
}];

//set variables

var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


//on click function and start the game. remove button and instructions

$("#start").on("click", function () {

    $("#start").remove();
    $("#instructions").remove();

    $("#time").html("<h2>Time remaining: 30 seconds</h2>");

    //start timer
    run();

    //display questionaire

    for (var i = 0; i < questionaire.length; i++) {
        $(".questions-answers").append("<h3>" + questionaire[i].question + "</h3>");
        for (var j = 0; j < questionaire[i].answerList.length; j++) {
            $(".questions-answers").append("<input type='radio' name='radio-group" + i +
                "' value='" + questionaire[i].answerList[j] + "''>" + " " + questionaire[i].answerList[j]);
        }
    };

    $("#submit").html("<button id='done' class='btn'>Done</button>");

    $("#done").on("click", function () {

        //track score function
        score();

        //display result function
        displayResults();

    });

});

//set up run function

function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    number--;

    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>");

    if (number === 0) {

        stop();

        score();
        displayResults();

    }
}

//set up stop function

function stop() {

    clearInterval(intervalId);
}

//set up results page

function score() {

    $.each($("input[name='radio-group0']:checked"), function() {
        if ($(this).val() === questionaire[0].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });

    $.each($("input[name='radio-group1']:checked"), function() {
        if ($(this).val() === questionaire[1].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });

    $.each($("input[name='radio-group2']:checked"), function() {
        if ($(this).val() === questionaire[2].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });

    $.each($("input[name='radio-group3']:checked"), function() {
        if ($(this).val() === questionaire[3].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });

    $.each($("input[name='radio-group4']:checked"), function() {
        if ($(this).val() === questionaire[4].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });

    $.each($("input[name='radio-group5']:checked"), function() {
        if ($(this).val() === questionaire[5].correctAnswer) {
          correctAnswers++;
        }
        else {
          incorrectAnswers++;
        }
    });
}



function displayResults() {

    $("#time").remove();
    $(".questions-answers").remove();
    $("#submit").remove();

    $("#message").html("<h3>Your Results:</h3>");
    $("#correct").html("<h3>Correct Answers: " + correctAnswers + "</h3>");
    $("#incorrect").html("<h3>Incorrect Answers: " + incorrectAnswers + "</h4>");
    $("#unanswered").html("<h3>Unanswered: " + (questionaire.length - (this.incorrectAnswers + this.correctAnswers)) + "</h3>");

    $("#reload").html("<h3>Reload page to play again!</h3>");

}




