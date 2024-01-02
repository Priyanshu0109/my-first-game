
var buttonColours = ["red", "blue", "green", "yellow"];
var level=-1;
var userchance=-1;
var gamePattern = [];
var userClickedPattern = [];



$(document).keypress(function()
{
    level=1;
    gamePattern = [];
    nextSequence();
});


    $(".btn").click(function(event)
    {
        var userChosenColour=event.target.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);

        if(userClickedPattern.length===gamePattern.length)
        { 
            if(checkanswer(userClickedPattern.length)===true)
            {
                nextSequence();
                level++;
            }
            else
            {
                alert("haar gaye bhai");
                $("h1").text("Please pres A key to restart!");
            }
        }
    });


function nextSequence() {
    userClickedPattern = [];
    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(500).fadeOut(500).fadeIn(500);
    playSound(randomChosenColour);
    console.log(gamePattern);
}


function checkanswer(x)
{
    for(var i=0; i<x; i++)
    {
        if(userClickedPattern[i]!=gamePattern[i]) return false;
    }
    return true;
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $( "#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },500);
}

