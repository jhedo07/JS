// Fisher-Yates Algorithm

const cards = ["K", 5, 10, 1, 6, "J", "A", 9, 2, 7, 3, "Q", 4, 8];

shuffle(cards);

console.log(cards);

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];

    }

}