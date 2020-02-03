class Card{
    constructor(suit, rank, numeric){
        this.suit = suit;
        this.rank = rank;
        this.numeric = numeric;
    }
    displayInfo(){
        console.log(`${this.rank} of ${this.suit} : ${this.numeric}`)
    }
}

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const ranks = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

class Deck{
    constructor(){
        this.cards = [];
        for (let suit of suits){
            for (let rank in ranks){
                this.cards.push(new Card(suit,ranks[rank],1+(rank*1)));//Using the key for the numeric value
            }
        }
    }
    shuffle(array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }
      reset(){
        this.deck = [];
    
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    
        for (let suit in suits) {
          for (let value in values) {
            this.deck.push(`${values[value]} of ${suits[suit]}`);
          }
        }
      }
    deal(){
        return this.deck.pop();
      }
}

var deck = new Deck();
deal(deck);

for (let card of deck.cards){
    card.displayInfo();
}

class Player extends Deck {
    constructor(name){
        this.name = name;
        this.hand = dealHand(deck);
    }
    dealHand(deck){
        var hand = [];
        for(let i = 0; i <= 2; i++){
            var chosenCard = super.deal(deck);
            hand.push(chosenCard);
        }
        return hand;
    }
    discardCard(indexOfCardInHand){
        this.hand.splice(indexOfCardInHand);
        return this.hand;
    }
}