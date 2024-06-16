function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world", 10));

function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + "...";
    }
}

console.log(formatString("This string is exactly forty characters long."));
console.log(formatString("This string is definitely longer than forty characters long and needs to be shortened."));

function checkForSpam(message) {
    const lowercasedMessage = message.toLowerCase();
    return lowercasedMessage.includes("spam") || lowercasedMessage.includes("sale");
}


console.log(checkForSpam("Get the best SALE offers now!")); 
console.log(checkForSpam("Important information about your account")); 

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число:");

    if (input === null) {
        break;
    }

    input = Number(input);

    if (isNaN(input)) {
        alert("Було введено не число, попробуйте ще раз");
        continue;
    }

    numbers.push(input);
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Жодного числа не було введено");
}

