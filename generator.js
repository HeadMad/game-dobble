export default class {
  constructor(num) {
    this.size = (num * num) + num + 1;
    this.num = num;
    this.numSymbols = num + 1;
    this.cards = this.generateCards(num);
    this.customCards = null;
  }

  generateCards(num) {
    let cards = [];
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        let card = [];
        for (let k = 0; k < num; k++) {
          card.push((i * k + j) % num * num + k);
        }
        card.push(num * num + i);
        cards.push(card);
      }
    }
    for (let i = 0; i < num; i++) {
      let card = [];
      for (let j = 0; j < num; j++) {
        card.push(j * num + i);
      }
      card.push(num * num + num);
      cards.push(card);
    }
    let lastCard = [];
    for (let i = 0; i <= num; i++) {
      lastCard.push(num * num + i);
    }
    cards.push(lastCard);
    return cards;
  }

  setCustomSymbols(symbols) {
    if (symbols.length < this.size) {
      throw new Error('Минимальное количество символов для игры - ' + this.size + ' а не ' + symbols.length);
    }
    this.symbols = symbols;
    this.customCards = this.cards.map(card => card.map(index => symbols[index]));
    return this;
  }

  getCards() {
    return this.customCards ?? this.cards;
  }

  getNumCards() {
    return this.size;
  }
}
