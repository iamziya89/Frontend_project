const taskInput=document.getElementById('task-input');
const addBtn=document.querySelector('.add-btn');
const taskList=document.querySelector(".tasks-items");
const search_Input=document.querySelector("#search");
const clearAll=document.querySelector(".clear-tasks");

addBtn.addEventListener("click",function(e){
    e.preventDefault();
    //trim the value of the input
    const taskText=taskInput.ariaValueMax.trim();
    // check the value of input is not empty
    if(taskInput.value!==" "){
        // create li
        const newLi=document.createElement("li");
        newLi.className="task";
        newLi.style.margin="0.5rem 0rem";
        // create input field
        const task=document.createElement("input");
        task.disabled=true;
        task.type="text";
        task.className="taskDisabled";

        // Make the value of the input to be out text
        task.value=taskText;
        // create a button
        const deleteBtn=document.createElement("button");
        deleteBtn.className="delete-btn";
        deleteBtn.innerText="Delete";

        // create edit button
        const editBtn=document.createElement("button");
        editBtn.className="edit-btn";
        editBtn.innerText="Edit";

        newLi.appendChild(task);
        newLi.appendChild(deleteBtn);
        newLi.appendChild(editBtn);

        taskList.appendChild(newLi);
    }
})
