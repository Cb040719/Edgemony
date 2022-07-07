(function() {

    const getInputText = () => {
        const $newTask = document.querySelector("#newTaskInput");
        console.log($newTask.value);
        $newTask.value = ""
    }

    const $submitButton = document.querySelector("#addNewTask");

    $submitButton.addEventListener("click", getInputText);

})()