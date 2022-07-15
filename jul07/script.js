(function() {

    const $taskInput = document.querySelector("#newTaskInput");
    const $taskList = document.querySelector("#taskList");
    
    const getInputText = () => {

        const date = new Date();
        const currentDate = `${date.getHours()} : ${date.getMinutes()}`;

        const $newTask = `
        <li>
        <input type="checkbox"/>
        <span>${$taskInput.value} - ${currentDate}</span>
        <span>
            <button id="deleteButton">Scancella</button>
        </span>
        </li>`;

        

        $taskList.innerHTML += $newTask;  

        
        console.log($taskInput.value + " - " + currentDate);
        $taskInput.value = ""
    }
    
    $taskList.addEventListener("click", function (event) {
        const deleteButton = event.target;

        if(deleteButton.tagName === "BUTTON"){
            const targetTask = deleteButton.closest("li")
            
            if(targetTask){
                targetTask.remove();
                console.clear();
            }
        }
    })

    const $submitButton = document.querySelector("#addNewTask");
    $submitButton.addEventListener("click", getInputText);
    


})()