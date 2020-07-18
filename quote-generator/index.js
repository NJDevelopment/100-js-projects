const quotes = [
    ["You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss"],
    ["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go. - Dr. Seuss"],
    ["Sometimes the questions are complicated and the answers are simple. - Dr. Seuss"],
    ["Today you are You, that is truer than true. There is no one alive who is Youer than You. - Dr. Seuss"],
    ["The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss"],
    ["A person's a person, no matter how small. - Dr. Seuss"]
]

document.getElementById("generate").addEventListener("click", setQuote);

function getQuote() {
    for(let i = 0; i < quotes.length; i++) {
        return quotes[Math.floor(Math.random() * quotes.length)][0];
    }
}

function setQuote() {
    document.getElementById("quote").textContent = getQuote();
}