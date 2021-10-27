function start()
{  
    document.getElementById("q1").style.visibility = "visible";
}

points = 0;
answer1 = "11";
answer2 = "2 - 2";
answer3 = "3^2";
answer4 = "11 - 0";
answer5 = "Parenthesis, Exponents, Multiplication, Additon, and Subtraction";

function sumbit1()
{
    if(answer1 == document.getElementById("answer1").value)
    {
        document.getElementById("qvsa").innerHTML = "<b>1. Correct!</b>" 
        points = points + 1;
    }
    else
    {
        document.getElementById("qvsa").innerHTML = "<b>1. Oops, try again</b>" 
    }
    document.getElementById("q2").style.visibility = "visible";
    document.getElementById("q1").style.visibility = "hidden";
}

function sumbit2()
{
    if(answer2 == document.getElementById("answer2").value)
    {
        document.getElementById("qvsa").innerHTML = "<b>2. Correct!</b>" 
        points = points + 1;
    }
    else
    {
        document.getElementById("qvsa").innerHTML = "<b>2. Oops, try again</b>" 
    }
    document.getElementById("q3").style.visibility = "visible";
    document.getElementById("q2").style.visibility = "hidden";
}

function sumbit3()
{
    if(answer3 == document.getElementById("answer3").value)
    {
        document.getElementById("qvsa").innerHTML = "<b>3. Correct!</b>" 
        points = points + 1;
    }
    else
    {
        document.getElementById("qvsa").innerHTML = "<b>3. Oops, try again</b>" 
    }
    document.getElementById("q4").style.visibility = "visible";
    document.getElementById("q3").style.visibility = "hidden";
}

function sumbit4()
{
    if(answer4 == document.getElementById("answer4").value)
    {
        document.getElementById("qvsa").innerHTML = "<b>4. Correct!</b>" 
        points = points + 1;
    }
    else
    {
        document.getElementById("qvsa").innerHTML = "<b>4. Oops, try again</b>" 
    }
    document.getElementById("q5").style.visibility = "visible";
    document.getElementById("q4").style.visibility = "hidden";
}

function sumbit5()
{
    if(answer5 == document.getElementById("answer5").value)
    {
        document.getElementById("qvsa").innerHTML = "<b>5. Correct!</b>"
        points = points + 1; 
    }
    else
    {
        document.getElementById("qvsa").innerHTML = "<b>5. Oops, try again</b>" 
    }
    document.getElementById("q5").style.visibility = "hidden";
    
    document.getElementById("qvsa").innerHTML = "You got " + points + "/5 correct!";
    percent = points * 20;
    setTimeout(function() { 
        document.getElementById("percentage").innerHTML = "You got " + percent + "%!" 
    }, 1000);
}


