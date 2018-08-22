// function newGame()
// {
//
// }


var start = document.getElementById("idStartButton");
start.addEventListener("click", resetGame);

var buttons = document.querySelectorAll("button");
console.log("Test");

function resetGame()
{
    //console.log(buttons);
    for (i = 0; i < buttons.length; i++)
    {
        //console.log(buttons[i]);
        //buttons[i].textContent = "/";
        buttons[i].innerHTML="+";
        buttons[i].disabled = false;
        turn1 = 1;
        turn2 = 0;
        //buttons[i].removeAttribute("disableD");
    }
    start.innerHTML = "Let's Do This!"
}