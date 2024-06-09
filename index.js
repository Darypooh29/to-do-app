// Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Task container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTastkState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

const changeTastkState = (event) => {
  event.target.classList.toggle("task-done");
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((task) => {
    task.classList.contains("task-done") ? done.push(task) : toDo.push(task);
  });
  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((task) => tasksContainer.appendChild(task));
};

setDate();
