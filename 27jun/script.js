// (function () {
const newElement = ($element) => document.createElement($element);
const choice = prompt("Scegli un elemento da creare");
    
const createCard = () => {
    const $cardContainer = newElement("div");
    const $cardTitle = newElement("h2");
    const $cardImageInput = document.querySelector(".imgUpload");
    const $cardImage = newElement("img");
    const $cardText = newElement("p");
        
    document.body.append($cardContainer);
    $cardContainer.append($cardTitle, $cardImage, $cardText);
        
    $cardContainer.className = "cardContainer";
    $cardTitle.className = "cardTitle";
    $cardImage.className = "cardImage";
    $cardText.className = "cardText";
}
    
    switch(choice){
        case "card":
            createCard();
    }
// })