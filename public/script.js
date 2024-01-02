// document.addEventListener('DOMContentLoaded', function () {
//     // Fetch tasks from the server and render them
//     fetchTasks();
//   });
  
//   function fetchTasks() {
//     fetch('/tasks')
//       .then(response => response.json())
//       .then(tasks => renderTasks(tasks));
//   }
  
//   function renderTasks(tasks) {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';
  
//     tasks.forEach(task => {
//       const listItem = document.createElement('li');
//       listItem.textContent = task;
//       taskList.appendChild(listItem);
//     });
//   }
  
//   function addTask() {
//     const newTaskInput = document.getElementById('newTaskInput');
//     const newTask = newTaskInput.value.trim();
  
//     if (newTask !== '') {
//       fetch('/tasks', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ task: newTask }),
//       })
//         .then(response => response.json())
//         .then(tasks => {
//           renderTasks(tasks);
//           newTaskInput.value = '';
//         });
//     }
//   }

document.addEventListener('DOMContentLoaded', function () {
    // Fetch tasks from the server and render them
    fetchTasks();
  
    // Add event listener to the input field for Enter key
    const newTaskInput = document.getElementById('newTaskInput');
    newTaskInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  
  function fetchTasks() {
    fetch('/tasks')
      .then(response => response.json())
      .then(tasks => renderTasks(tasks));
  }
  
  function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
  
      // Create a div for the task text
      const taskTextDiv = document.createElement('div');
      taskTextDiv.classList.add('task-text');
      taskTextDiv.textContent = task;
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteTask(index);
  
      // Append the task text div and delete button to the list item
      listItem.appendChild(taskTextDiv);
      listItem.appendChild(deleteButton);
  
      // Append the list item to the task list
      taskList.appendChild(listItem);
    });
  }
  
  function addTask() {
    const newTaskInput = document.getElementById('newTaskInput');
    const newTask = newTaskInput.value.trim();
  
    if (newTask !== '') {
      fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
      })
        .then(response => response.json())
        .then(tasks => {
          renderTasks(tasks);
          newTaskInput.value = '';
        });
    }
  }
  
  function deleteTask(index) {
    fetch('/tasks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ index }),
    })
      .then(response => response.json())
      .then(tasks => renderTasks(tasks));
  }
  