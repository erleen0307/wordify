const inputWord = document.querySelector("input");
const button = document.querySelector("button");
const definition = document.querySelector(".definition");
const part = document.querySelector(".part");
const phonetic = document.querySelector(".phonetic");
const image = document.querySelector(".word-image");

button.addEventListener("click", () => {
    const word = inputWord.value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
        const meaning = data[0].meanings[0];
        const def = meaning.definitions[0];

        definition.innerText = `Meaning: ${def.definition}`;
        part.innerText = `Part of Speech: ${meaning.partOfSpeech}`;

        // Phonetics
        if (data[0].phonetics && data[0].phonetics[0] && data[0].phonetics[0].text) {
            phonetic.innerText = `Phonetic: ${data[0].phonetics[0].text}`;
        } else {
            phonetic.innerText = "Phonetic: Not available";
        }

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${word}`)
        .then(res => res.json())
        .then(data => {
        if (data.thumbnail && data.thumbnail.source) {
            image.src = data.thumbnail.source;
        } else {
            image.src = ""; // or a fallback image
        }
        });

    })
    .catch(() => {
        definition.innerText = "Sorry, definition not found.";
        part.innerText = "";
        phonetic.innerText = "";
        image.src = "";
    });
});
