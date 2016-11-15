var _answers = [
    //positive 1 - 10
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    //neutral 11 - 15
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    //Negative 16 - 20
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];




$( document ).ready(function() {
    
    intel.xdk.device.setRotateOrientation("portrait");
    
    
    
  $('#oneButton').on("click", function(){
       var _value = random();
      
       $("#randomValue").text(_answers[_value]);
  });            
});

function random() {
	return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}