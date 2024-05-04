/* 
    Part 2 Again: Deck of Cards
*/

let BASE_URL = "https://deckofcardsapi.com/api/deck"

// 1
async function drawSingle() {
    let newShuffle = await axios.get(`${BASE_URL}/new/shuffle`);
    let deckID = newShuffle.data.deck_id;
    // console.log(deckID);
    let drawSingle = await axios.get(`${BASE_URL}/${deckID}/draw/?count=1`)
    console.log(drawSingle.data.cards[0].value + " of " + drawSingle.data.cards[0].suit);
}
drawSingle();

// 2
async function drawDouble() {
    let newShuffle = await axios.get(`${BASE_URL}/new/shuffle`);
    let deckID = newShuffle.data.deck_id;
    // console.log(deckID);
    let drawFirst = await axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
    let drawSecond = await axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
    console.log(drawFirst.data.cards[0].value + " of " + drawFirst.data.cards[0].suit);
    console.log(drawSecond.data.cards[0].value + " of " + drawSecond.data.cards[0].suit);
}
drawDouble();

// 3
let newDeckID;
const btnForm = document.querySelector("#btn-form");
const cardArea = document.querySelector("#card-area");

async function getDeckID() {
    let newShuffle = await axios.get(`${BASE_URL}/new/shuffle`);
    // console.log(newShuffle.data.deck_id);
    newDeckID = newShuffle.data.deck_id;
    console.log(newDeckID);
}
getDeckID();

const btn = document.createElement("button");
btn.type = "submit";
btn.innerText = "GIMME A CARD!";
btnForm.appendChild(btn);

btnForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    let response = await axios.get(`${BASE_URL}/${newDeckID}/draw/?count=1`);
    console.log(response.data.cards[0].value + " of " + response.data.cards[0].suit);
    let newCard = document.createElement("img");
    newCard.setAttribute("src", response.data.cards[0].image);
    cardArea.appendChild(newCard);
});