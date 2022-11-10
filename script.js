//variable and const declare
// in javascript if we assisn element by id then we can direct access that element in javascript

const taskList = document.querySelector('.taskList');

let deleImg = document.querySelector('.deleImg');
let task = document.querySelector('.task');
let taskValue;


//function secction
//ading task in localstoarage
function storeToLocal() {
    const taskListData = document.querySelectorAll('.task');
    const taskArr = [];
    Array.from(taskListData).forEach((curElement) => {
        return taskArr.push(curElement.value);
    });
    localStorage.setItem('taskData', JSON.stringify(taskArr));
}

//create taskdiv
function creatTask(taskValue) {
    const wrap_task = document.createElement('div');
    wrap_task.classList.add('wrap_task');
    const HtmlData =
    `<input class="task" value="${taskValue}"readonly>
    <div class="deleteBtn"><img src="delete.png" alt="Delete" class="deleImg"></div>`;
    wrap_task.insertAdjacentHTML('beforeend', HtmlData);
    taskList.appendChild(wrap_task);
    storeToLocal();
    //delete task when button clicked
    const deleteBtn = wrap_task.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click',()=>{
    wrap_task.remove();  
    storeToLocal(); //to store the remaing element after remove() method call
})
}

//main logic start here
btn.addEventListener('click', () => {
    taskValue = inputTask.value;
    // console.log(`value in varible : ${taskValue}`);

    if (taskValue != '') //if the taskvalue is not empty then this condition become true
    {
        // console.log('Textarea is not Empty');
        creatTask(taskValue);
    }
    else {
        alert('First Enter Task!');
    }

})

const getTask = JSON.parse(localStorage.getItem('taskData'));
// console.log(getTask);
if (getTask)//if the data present in localstorage then this become true 
{
    Array.from(getTask).forEach(element => {
        creatTask(element);
    });
}
