const Typo = require('typo-js');

// Membuat objek typo dengan kamus bahasa Inggris (American English)
const dictionary = new Typo('en_US');

function findMisspelledWords(sentence) {
    const words = sentence.split(' ');
    const misspelledWords = words.filter(word => !dictionary.check(word));
    return misspelledWords;
}

// Contoh pemanggilan fungsi
const inputSentence = "Thiss is a sample sentance with some misspelled words.";
const misspelledWords = findMisspelledWords(inputSentence);
if (misspelledWords.length > 0) {
    console.log("Misspelled Words Found:");
    console.log(misspelledWords.join(', '));
} else {
    console.log("No misspelled words found in the sentence.");
}




