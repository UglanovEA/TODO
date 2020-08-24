const selectAllButton = document.getElementById("test");
const inputElement = document.getElementById("input");
const todoList = [];

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    todoList.push(inputElement.value);
    inputElement.value = "";
  }
});
