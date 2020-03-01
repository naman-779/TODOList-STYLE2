const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const cross = document.getElementById("imgID");
const form = document.getElementsByTagName("form")[0];
// localStorage.clear();

//this function gets called in the started of the program
(function getAllTasks(){
    if(localStorage.getItem("TaskList")!=null){
        const TaskList = JSON.parse(localStorage.getItem("TaskList"));
        for(var i = 0;i<TaskList.length;i++){
            addOneTask(TaskList[i]);
        }
    }
})();

form.addEventListener("submit", function(e){
    //page won't reload
    e.preventDefault();    
    const task = input.value;
    addOneTask(task);
    addTaskToLS(task);

});

function addOneTask(task){
    const li = document.createElement("li");
    li.setAttribute("class", "task");
    li.innerHTML = `<p class = "mr-3">
    ${task}
    </p>
    <img id = "imgID" src="bluecross.png">`
    ul.appendChild(li);
    input.value = "";

    //remove task eventListener added
    const image = li.querySelector("img");
    image.addEventListener("click", removeTask);
}


function addTaskToLS(task){

    if(localStorage.getItem("TaskList") == null){
        const TaskList = [task];
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    }else{
        const sTaskList = localStorage.getItem("TaskList");
        const TaskList = JSON.parse(sTaskList);
        TaskList.push(task);
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    }
}

function removeTask(e){
    const parent = e.target.parentElement;
    const task = parent.querySelector("p").textContent;
    const finalTask = task.trim(" ");
    removeFromLS(finalTask);
    e.target.parentElement.remove();

}

function removeFromLS(task){
    const sTaskList = localStorage.getItem("TaskList");
    const TaskList = JSON.parse(sTaskList);
    const fTasks = TaskList.filter(function(t){
        return task != t;
    });
    localStorage.setItem("TaskList", JSON.stringify(fTasks));

}

//checked a task

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});



