// todo list
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
function addTodo(event)
{
    console.log('hi')
event.preventDefault();
const todoDiv=document.createElement('div');
todoDiv.classList.add("todo");
const newTodo=document.createElement('li');
newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
saveLocalTodos(todoInput.value);
const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="las la-check"></i>'
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="las la-trash"></i>'
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
todoList.append(todoDiv);
todoInput.value="";
}

function deletecheck(e)
{

    const item=e.target;
    if(item.classList[0]==='trash-btn')
    {
         const todo=item.parentElement;
         todo.addEventListener('transitionend',function(){
             todo.remove();
         });
         todo.classList.add("fall");
         
    }
    if(item.classList[0]==='complete-btn')
    {
        const todo= item.parentElement;
        todo.classList.toggle('completed');

    }
}
function saveLocalTodos(todo){
let todos;
if(localStorage.getItem('todos')===null)
todos=[];
else{
    todos=JSON.parse(localStorage.getItem('todos'));
}
todos.push(todo);
localStorage.setItem('todos', JSON.stringify(todos));
}

// timer
const countdown= () => {
    const countDate =new Date("May 11, 2021 00:00:00").getTime();
    const now=new Date().getTime();
    const gap=countDate - now;
    
    const second=1000;
    const minute=second*60;
    const hour= minute*60;
    const day= hour*24;
    const textDay=Math.floor(gap/day);
    
    const textHour=Math.floor((gap%day)/hour);
    const textMinute=Math.floor((gap%hour)/minute);
    const textSecond=Math.floor((gap%minute)/second);
    document.querySelector(".day").innerText=textDay;
    document.querySelector(".hour").innerText=textHour;
    document.querySelector(".minute").innerText=textMinute;
    document.querySelector(".second").innerText=textSecond;
};
setInterval(countdown,1000);


// toggle menu
// const togglebtn=document.querySelector(".menu-toggle");
// const sidemenu=document.querySelector(".sidebar");
// const main=document.querySelector(".main-content");
// let i=2;
// togglebtn.addEventListener('click', menu);
// function menu(event)
// {
//     if(i%2==0)
//     {
//         sidemenu.style.display="none";
//         sidemenu.style.left="-100%";
       
//         i++;
//     }
//     else{
//         sidemenu.style.display="block";
//         sidemenu.style.left="100%";
//         i++;
//     }
// }