const percentValue = document.querySelector(".percent-value");
const quoteSection = document.querySelector(".quote-section");
const progressBar = document.querySelector(".progress-bar");
const hr = document.querySelectorAll(".hr");
const button = document.querySelector("button");

let quotesArray = ["Don't watch the clock; do what it does. Keep going. - Sam Levenson", "The future depends on what you do today. - Mahatma Ghandi", "Start where you are. Use what you have. Do what you can. - Arthur Ashe", "Believe you can and you're halfway there. - Theordore Roosevelt", "The harder you work for something, the greater you'll feel when you achieve it", "Success is the sum of small efforts, repeated day in and day out. - Robert Collier", "Your limitation - it's only your imagination.", "Push yourself, because no one else is going to do it for you.", "Great things never come from comfort zones.", "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt", "Work hard in silence, let your success be your noise.", "Do something today that your future self will thank you for.", "Don't let yesterday take too much of today."];

let percentage = 0;
let counter = 0;

percentValue.textContent = percentage;

function increaseBar() {
    button.addEventListener("click", () => {
        if (percentage <= 90) {
            percentage += 10;
        }
        percentValue.textContent = percentage;
        if (counter <= 9) {
            hr[counter].style.backgroundColor = "green";
        }
        if (counter <= 10) {
            counter++;
        }

        quoteSection.textContent = quotesArray[counter + 1];
    });
}

increaseBar();