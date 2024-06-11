// grab HTML elements needed
/*
Grab:
.to-do-list
.to-do-text
.delete
#addtaskbttn
#task-input
*/
const toDoList = document.getElementById('to-do-list');
const toDoText = document.getElementsByClassName('to-do-text');
const deleteBttn = document.getElementsByClassName('delete');
const addTaskBttn = document.getElementById('addtaskbttn');
const taskInput = document.getElementById('task-input');


// Add task when new task button is pressed
function addTask(){
  // Create li
  let li = document.createElement('li');
  // add to-do class to li
  li.classList.add('to-do');

  // Create p
  let para = document.createElement('p');

  // Add to-do-text class to para
  para.classList.add('to-do-text');

  // create Text node and add to para if text input is not empty
  if(taskInput.value != ""){
    let text = document.createTextNode(taskInput.value)
    para.appendChild(text);
  } else {
    alert("Please type in a new task!");
    return;
  }

  // Create trashcan
  let trashcan = document.createElement('i');
  trashcan.classList.add('fa-solid');
  trashcan.classList.add('fa-trash');
  trashcan.classList.add('delete');

  // add delete class to trashcan
  trashcan.classList.add('delete')

  // Append p and trashcan to li
  li.appendChild(para);
  li.appendChild(trashcan);

  // Append li to to-do-list
  toDoList.appendChild(li);

  // Reset input value to be blank
  taskInput.value = ""

  // Call completeTask to ensure new tasks can be marked off
  completeTask();

  // Call deleteTask to ensure new tasks can be marked off
  deleteTask();
}
// cross out task when finished
function completeTask() {
  for (let i = 0; i < toDoText.length; i++){
    toDoText[i].addEventListener('click', () => {
        toDoText[i].style.textDecoration = 'line-through';
        triggerConfetti();
    });
  }
}

// Delete task function
function deleteTask() {
  for(let i = 0; i < deleteBttn.length; i++){
        deleteBttn[i].addEventListener('click',function(event) {
          event.stopPropagation();
          const listItem = this.parentNode;
          listItem.remove();
        } )
      }
}

// add task button
addTaskBttn.addEventListener('click', addTask);

// confetti function
function triggerConfetti() {
    const config = {
        particleCount: 100,
        spread: 160,
        startVelocity: 40,
        decay: 0.9
    };
    confetti(config);
}

// Call completeTask initially
completeTask();

// call deleteTask initially
deleteTask();