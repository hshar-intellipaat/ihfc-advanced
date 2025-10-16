const task = document.querySelector(".addTask");
const btn = document.querySelector(".addBtn");
const list = document.querySelector(".taskList");
const delBtn = document.querySelector(".delete");
btn.addEventListener("click",function(){
    const li = document.createElement("li");
    const del= document.createElement("button");
    del.classList.add("delete");
    del.textContent = "Delete";
    let todo = task.value;
    li.textContent=todo;
    li.appendChild(del);
    list.appendChild(li);
    task.value="";
});

list.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})