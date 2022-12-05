const body = document.querySelector('body');
const todoRegisteredTasks = document.querySelector('.todoRegisteredTasks');
const todoInput = document.querySelector('#todoInput');
const addTask = document.querySelector('.addTask');
const todo = document.querySelector('.todo');

//Eventos Editar e excluir tarefa
todoRegisteredTasks.addEventListener('click', (e) => {
    clas = e.target;
    if(e.target.classList.contains('deleteTask')){
        if(confirm("Deseja realmente excluir a tarefa?")){
            todoRegisteredTasks.removeChild(e.target.parentNode.parentNode);
        }
    }

    if(e.target.classList.contains('editTask')){
        const oldTaskBackup = e.target.parentNode.previousElementSibling.innerText;
        e.target.parentNode.previousElementSibling.remove('span');
        const inputForEdit = document.createElement('input');
        inputForEdit.type='text';
        e.target.parentNode.parentNode.prepend(inputForEdit);
        inputForEdit.value = oldTaskBackup;
        inputForEdit.focus();
        inputForEdit.addEventListener('keyup', (e) => {
            if(e.key == 'Enter'){
                const newTaskName = document.querySelector('.task input');
                e.target.parentNode.innerHTML = `
                    <span>${newTaskName.value}</span>
                    <div>
                        <button class="editTask"><i class="fa fa-pen" ></i></button>
                        <button class="deleteTask"><i class="fa fa-trash" ></i></button>
                    </div>
                `;
            }
        })
    }
});


//eventos para adicionar tarefa pelo botao ou pelo enter no teclado

todoInput.addEventListener('click', (e) => {
    const task = todoInput.value;
    createTask(task);
});


todoInput.addEventListener('keyup', (e) => {
    if(e.key == "Enter"){
        const task = todoInput.value;
        createTask(task);
    }
});


//Evento para marcar a tarefa como concluída
todoRegisteredTasks.addEventListener('click', (task) => {
    const taskClass = task.target.classList.value;
    if(taskClass === 'task ativo'){
        task.target.classList.value = 'task';
    }else if(taskClass === 'task'){
        task.target.classList.value+= ' ativo';
    }
});



//Functions
function createTask(task){
    //Encerra a função sem adicionar nada caso o input esteja vazio
    if(task === ''){
        return
    }

    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="editTask"><i class="fa fa-pen" ></i></button>
            <button class="deleteTask"><i class="fa fa-trash" ></i></button>
        </div>
    `;
    todoRegisteredTasks.appendChild(div);
    todoInput.value = "";
}
