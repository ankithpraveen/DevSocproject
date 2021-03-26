var score=0;
var index=0;


function checkans(choice)
{
    console.log(questions[index][2]);
    console.log(choice);
    if (questions[index][2]===choice)
    {
        score++;
    }
    index++;
    console.log(index);
}

function addhtml(id,html)
{
    var elem=document.getElementById(id);
    elem.innerHTML=html;
}

function totscore()
{
    console.log(sessionStorage.getItem("score"));
    console.log(sessionStorage.getItem("totques"));
    console.log(sessionStorage.getItem("ques"));
    addhtml("finalres","<i class=\"material-icons large cyan-text\">thumb_up</i><br><h2> Your score is: " + (sessionStorage.getItem("score")*100/sessionStorage.getItem("totques")) + "%</h2>" + "<h4>Final Result</h4>");
}

function nextques()
{

    if (index>=questions.length)
    {
        window.location.replace("result.html");
        sessionStorage.setItem("score",score);
        sessionStorage.setItem("totques",questions.length);
        sessionStorage.setItem("ques",questions);
    }
    else
    {
        addhtml("question",questions[index][0])
        for (var i=0; i<= questions[1].length; i++)
        {
            addhtml("choice"+i,questions[index][1][i]);
            checkguess("guess"+i,questions[index][1][i])
        }
        
    }
    
}

function checkguess(id,guess)
{
    document.getElementById(id).onclick=function()
    {
        checkans(guess);
        nextques();
    }
}

var questions = [
    ["Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know" ], "George Washington"],
    ["What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi","42", "Wah?", "I don't know"], "42"],
    ["Do you love to code?", ["No","Yes", "Hell Yeah", "Maybe"], "Hell Yeah"],
    ["What's the best programming language?", ["Javascript","C#", "Php", "Python"], "Javascript"],
];

nextques();