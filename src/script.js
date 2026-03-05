"use strict";

let selectedPriority = "";
let selectedStatus = "";

// form
function openForm() {
  selectedPriority = "";
  selectedStatus = "";
  document.getElementById("form-container").classList.remove("hidden");
  document.getElementById("input-task").value = "";

  document.querySelectorAll(".priority-btn").forEach((btn) => {
    btn.classList.remove(
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "text-white",
    );
  });

  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.classList.remove("bg-cyan-500", "text-white");
  });
}

function selectPriority(priority, button) {
  document.querySelectorAll(".priority-btn").forEach((btn) => {
    btn.classList.remove(
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "text-white",
    );
  });

  if (priority === "High") {
    button.classList.add("bg-red-500", "text-white");
  } else if (priority === "Medium") {
    button.classList.add("bg-yellow-500", "text-white");
  } else if (priority === "Low") {
    button.classList.add("bg-green-500", "text-white");
  }
  selectedPriority = priority;
}

function selectStatus(status, button) {
  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.classList.remove("bg-cyan-500", "text-white");
  });

  button.classList.add("bg-cyan-500", "text-white");
  selectedStatus = status;
}

function AddTask() {
  const taskInput = document.getElementById("input-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let priority = selectedPriority;
  let status = selectedStatus;
  let priorityColor = "";
  let defaultValue = "";
  if (selectedPriority === "High") priorityColor = "red";
  else if (selectedPriority === "Medium") priorityColor = "yellow";
  else if (selectedPriority === "Low") priorityColor = "green";

  if (selectedPriority === "") {
    priority = "Medium";
  }

  if (selectedStatus === "") {
    status = "To Do";
  }

  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");

taskItem.className =
    "flex justify-between items-center p-3 rounded-lg";
  taskItem.innerHTML = `
        <div class="flex items-center gap-3">
            <span class=" bg-${priorityColor}-500 p-"></span>
            <span >${taskText}</span>
            <span class="text-xs px-2 py-1 bg-${priorityColor}-100 text-${priorityColor}-700">
                ${selectedPriority}
            </span>
            <span>${selectedStatus}</span>
        </div>
        <button onclick="deleteTask(this)" >
            <i class="fa-regular fa-pen-to-square" style="color: rgb(116, 192, 252);"></i>
            <i class="fa-regular fa-trash-can" style="color: rgb(252, 135, 116);"></i>
        </button>
    `;

  taskList.appendChild(taskItem);
  closeForm();
}

function deleteTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}

function closeForm() {
  document.getElementById("form-container").classList.add("hidden");
}

const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function displayStaticTasks() {
  const taskList = document.getElementById("task-list");

  for (let i = 0; i < listHomework.length; i++) {
    const task = listHomework[i];

    let priorityColor = "";
    if (task.priority === "High") priorityColor = "red";
    else if (task.priority === "Medium") priorityColor = "yellow";
    else if (task.priority === "Low") priorityColor = "green";

    const taskItem = document.createElement("li");
    taskItem.className =
      "gap-[8px] flex justify-between items-center p-3 rounded-tl-lg rounded-br-lg mb-3";

    taskItem.innerHTML = `
        <div class="flex items-center gap-3">
            <span class=" bg-${priorityColor}-500"></span>
            <span >${task.task}</span>
            <span class="bg-${priorityColor}-100 text-${priorityColor}-700">
                ${task.priority}
            </span>
            <span>${task.status}</span>
        </div>
        <button onclick="deleteTask(this)">
            <i class="fa-regular fa-pen-to-square" style="color: rgb(116, 192, 252);"></i>
            <i class="fa-regular fa-trash-can" style="color: rgb(252, 135, 116);"></i>
        </button>
    `;

    taskList.appendChild(taskItem);
  }
}

const listHomework = [
  { task: "Web Homework", priority: "High", status: "Progress" },
  { task: "Jva Homework", priority: "Medium", status: "To Do" },
  { task: "Web Homework", priority: "Low", status: "Done" },
];

displayStaticTasks();
