const box1 = document.getElementById('Box-1');
const box2 = document.getElementById('Box-2');
const box3 = document.getElementById('Box-3');
const box4 = document.getElementById('Box-4');
const box5 = document.getElementById('Box-5');
const box6 = document.getElementById('Box-6');
const box7 = document.getElementById('Box-7');
const box8 = document.getElementById('Box-8');
const box9 = document.getElementById('Box-9');

const line1 = document.getElementById('line1').style;
const line2 = document.getElementById('line2').style;
const line3 = document.getElementById('line3').style;
const line4 = document.getElementById('line4').style;
const line5 = document.getElementById('line5').style;
const line6 = document.getElementById('line6').style;
const line7 = document.getElementById('line7').style;
const line8 = document.getElementById('line8').style;

let game_played = document.getElementById('Games-Played');
let score_bar = document.getElementsByClassName('Score--Bar');

let USER = document.getElementById('user');
let COMP = document.getElementById('comp');

let restart = document.getElementById('Restart');
let result = document.getElementById('result');

console.log(restart.innerHTML)

let MatchCompleted = false;

let nog = 0;
let user_turn = true;
let comp_turn = true;

let comp = 0;
let user = 0;

var num;

function box_1() {
    if (user_turn) {
        if (box1.innerHTML != "X" &&
            box1.innerHTML != "O") {
            user_turn = false;
            box1.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_2() {
    if (user_turn) {
        if (box2.innerHTML != "X" &&
            box2.innerHTML != "O") {
            user_turn = false;
            box2.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_3() {
    if (user_turn) {
        if (box3.innerHTML != "X" &&
            box3.innerHTML != "O") {
            user_turn = false;
            box3.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_4() {
    if (user_turn) {
        if (box4.innerHTML != "X" &&
            box4.innerHTML != "O") {
            user_turn = false;
            box4.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_5() {
    if (user_turn) {
        if (box5.innerHTML != "X" &&
            box5.innerHTML != "O") {
            user_turn = false;
            box5.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_6() {
    if (user_turn) {
        if (box6.innerHTML != "X" &&
            box6.innerHTML != "O") {
            user_turn = false;
            box6.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_7() {
    if (user_turn) {
        if (box7.innerHTML != "X" &&
            box7.innerHTML != "O") {
            user_turn = false;
            box7.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_8() {
    if (user_turn) {
        if (box8.innerHTML != "X" &&
            box8.innerHTML != "O") {
            user_turn = false;
            box8.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function box_9() {
    if (user_turn) {
        if (box9.innerHTML != "X" &&
            box9.innerHTML != "O") {
            user_turn = false;
            box9.innerHTML = "X";
            checkMatch();
            computer_go();
        }
    }
}

function computer_go() {
    var num = Math.floor(Math.random() * 9) + 1
    if (comp_turn) {
        if (num === 1) {
            if (box1.innerHTML != "X" && box1.innerHTML != "O") {
                box1.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 2) {
            if (box2.innerHTML != "X" &&
                box2.innerHTML != "O") {
                box2.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 3) {
            if (box3.innerHTML != "X" &&
                box3.innerHTML != "O") {
                box3.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 4) {
            if (box4.innerHTML != "X" &&
                box4.innerHTML != "O") {
                box4.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 5) {
            if (box5.innerHTML != "X" &&
                box5.innerHTML != "O") {
                box5.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 6) {
            if (box6.innerHTML != "X" &&
                box6.innerHTML != "O") {
                box6.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 7) {
            if (box7.innerHTML != "X" &&
                box7.innerHTML != "O") {
                box7.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 8) {
            if (box8.innerHTML != "X" &&
                box8.innerHTML != "O") {
                box8.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
        if (num === 9) {
            if (box9.innerHTML != "X" &&
                box9.innerHTML != "O") {
                box9.innerHTML = "O"
                user_turn = true;
                checkMatch();
            } else {
                if (box1.innerHTML.length == 1 &&
                    box2.innerHTML.length == 1 &&
                    box3.innerHTML.length == 1 &&
                    box4.innerHTML.length == 1 &&
                    box5.innerHTML.length == 1 &&
                    box6.innerHTML.length == 1 &&
                    box7.innerHTML.length == 1 &&
                    box8.innerHTML.length == 1 &&
                    box9.innerHTML.length == 1) {} else {
                    computer_go();
                }
            }
        }
    }
}



function checkMatch() {
    if (box1.innerHTML.length == 1 &&
        box2.innerHTML.length == 1 &&
        box3.innerHTML.length == 1 &&
        box4.innerHTML.length == 1 &&
        box5.innerHTML.length == 1 &&
        box6.innerHTML.length == 1 &&
        box7.innerHTML.length == 1 &&
        box8.innerHTML.length == 1 &&
        box9.innerHTML.length == 1) {
        //Horizontal lines
        if (box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line1.display = "flex";
            line1.animation = "draw_line 3s";
            match_completed();
        } else if (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line2.display = "flex";
            line2.animation = "draw_line 3s";
            match_completed();
        } else if (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line3.display = "flex";
            line3.animation = "draw_line 3s";
            match_completed();
        }

        //vertical lines
        else if (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line4.display = "flex";
            line4.animation = "draw_line 3s";
            match_completed();
        } else if (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line5.display = "flex";
            line5.animation = "draw_line 3s";
            match_completed();
        } else if (box9.innerHTML == "X" && box6.innerHTML == "X" && box3.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line6.display = "flex";
            line6.animation = "draw_line 3s";
            match_completed();
        }
        //Diagonal Lines
        else if (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line7.display = "flex";
            line7.animation = "draw_line 3s";
            match_completed();
        } else if (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X") {
            user += 1;
            result.innerHTML = "User won the game";
            line8.display = "flex";
            line8.animation = "draw_line 3s";
            match_completed();
        }

        //Checks O wins
        else if (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line1.display = "flex";
            line1.animation = "draw_line 3s";
            match_completed();
        } else if (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line2.display = "flex";
            line2.animation = "draw_line 3s";
            match_completed();
        } else if (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line3.display = "flex";
            line3.animation = "draw_line 3s";
            match_completed();
        }

        //vertical lines
        else if (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line4.display = "flex";
            line4.animation = "draw_line 3s";
            match_completed();
        } else if (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line5.display = "flex";
            line5.animation = "draw_line 3s";
            match_completed();
        } else if (box9.innerHTML == "O" && box6.innerHTML == "O" && box3.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line6.display = "flex";
            line6.animation = "draw_line 3s";
            match_completed();
        }
        //Diagonal Lines
        else if (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line7.display = "flex";
            line7.animation = "draw_line 3s";
            match_completed();
        } else if (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O") {
            comp += 1;
            result.innerHTML = "Computer won the game";
            line8.display = "flex";
            line8.animation = "draw_line 3s";
            match_completed();
        } else {
            result.innerHTML = "Draw : )"
            match_completed();
        }
    }
    //Horizontal lines
    else if (box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line1.display = "flex";
        line1.animation = "draw_line 3s";
        match_completed();
    } else if (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line2.display = "flex";
        line2.animation = "draw_line 3s";
        match_completed();
    } else if (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line3.display = "flex";
        line3.animation = "draw_line 3s";
        match_completed();
    }

    //vertical lines
    else if (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line4.display = "flex";
        line4.animation = "draw_line 3s";
        match_completed();
    } else if (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line5.display = "flex";
        line5.animation = "draw_line 3s";
        match_completed();
    } else if (box9.innerHTML == "X" && box6.innerHTML == "X" && box3.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line6.display = "flex";
        line6.animation = "draw_line 3s";
        match_completed();
    }
    //Diagonal Lines
    else if (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line7.display = "flex";
        line7.animation = "draw_line 3s";
        match_completed();
    } else if (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X") {
        user += 1;
        result.innerHTML = "User won the game";
        line8.display = "flex";
        line8.animation = "draw_line 3s";
        match_completed();
    }

    //Checks O wins
    else if (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line1.display = "flex";
        line1.animation = "draw_line 3s";
        match_completed();
    } else if (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line2.display = "flex";
        line2.animation = "draw_line 3s";
        match_completed();
    } else if (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line3.display = "flex";
        line3.animation = "draw_line 3s";
        match_completed();
    }

    //vertical lines
    else if (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line4.display = "flex";
        line4.animation = "draw_line 3s";
        match_completed();
    } else if (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line5.display = "flex";
        line5.animation = "draw_line 3s";
        match_completed();
    } else if (box9.innerHTML == "O" && box6.innerHTML == "O" && box3.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line6.display = "flex";
        line6.animation = "draw_line 3s";
        match_completed();
    }
    //Diagonal Lines
    else if (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line7.display = "flex";
        line7.animation = "draw_line 3s";
        match_completed();
    } else if (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O") {
        comp += 1;
        result.innerHTML = "Computer won the game";
        line8.display = "flex";
        line8.animation = "draw_line 3s";
        match_completed();
    }
}

function match_completed() {
    comp_turn = false;

    nog += 1;

    game_played.innerHTML = nog;

    USER.innerHTML = user;
    COMP.innerHTML = comp;

    MatchCompleted = true;

    result.style.display = "block";
    result.style.animation = "display_result 1s";
    restart.style.display = "flex";
}

function Restart() {
    if (MatchCompleted) {
        box1.innerHTML = "";
        box2.innerHTML = "";
        box3.innerHTML = "";
        box4.innerHTML = "";
        box5.innerHTML = "";
        box6.innerHTML = "";
        box7.innerHTML = "";
        box8.innerHTML = "";
        box9.innerHTML = "";

        line1.display = "none";
        line2.display = "none";
        line3.display = "none";
        line4.display = "none";
        line5.display = "none";
        line6.display = "none";
        line7.display = "none";
        line8.display = "none";

        line1.animation = "";
        line2.animation = "";
        line3.animation = "";
        line4.animation = "";
        line5.animation = "";
        line6.animation = "";
        line7.animation = "";
        line8.animation = "";

        user_turn = true;
        comp_turn = true;

        MatchCompleted = false;
        result.style.display = "none";
        restart.style.display = "none";
    }
}