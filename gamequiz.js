var p1name = localStorage.getItem("player1");
var p2name = localStorage.getItem("player2");

var p1score = 0;
var p2score = 0;

function send() {

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number= "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""

}

var q_turn = "player1";
var a_turn = "player2";

function check() {

    getanswer= document.getElementById("input_check_box").value;

    if (getanswer == actual_answer) {

        if (a_turn=="player1") {
            updateplayer1score= p1score + 1;
            document.getElementById("player1score").innerHTML = p1name + ":" + updateplayer1score;
        }

        else {
            if (a_turn=="player2") {
                updateplayer2score= p2score + 2;
                document.getElementById("player1score").innerHTML = p2name + ":" + updateplayer2score;
            }
        }
    }
    
    if (q_turn == "player1") {
        q_turn = "player2";
        document.getElementById("q_turn").innerHTML = "Question Turn-" + p2name;
    }

    else {
        q_turn = "player1";
        document.getElementById("q_turn").innerHTML = "Question Turn-" + p1name;
    }

    if (a_turn == "player1") {
        a_turn = "player2";
        document.getElementById("a_turn").innerHTML = "Answer Turn-" + p2name;
    }

    else {
        a_turn = "player1";
        document.getElementById("a_turn").innerHTML = "Answer Turn-" + p1name;
    }
    document.getElementById("output").innerHTML="";

    
}