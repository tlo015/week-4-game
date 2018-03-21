var $myAudio = ("#audioContent")
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audioContent.pause()
  } else {
    audioContent.play();
  }
};
audioContent.onplaying = function() {
  isPlaying = true;
};
audioContent.onpause = function() {
  isPlaying = false;
};
//initialise game stats
//counter to keep track of the clicked numbers #clickTotal
    //generate random number between 19-120, print to html  
    var imgValue = []; 
    var counter = 0;
    var winsCount = 0;  
    var lossesCount = 0;

    $("#randomNum").text(counter);
    $("#wins").text(winsCount);
    $("#losses").text(lossesCount);
    var random = (Math.floor(Math.random() * 102) +19);
        console.log ("display num: ", random); 
    $("#randomNum").text(random);
    
    //assign each img with a hidden number between 1-12
    function randomPkmnNum() {
        for (var i=0; i<4; i++) {
            var num = (Math.floor(Math.random() *11) +1);
            imgValue.push(num);
        }
        console.log (imgValue);
    }
    randomPkmnNum();

    //'click' event listener on images #pokemonImage
    //upon click print value to screen
    //upon additional clicks, add values together
    //if score = random number wins #wins
    //else losses #losses
    $(".green").on("click", function() {
        resetWinLose();
            console.log ("Green click: ", imgValue[0]);
        counter = counter + imgValue[0];
            console.log(counter);
        $("#clickTotal").text(counter);
        if (counter == random){
                youWon();
            } else if (counter > random){
                youLose();
            }
    });
    
    $(".red").on("click", function() {
        resetWinLose();
            console.log ("Red click: ",imgValue[1]);
        counter = counter + imgValue[1];
            console.log(counter);
        $("#clickTotal").text(counter);  
        if (counter == random){
                youWon();
            } else if (counter > random){
                youLose();
            }
    });  
    
    $(".blue").on("click", function() {
        resetWinLose();
            console.log ("Blue click: ",imgValue[2]);
        counter = counter + imgValue[2];
        $("#clickTotal").text(counter);
        if (counter == random){
                youWon();
            } else if (counter > random){
                youLose();
            }
    });    
    
    $(".yellow").on("click", function() {
        resetWinLose();
            console.log ("Yellow click: ",imgValue[3]);
        counter = counter + imgValue[3];
        $("#clickTotal").text(counter);
        if (counter == random){
                youWon();
            } else if (counter > random){
                youLose();
            }
    });
    
    function youWon(){
        $("#win-lose").text("You Win!!")
        winsCount++;
        $("#wins").text(winsCount);
        reset();
    }

    function youLose(){
        $("#win-lose").text("You Lose!!")
        lossesCount++;
        $("#losses").text(lossesCount);
        reset();
    }

    //reset
        function reset() {
            random = (Math.floor(Math.random() * 102) +19);
                $("#randomNum").text(random);
            imgValue= [];
            randomPkmnNum();
            counter = 0;
            $("#clickTotal").text(counter);
        }

        function resetWinLose() {
            $("#win-lose").html('&nbsp;');
        }



