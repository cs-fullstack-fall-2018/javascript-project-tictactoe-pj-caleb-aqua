var xInput = "X";
var oInput = "O";
var turn1 = 1;
var turn2 = 0;
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");



function main1()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("1").textContent= xInput;
            turn2 += 2;
            button1.disabled = true;


        }

        else if (turn2 > turn1)
        {
            document.getElementById("1").textContent= oInput;
            turn1 += 2;
            button1.disabled = true;

        }

        else
            {
            alert("Error")
        }

    }
function main2()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("2").textContent= xInput;
            turn2 += 2;
            button2.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("2").textContent= oInput;
            turn1 += 2;
            button2.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main3()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("3").textContent= xInput;
            turn2 += 2;
            button3.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("3").textContent= oInput;
            turn1 += 2;
            button3.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main4()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("4").textContent= xInput;
            turn2 += 2;
            button4.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("4").textContent= oInput;
            turn1 += 2;
            button4.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main5()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("5").textContent= xInput;
            turn2 += 2;
            button5.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("5").textContent= oInput;
            turn1 += 2;
            button5.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main6()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("6").textContent= xInput;
            turn2 += 2;
            button6.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("6").textContent= oInput;
            turn1 += 2;
            button6.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main7()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("7").textContent= xInput;
            turn2 += 2;
            button7.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("7").textContent= oInput;
            turn1 += 2;
            button7.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main8()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("8").textContent= xInput;
            turn2 += 2;
            button8.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("8").textContent= oInput;
            turn1 += 2;
            button8.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }
function main9()
    {

        if (turn2>9)
        {
            alert("Cat!")
        }

        else if (turn1 > turn2)
        {
            document.getElementById("9").textContent= xInput;
            turn2 += 2;
            button9.disabled = true;
        }

        else if (turn2 > turn1)
        {
            document.getElementById("9").textContent= oInput;
            turn1 += 2;
            button9.disabled = true;
        }

        else
        {
            alert("Error")
        }

    }

button1.addEventListener("click", main1);
button2.addEventListener("click", main2);
button3.addEventListener("click", main3);
button4.addEventListener("click", main4);
button5.addEventListener("click", main5);
button6.addEventListener("click", main6);
button7.addEventListener("click", main7);
button8.addEventListener("click", main8);
button9.addEventListener("click", main9);
