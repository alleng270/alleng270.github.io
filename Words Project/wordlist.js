function speak(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;
    window.speechSynthesis.speak(message);
}

function updateSentence() {
    const wordMenu = document.getElementById("wordMenu");
    const sentence = document.getElementById("sentenceBox");

    if (wordMenu.selectedIndex > 0) {
        const option = wordMenu.options[wordMenu.selectedIndex];
        sentence.value = option.dataset.sentence;
    } else {
        sentence.value = "";
    }
}

function speakWord() {
    const wordMenu = document.getElementById("wordMenu");

    if (wordMenu.selectedIndex > 0) {
        speak(wordMenu.value);
    }
}

function speakSentence() {
    const sentence = document.getElementById("sentenceBox");

    if (sentence.value !== "") {
        speak(sentence.value);
    }
}
