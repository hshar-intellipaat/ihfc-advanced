const url = "https://crudcrud.com/api/252ab8ecd858415786f475fe6f69671a/createnew";
const btn = document.querySelector(".btn");
const tasklist = document.querySelector(".tasklist");
btn.addEventListener("click",async()=>{
    const addtask = document.querySelector(".addtask").value;    
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    editbtn.classList.add("editbtn");
    delbtn.textContent = "Delete";
    editbtn.textContent = "Edit"
    let id = await createAPI(addtask);
    li.textContent = addtask;
    li.dataset.id = id;
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    tasklist.appendChild(li);
})

tasklist.addEventListener("click",async (e)=> {
    const targetbtn = e.target;

    if(targetbtn.classList.contains("delbtn")){
        const delid = targetbtn.parentElement.dataset.id;
        await deleteAPI(delid);
        targetbtn.parentElement.remove();
    }
    if(targetbtn.classList.contains("editbtn")){
        const editid = targetbtn.parentElement.dataset.id;
        let updatetext = prompt("Update the task");
        await updateAPI(editid, updatetext);
        tasklist.innerHTML="";
        await readAPI();

    }
})


async function createAPI(addtask){
    payload = {
        task: addtask
    }
    const response = await fetch(url, {
        
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});
    const data = await response.json();
    console.log(data._id);
    return data._id;
    
}

async function readAPI(){
     try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Read failed: ${response.status}`);
    }

    const data = await response.json(); // array of tasks
    console.log("Fetched tasks:", data);

    // Clear old tasks from UI
    tasklist.innerHTML = "";

    // Loop through all tasks
    data.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.task + " ";

      // store backend id
      li.dataset.id = task._id;

      // create buttons
      const editBtn = document.createElement("button");
      editBtn.classList.add("editbtn");
      editBtn.textContent = "Edit";

      const delBtn = document.createElement("button");
      delBtn.classList.add("delbtn");
      delBtn.textContent = "Delete";

      // append to li
      li.appendChild(editBtn);
      li.appendChild(delBtn);

      // append to list
      tasklist.appendChild(li);
    });

  } catch (err) {
    console.error("Error fetching tasks:", err);
  }

}

async function updateAPI(id, task){
    payload = {
        "task": task
    }
 const response = await fetch(url+"/"+id, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});
}


async function deleteAPI(id){
 const response = await fetch(url+"/"+id, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json'
  }
});

}

document.addEventListener("DOMContentLoaded", readAPI);