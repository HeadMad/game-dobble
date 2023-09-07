import  combinations  from "./combinations.js";
import Intersection from "./intersection.js";
import DobbleGame from "./generator.js";

// const n = 2;
// const cards = dobble(n);
// console.log(cards);
// const intersect = new Intersection(cards);
// console.log('INtersertions: ', intersect.isNormal());

// const cardCombinations = combinations(cards, 2);
// for (const [card0, card1] of cardCombinations) {
//   const intersection = new Set(card0.filter(value => card1.includes(value)));
//   console.assert(intersection.size === 1);
// }


// Пример использования класса
const dobbleGame = new DobbleGame(2);
const cards = dobbleGame.getCards();
const numCards = dobbleGame.getNumCards();
// console.log(cards);
console.log("Количество карточек:", numCards);
const intersection = new Intersection(cards);
console.log('Intersertions is normal: ', intersection.isNormal());

// // Устанавливаем свои символы
// const customSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// dobbleGame.setCustomSymbols(customSymbols);
// console.log(dobbleGame.getCards());
