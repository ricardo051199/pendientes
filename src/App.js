const form = document.querySelector("#todo-form");

const todo = document.querySelector("#todo-input");
const work = document.querySelector("#work-input");

form.addEventListener("submit", (event) => {
    alert("Todo : " + todo.value + "  " + "Work : " + work.value);
});