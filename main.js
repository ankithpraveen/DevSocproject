var score = 0;
var index = 0;


function checkans(choice) {
    console.log(questions[index][2]);
    console.log(choice);
    if (questions[index][2] === choice) {
        score++;
    }
    index++;
    console.log(score);
}

function addhtml(id, html) {
    var elem = document.getElementById(id);
    elem.innerHTML = html;
}

function totscore() {
    console.log(sessionStorage.getItem("score"));
    console.log(sessionStorage.getItem("totques"));
    var ansdiv = document.getElementById("answers");
    for (var i = 0; i < sessionStorage.getItem("totques"); i++) {
        ansdiv.innerHTML += "<h5>Q. " + sessionStorage.getItem("ques" + i) + "<br>A. " + sessionStorage.getItem("ans" + i);
        console.log(sessionStorage.getItem("ques" + i));
        console.log(sessionStorage.getItem("ans" + i));
    }
    var pc=(sessionStorage.getItem("score") * 100 / sessionStorage.getItem("totques"));
    if (pc > 80) {
        var img = "https://i.imgflip.com/4/2x75fl.jpg";
    }
    else if (pc>60)
    {
        var img="https://i.ytimg.com/vi/fHS8tHKlgw4/mqdefault.jpg"
    }
    else if (pc>40)
    {
        var img="https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png"
    }
    else if (pc>30)
    {
        var img="https://i.kym-cdn.com/entries/icons/original/000/017/039/pressf.jpg"
    }
    else
    {
        var img="https://i.pinimg.com/originals/15/74/ac/1574ac1ef7a84a4bd69e83308a48e783.jpg"
    }
    addhtml("finalres", "<i class=\"material-icons large cyan-text\">thumb_up</i><br><h4>Final Result</h4><h2> Your score is: " + (sessionStorage.getItem("score") * 100 / sessionStorage.getItem("totques")) + "%</h2><br><img src=\"" + img + "\"><\img>");
}

function nextques() {

    if (index >= questions.length) {
        window.location.replace("result.html");
        sessionStorage.setItem("score", score);
        sessionStorage.setItem("totques", questions.length);
        for (var i = 0; i <= questions.length; i++) {
            sessionStorage.setItem("ques" + i, questions[i][0]);
            sessionStorage.setItem("ans" + i, questions[i][2]);
        }
    }
    else {
        addhtml("question", questions[index][0])
        for (var i = 0; i <= questions[1].length; i++) {
            addhtml("choice" + i, questions[index][1][i]);
            checkguess("guess" + i, questions[index][1][i]);
        }

    }

}

function checkguess(id, guess) {
    document.getElementById(id).onclick = function () {
        checkans(guess);
        nextques();
    }
}

var questions = [
    ["Who was the first President of the United States?", ["George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know"], "George Washington"],
    ["What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi", "42", "Wah?", "I don't know"], "42"],
    ["Do you love to code?", ["No", "Yes", "Hell Yeah", "Maybe"], "Hell Yeah"],
    ["What's the best programming language?", ["Javascript", "C#", "Php", "Python"], "Javascript"],
];

nextques();