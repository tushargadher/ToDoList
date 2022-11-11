//variable and const declare
// in javascript if we assisn element by id then we can direct access that element in javascript
const taskList = document.querySelector('.taskList');
let deleImg = document.querySelector('.deleImg');
let deleteSound = new Audio('deleteSound.mp3');
let taskValue;
//function secction
//stora task in localstoarage
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

    let task = wrap_task.querySelector('.task');
    const deleteBtn = wrap_task.querySelector('.deleteBtn');
    //delete task when button clicked
    deleteBtn.addEventListener('click', () => {
        deleteSound.play();
        const interval= setInterval(()=>{
            opaciti = parseFloat(window.getComputedStyle(task, null).getPropertyValue('opacity'));
            console.log(opaciti);
            newOpa = opaciti - 0.05;
            task.style.opacity = `${newOpa}`;
            deleteBtn.style.opacity=`${newOpa}`;
            console.log(`New Opacity:${newOpa}`);
        },50);
        setTimeout(() => {
            wrap_task.remove();
            clearInterval(interval);
            storeToLocal();
        }, 1000)
        //to store the remaing element after remove() method call
    })
}
//main logic start here
btn.addEventListener('click', () => {
    taskValue = inputTask.value;
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
