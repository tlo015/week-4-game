

//generate random number between 19-120, print to html
var random = (Math.floor(Math.random() * 111)+19);
    console.log ("display num: ", random);
    $("#randomNum").text(random);

//counter to keep track of the clicked numbers #clickTotal
var counter = 0;

//assign each img with a hidden number between 1-12
var redGem = (Math.floor(Math.random() * 12)+1);
    console.log ("Red gem: ", redGem);
var blueGem = (Math.floor(Math.random() * 12)+1);
    console.log ("Blue gem: ", blueGem);
var yellowGem = (Math.floor(Math.random() * 12)+1);
    console.log ("Yellow gem: ", yellowGem);
var greenGem = (Math.floor(Math.random() * 12)+1);
    console.log ("Green gem: ", greenGem);

//generate img as buttons for 'click' event listener
$("#gemImage").on("click", "red", function() {
    redGem = parseInt(redGem);
    alert (redGem);
});

//upon click print value to screen

//upon additional clicks, add values together

//if score = random number wins

//else losses

//restart game with ne random numbers and hidden numbers

 
