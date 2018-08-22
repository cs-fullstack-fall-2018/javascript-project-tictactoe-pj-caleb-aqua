
// List of global Vars
    let xInput = "X";
    let oInput = "O";
    let turn1 = 1;
    let turn2 = 0;
    let button1 = document.getElementById("1");
    let button2 = document.getElementById("2");
    let button3 = document.getElementById("3");
    let button4 = document.getElementById("4");
    let button5 = document.getElementById("5");
    let button6 = document.getElementById("6");
    let button7 = document.getElementById("7");
    let button8 = document.getElementById("8");
    let button9 = document.getElementById("9");


// List of functions that will be grabbed by button presses
    function main1()
        {
            if (turn1 > turn2)
            {
                document.getElementById("1").textContent= xInput;
                turn2 += 2;
                button1.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("1").textContent= oInput;
                turn1 += 2;
                button1.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
                {
                alert("Error")
            }

        }
    function main2()
        {
            if (turn1 > turn2)
            {
                document.getElementById("2").textContent= xInput;
                turn2 += 2;
                button2.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("2").textContent= oInput;
                turn1 += 2;
                button2.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main3()
        {
            if (turn1 > turn2)
            {
                document.getElementById("3").textContent= xInput;
                turn2 += 2;
                button3.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("3").textContent= oInput;
                turn1 += 2;
                button3.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main4()
        {

            if (turn1 > turn2)
            {
                document.getElementById("4").textContent= xInput;
                turn2 += 2;
                button4.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("4").textContent= oInput;
                turn1 += 2;
                button4.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main5()
        {
            if (turn1 > turn2)
            {
                document.getElementById("5").textContent= xInput;
                turn2 += 2;
                button5.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("5").textContent= oInput;
                turn1 += 2;
                button5.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main6()
        {
            if (turn1 > turn2)
            {
                document.getElementById("6").textContent= xInput;
                turn2 += 2;
                button6.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("6").textContent= oInput;
                turn1 += 2;
                button6.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main7()
        {
            if (turn1 > turn2)
            {
                document.getElementById("7").textContent= xInput;
                turn2 += 2;
                button7.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("7").textContent= oInput;
                turn1 += 2;
                button7.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main8()
        {
            if (turn1 > turn2)
            {
                document.getElementById("8").textContent= xInput;
                turn2 += 2;
                button8.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("8").textContent= oInput;
                turn1 += 2;
                button8.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }
    function main9()
        {
            if (turn1 > turn2)
            {
                document.getElementById("9").textContent= xInput;
                turn2 += 2;
                button9.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else if (turn2 > turn1)
            {
                document.getElementById("9").textContent= oInput;
                turn1 += 2;
                button9.disabled = true;
                if (document.getElementById("1").innerText==="X" && document.getElementById("4").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("2").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("8").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("6").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("9").innerText==="X"
                    || document.getElementById("3").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("7").innerText==="X"
                    || document.getElementById("1").innerText==="X" && document.getElementById("2").innerText==="X" && document.getElementById("3").innerText==="X"
                    || document.getElementById("4").innerText==="X" && document.getElementById("5").innerText==="X" && document.getElementById("6").innerText==="X"
                    || document.getElementById("7").innerText==="X" && document.getElementById("8").innerText==="X" && document.getElementById("9").innerText==="X")
                {
                    alert("Winner is  X!")
                }

                else if (document.getElementById("1").innerText==="O" && document.getElementById("4").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("2").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("8").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("6").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("9").innerText==="O"
                    || document.getElementById("3").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("7").innerText==="O"
                    || document.getElementById("1").innerText==="O" && document.getElementById("2").innerText==="O" && document.getElementById("3").innerText==="O"
                    || document.getElementById("4").innerText==="O" && document.getElementById("5").innerText==="O" && document.getElementById("6").innerText==="O"
                    || document.getElementById("7").innerText==="O" && document.getElementById("8").innerText==="O" && document.getElementById("9").innerText==="O")
                {
                    alert("Winner is  X!")
                }

                else if ((turn2+turn1)>=19)
                {
                    alert("Cat!")
                }
            }

            else
            {
                alert("Error")
            }

        }


// Event Listener for button presses
    button1.addEventListener("click", main1);
    button2.addEventListener("click", main2);
    button3.addEventListener("click", main3);
    button4.addEventListener("click", main4);
    button5.addEventListener("click", main5);
    button6.addEventListener("click", main6);
    button7.addEventListener("click", main7);
    button8.addEventListener("click", main8);
    button9.addEventListener("click", main9);
