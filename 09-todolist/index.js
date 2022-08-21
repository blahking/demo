const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

if (list) {
  list.forEach(task => {
    addTodo(task);
  });
}

formEl.addEventListener("submit", e => {
  e.preventDefault();
  addTodo();
});

function addTodo(task) {
  let todo = inputEl.value;

  if (task) {
    todo = task.name;
  }

  if (!todo) return;

  const liEl = document.createElement("li");

  liEl.innerHTML = `
      <span class="todo-text">${todo}</span>
      <span>
        <i class="fa-solid fa-square-check"></i>
        <i class="fa-solid fa-trash-can"></i>
      </span>`;

  if (task && task.checked) {
    liEl.classList.add("checked");
  }

  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkBtn = liEl.querySelector(".fa-square-check");

  checkBtn.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  const deleteBtn = liEl.querySelector(".fa-trash-can");

  deleteBtn.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");

  list = [];
  liEls.forEach(liEl => {
    list.push({
      name: liEl.querySelector(".todo-text").innerText,
      checked: liEl.classList.contains("checked"),
    });
  });

  localStorage.setItem("list", JSON.stringify(list));
}
