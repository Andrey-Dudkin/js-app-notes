const containerCard = document.querySelector(".cards_notes");
const inputNotes = document.querySelector(".input_notes");
const notesCards = []

function createCardNotes(){
    cardNotes = document.createElement("div");
    cardNotes.className = "card_notes";
    cardNotes.innerHTML = `<p>${inputNotes.value}</p>`
    containerCard.append(cardNotes);
    inputNotes.value = "";
    notesCards.push(cardNotes);
};

const hexColors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

function getRandomNambers(){
    return Math.floor(Math.random() * hexColors.length)
};
function generateHexColor(){
    let colorHex = "#";
    for(let i = 0; i < 6; i++){
        colorHex += hexColors[getRandomNambers()]
    }
    return colorHex;
};
function useСolor(){
     notesCards.forEach(function(item){
        item.onclick = function(){
            item.remove()
        }
     })
    let hexColor = generateHexColor();
    cardNotes.style.backgroundColor = hexColor;
};

inputNotes.addEventListener("keydown", (e) =>{
    if(e.key === "Enter" && inputNotes.value === ""){
         inputNotes.style.borderColor = "#ff0000"
    }
    else if(e.key === "Enter"){
        inputNotes.style.borderColor = "#ffff00";
        createCardNotes();
        useСolor();
    }
});

