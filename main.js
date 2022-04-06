x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
banana = "";
speak_data = "";
draw_apple = "";
draw_banana = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple="apple.png";
  banana="banana.png";
  loadImage(apple);
  loadImage(banana);
}
function start()
{
  document.getElementById("status").innerHTML = "The system is listening, so please speak.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The system has been recognized with: " + content; 
    to_number = Number(content);

    if (Number.isInteger(to_number)){
      draw_apple = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The system has not recognized anything."; 
    }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number("Apples drawn");
for ((i=0(i>= toNumber)(i=i+1)){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, x, y, screen_width, screen_height);
    }
  }

if(draw_banana == "set"){
    document.getElementById("status").innerHTML = to_number + " Bananas drawn";
    speak_data = to_number("Bananas drawn");

for ((i=0(i >= toNumber) (i=i+1)){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(banana, x, y, screen_width, screen_height);
    }
  }
}

function speak(){
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
