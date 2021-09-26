p1name = localStorage.getItem("player1name")
p2name = localStorage.getItem("player2name")

p1score = 0
p2score = 0

Q_turn = "p1"
A_turn = "p2"

document.getElementById("p1name").innerHTML = p1name + ":"
document.getElementById("p2name").innerHTML = p2name + ":"

document.getElementById("p1score").innerHTML = p1score
document.getElementById("p2score").innerHTML = p2score

document.getElementById("player_question").innerHTML = "Question Turn :" + p1name
document.getElementById("player_answer").innerHTML = "Answer Turn :" + p2name


function Send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input + check_button;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML = row;
}

question_turn = "player1";
answer_turn = "player1";

function Check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {

        if (answer_turn == "player1") {

            update_player1_score = player1_score = 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else {
            update_player2_score = player2_score = 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
}

if (question_turn == "player1") {

    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - "+player2_name
}
else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - "+player_name
}