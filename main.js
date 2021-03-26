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
    if (pc > 80) 
    {
        var img = "https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/master/pass/Culture-Success-Meme-Kid.jpg";
    }
    else if (pc > 60) {
        var img = "https://i.ytimg.com/vi/fHS8tHKlgw4/mqdefault.jpg";
    }
    else if (pc > 40) {
        var img = "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png";
    }
    else if (pc > 30) {
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

