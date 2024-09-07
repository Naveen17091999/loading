// Random text printing for loading

// const loadingText = document.getElementById('loadingText');
// const finalText = 'Your Name'; // Replace with the name you want to reveal

// const fakeTexts = ['Loading...', 'Initializing...', 'Fetching Data...', 'Almost There...'];
// const typingSpeed = 100; // milliseconds per character
// const eraseSpeed = 50; // milliseconds per character
// const pauseBetweenTexts = 500; // milliseconds between texts

// let currentTextIndex = 0;
// let currentCharIndex = 0;
// let typing = true;

// function type() {
//     if (typing) {
//         loadingText.textContent += fakeTexts[currentTextIndex][currentCharIndex];
//         currentCharIndex++;
//         if (currentCharIndex === fakeTexts[currentTextIndex].length) {
//             typing = false;
//             setTimeout(() => {
//                 erase();
//             }, pauseBetweenTexts);
//         } else {
//             setTimeout(type, typingSpeed);
//         }
//     }
// }

// function erase() {
//     loadingText.textContent = loadingText.textContent.slice(0, -1);
//     if (loadingText.textContent.length === 0) {
//         typing = true;
//         currentTextIndex = (currentTextIndex + 1) % fakeTexts.length;
//         currentCharIndex = 0;
//         setTimeout(type, typingSpeed);
//     } else {
//         setTimeout(erase, eraseSpeed);
//     }
// }

// function revealFinalText() {
//     loadingText.textContent = finalText;
// }

// // Start the typing animation
// type();

// // Reveal the final text after some time (adjust as needed)
// setTimeout(revealFinalText, fakeTexts.length * (fakeTexts[0].length * typingSpeed) + 2000); // Adjust the delay as needed



// random char generator

// const loadingText1 = document.getElementById('loadingText1');
// const loadingText2= document.getElementById('loadingText2');
// const loadingText3 = document.getElementById('loadingText3');
// const loadingText4 = document.getElementById('loadingText4');
// const loadingText5 = document.getElementById('loadingText5');
// const loadingText6 = document.getElementById('loadingText6');

// function getRandomChar() {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     return chars.charAt(Math.floor(Math.random() * chars.length));
// }

// function generateRandomText(length) {
//     let text = '';
//     for (let i = 0; i < length; i++) {
//         text += getRandomChar();
//     }
//     return text;
// }


// function displayRandomText(letter) {
//     let length = 1; // Adjust length as needed
//     letter.textContent = generateRandomText(length);


// }

// const startTime = Date.now();

// // Function to execute
// function runProgram() {
//     // Your code here
//     console.log("Running...");

//     // Check elapsed time
//     if (Date.now() - startTime < 1000) {
//         displayRandomText(loadingText1);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText1.textContent = "N"
//     }
//     if (Date.now() - startTime < 2000) {
//         displayRandomText(loadingText2);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText2.textContent = "A"
//     }
//     if (Date.now() - startTime < 3000) {
//         displayRandomText(loadingText3);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText3.textContent = "V"
//     }
//     if (Date.now() - startTime < 4000) {
//         displayRandomText(loadingText4);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText4.textContent = "E"
//     }
//     if (Date.now() - startTime < 5000) {
//         displayRandomText(loadingText5);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText5.textContent = "E"
//     }
//     if (Date.now() - startTime < 6000) {
//         displayRandomText(loadingText6);
//         setTimeout(runProgram, 60); // Repeat every 1 second
//     } else {
//         loadingText6.textContent = "N"
//     }

// }

// runProgram();



// const word = "HELIXION"; // Your 10-character word
// const loadingContainer = document.querySelector('.loading');
// const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; // Possible random characters
// const delay = 100; // Delay in milliseconds before displaying the next random character
// const finalDelay = 1000; // Delay after final character is shown

// // Create span elements for each character in the word
// word.split('').forEach(() => {
//     const span = document.createElement('span');
//     span.classList.add('char');
//     loadingContainer.appendChild(span);
// });

// const spans = document.querySelectorAll('.char');

// let currentCharIndex = 0;

// function showRandomChars() {
//     if (currentCharIndex >= word.length) return;

//     const span = spans[currentCharIndex];
//     let randomCharInterval = setInterval(() => {
//         const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
//         span.textContent = randomChar;
//     }, delay);

//     setTimeout(() => {
//         clearInterval(randomCharInterval);
//         span.textContent = word[currentCharIndex]; // Show actual character
//         currentCharIndex++;
//         showRandomChars(); // Move to the next character
//     }, delay * 2); // Set the time for random characters before showing the actual one
// }

// // Start the animation after the page loads
// showRandomChars();



// working

const words = [
    // "HÉLICE",  
    // "Hélixion",    // French
    // "헬릭시온",      
    // "HELIX",       // German
    // "ELICA",       // Italian
    // "HÉLICE",      // Portuguese
    // "СПИРАЛЬ",     // Russian
    // "海利克斯",        // Chinese
    // "ヘリクシオン",        // Japanese
    // "هيلكسيون",
    "हेलीक्सिय",      // Arabic
    "HELIXION"   // English
];

const loadingContainer = document.querySelector('.loading');
const charDisplayTime = 500; // Time delay after revealing a full word
let wordIndex = 0; // Current word index

// Create span elements for the word
function createSpansForWord(word) {
    loadingContainer.innerHTML = ''; // Clear previous spans
    word.split('').forEach(() => {
        const span = document.createElement('span');
        span.classList.add('char');
        loadingContainer.appendChild(span);
    });
}

// Reveal each character one by one
function revealChars(word) {
    const spans = document.querySelectorAll('.char');
    let currentCharIndex = 0;

    function displayNextChar() {
        if (currentCharIndex >= word.length) {
            // After the word is done, wait for some time and move to the next word
            setTimeout(() => {
                wordIndex++;
                if (wordIndex < words.length) {
                    startWordAnimation(); // Start the next word
                }
            }, charDisplayTime);
            if(word === "HELIXION"){
                console.log("last");
                
                setTimeout(() => {
                    loadingContainer.classList.add('zoom-in');
                }, 500);
            }
            return;
        }

        spans[currentCharIndex].textContent = word[currentCharIndex];
        spans[currentCharIndex].style.opacity = 1; // Make the character visible
        currentCharIndex++;

        // Move to the next character with a slight delay
        setTimeout(displayNextChar, 100);
    }

    displayNextChar(); // Start revealing characters
}

// Start animation for the current word
function startWordAnimation() {
    const currentWord = words[wordIndex];
    createSpansForWord(currentWord);
    revealChars(currentWord);
}

// Start with the first word
startWordAnimation();



// const word = "HELIXION";
// const loadingContainer = document.querySelector('.loading');
// const charDisplayTime = 1000; // Time delay after revealing a full word
// let currentCharIndex = 0; // Current character index

// function createSpansForWord(word) {
//     loadingContainer.innerHTML = ''; // Clear previous spans
//     word.split('').forEach(() => {
//         const span = document.createElement('span');
//         span.classList.add('char');
//         loadingContainer.appendChild(span);
//     });
// }

// function revealChars(word) {
//     const spans = document.querySelectorAll('.char');

//     function displayNextChar() {
//         if (currentCharIndex >= word.length) {
//             // Add zoom-in animation after all characters are revealed
//             setTimeout(() => {
//                 loadingContainer.classList.add('zoom-in');
//             }, 1000);
//             return; // Stop when all characters are revealed
//         }

//         spans[currentCharIndex].textContent = word[currentCharIndex];
//         spans[currentCharIndex].style.opacity = 1; // Make the character visible
//         currentCharIndex++;

//         // Move to the next character with a slight delay
//         setTimeout(displayNextChar, 200);
//     }

//     displayNextChar(); // Start revealing characters
// }

// function startWordAnimation() {
//     createSpansForWord(word);
//     revealChars(word);
// }

// // Start with the text display
// startWordAnimation();