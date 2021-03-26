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

    var ansdiv = document.getElementById("answers");
    for (var i = 0; i < sessionStorage.getItem("totques"); i++) {
        ansdiv.innerHTML += "<h5>Q. " + sessionStorage.getItem("ques" + i) + "<br>A. " + sessionStorage.getItem("ans" + i);

    }
    var pc = (sessionStorage.getItem("score") * 100 / sessionStorage.getItem("totques"));
    if (pc==100)
    {
        var img = "https://i.imgflip.com/4/2x75fl.jpg";
    }
    if (pc >= 80) 
    {
        var img = "data:image/jpeg;base64,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";
    }
    else if (pc >= 60) {
        var img = "https://i.ytimg.com/vi/fHS8tHKlgw4/mqdefault.jpg";
    }
    else if (pc >= 40) {
        var img = "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png";
    }
    else if (pc >= 20) {
        var img = "https://i.kym-cdn.com/entries/icons/original/000/017/039/pressf.jpg";
    }
    else {
        var img = "https://i.pinimg.com/originals/15/74/ac/1574ac1ef7a84a4bd69e83308a48e783.jpg";
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
    ["In which English county would you find Stonehenge?", ["Worcestershire", "Wiltshire", "Barbados", "Essex"], "Wiltshire"],
    ["What is the study of dogs called?", ["Cynology", "Caninology", "Coniology", "Tykology"], "Cynology"],
    ["What is Lightning McQueen's number in Cars?", ["57", "69", "95", "420"], "95"],
    ["What is Anitidaephobia?", ["The fear that somewhere, somehow, a duck is watching you", "The fear of houses", "The persistent, abnormal and unwarranted fear of bathing, washing or cleaning", "The fear of peanut butter sticking to the roof of your mouth"], "The fear that somewhere, somehow, a duck is watching you"],
    ["What is Baby Yoda's name?", ["The Child", "Yoda", "Grogu", "Yaddle"], "Grogu"],
    ["What is three strikes in bowling called?", ["Bagger", "Turkey", "Eagle", "Dimple"], "Turkey"],
    ["Who voices Maui in Moana?", ["Dwayne Johnson", "Vin Diesel", "Zac Efron", "Chadwick Boseman"], "Dwayne Johnson"],
    ["What is the turtle's name in Finding Nemo?", ["Coral", "Bruce", "Chum", "Crush"], "Crush"],
    ["How many eyelids do camels have?", ["4", "1", "3", "7"], "3"],
    ["Which is the smallest country in the world?", ["New Zealand", "Monaco", "Singapore", "Vatican City"], "Vatican City"],
];

