
function arrayToStringUsingFor(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += ",";
        }
    }
    return result;
}

function arrayToStringUsingJoin(array) {
    return array.join(",");
}

const array = ["apple", "banana", "cherry"];
console.log(arrayToStringUsingFor(array));
console.log(arrayToStringUsingJoin(array));

function removeCard(cards, index) {
    cards.splice(index, 1);
}

function addCard(cards, index, newCard) {
    cards.splice(index, 0, newCard);
}

function updateCard(cards, index, updatedCard) {
    cards.splice(index, 1, updatedCard);
}

let cards = ["card1", "card2", "card3"];

removeCard(cards, 1);
console.log(cards); // ["card1", "card3"]

addCard(cards, 1, "newCard");
console.log(cards); // ["card1", "newCard", "card3"]

updateCard(cards, 1, "updatedCard");
console.log(cards); // ["card1", "updatedCard", "card3"]
