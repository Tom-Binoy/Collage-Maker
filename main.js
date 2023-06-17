cam = document.getElementById("cam");
m = 1;

speech_recognition = window.webkitSpeechRecognition;
spr = new speech_recognition();


Webcam.set({
    width: 250 ,
    height: 200 ,
    image_format : "png",
    png_quality : 90 
})

Webcam.attach(cam);

function save(){
     spr.start()
}
     spr.onresult = function run(event){
       text = event.results[0][0].transcript.toLowerCase() 
       console.log(text)

       if(text == 'selfie'){
        speak()
       }
     }


function speak(){
    ai = window.speechSynthesis;
    word = "taking your selfie no."+m+" in 5 seconds";

    tell = new SpeechSynthesisUtterance(word);
    ai.speak(tell)

    Webcam.attach(cam);
    
    setTimeout(function(){

        snap()
    
    }, 5000);
   
}

function snap(){
    console.log("funtion snap called");
    Webcam.snap(function(data_uri){
        document.getElementById("C"+m).innerHTML = '<img id="C'+m+'" src="'+data_uri+'" >';
    } )

    if(m != 3){
    m = m+1;
    speak()
    }


}
