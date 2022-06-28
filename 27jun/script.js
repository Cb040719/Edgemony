// (function () {
    const newElement = ($element) => document.createElement($element);
    const choice = prompt("Scegli un elemento da creare");
    
    const createCard = () => {
        const $cardContainer = newElement("div");
        const $cardTitle = newElement("h2");
        const $cardImage = document.querySelector(".imgUpload");
        const $cardText = newElement("p");
        
        document.body.append($cardContainer);
        $cardContainer.append($cardTitle, $cardImage, $cardText);
        
        $cardContainer.className = "cardContainer";
        $cardTitle.className = "cardTitle";
        $cardImage.className = "cardImage";
        $cardText.className = "cardText";
        
        const cardImgAlt = prompt("Inserisci un testo sostitutivo per l'immagine");
        $cardImage.setAttribute("type", image);
            // $cardImage.setAttribute("alt", cardImgAlt);
        
        // const uploadCardImg = () => {
        //     cardImgInput.
            // cardImg = cardImgInput.setAttribute("type", Image);
        //     $cardImage = cardImgInput;
        // // }
    }
    
    switch(choice){
        case "card":
            createCard();
    }
// })