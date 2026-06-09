// Typing Effect

const text = "🎯 My Goals";
let i = 0;

function typeWriter() {

    if(i < text.length){

        document.getElementById("heading").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);
    }
}

typeWriter();


// Motivation Quotes

function showQuote(){

    const quotes = [

        "Success is the sum of small efforts repeated every day.",

        "Keep learning. Keep building. Keep growing.",

        "Dream big, start small, act now.",

        "Every expert was once a beginner.",

        "Your future is created by what you do today."
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML =
        quotes[randomIndex];
}