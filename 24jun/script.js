let counter = 0;

(function () {
    console
    const removeButton = document.querySelector(".removeButton");
    const addButton = document.querySelector(".addButton");
    
    const removeOne = () => {
        console.log(counter = counter - 1);
    };

    const addOne = () => {
        console.log(counter = counter + 1);
    };

    removeButton.addEventListener("click", function() {
        console.clear();
        removeOne();
    });

    addButton.addEventListener("click", function() {
        console.clear();
        addOne();
    });   
    
    console.log(counter);
})();
