//set variables

var number = 30;

var intervalId; 

var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var unansweredCounter = 0;

//questions and answers array

var questionaire =  [{
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

//on click function and start the game

$("#start").on("click", function() {

    $("#start").remove();

    $("#time").html("<h2>Time remaining: 30 seconds</h2>");

    //display questionaire

    for (var i = 0; i < questionaire.length; i++) {
        $(".questions-answers").append("<h3>" + questionaire[i].question + "</h3>");
        for (var j = 0; j < questionaire[i].answerList.length; j++) {
          $(".questions-answers").append("<input type='radio' name='question-'" + i +
          "'value='" + questionaire[i].answerList[j] + "''>" + " " + questionaire[i].answerList[j]);
        }
    };

    $("#submit").html("<button id='done' class='btn'>Done</button>");




})