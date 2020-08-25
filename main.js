const inputElement = document.getElementById("input");
const listElement = document.getElementById("list");
const todoList = [];

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    todoList.unshift({
      content: inputElement.value, //обьект со св-вом content
      selected: false, //выбран ли данный элемент или нет
      done: false, //св-во done яв-ся ли оно выполненым
    }); // после нажатия enter добавляем в массив объект
    inputElement.value = ""; //после добавления очищаем input
    updateView();
  }
});

function updateView() {
  listElement.innerHTML = ""; //чистка внутри ul

  for (let index = 0; index < todoList.length; index++) {
    //обошли массив, теперь есть переменная index которая хранит порядковый номер
    //перебираем с учетом порядка
    const todoItem = todoList[index];

    const liElement = document.createElement("li"); // создали li элемент
    liElement.className = "list-group-item"; // назначили класс
    listElement.append(liElement); //добавим в list элемент

    const divElement = document.createElement("div"); //создали div элемент
    divElement.className = "form-group form-check"; //назначили класс
    liElement.append(divElement); //добавим div в li элемент

    const checkboxElement = document.createElement("input"); //создали checkbox элемент
    divElement.append(checkboxElement); //добавили элемент
    checkboxElement.type = "checkbox"; //назначили тип
    checkboxElement.className = "form-check-input"; //назначили класс
    checkboxElement.checked = todoItem.selected; //если todoItem выбран, то будет включен checked
    checkboxElement.id = "todoItem" + index;

    const labelElement = document.createElement("label"); //создали label элемент
    divElement.append(labelElement); // добавили элемент
    labelElement.className = "form-check-label"; //назначили класс
    if (todoItem.done) {
      //если todoitem выполнен, назначаем ему класс todoDone
      labelElement.className += " todoDone";
    }
    labelElement.setAttribute("for", "todoItem" + index); //задали for
    labelElement.innerText = todoItem.content; // подставляем контент которые пишем в input

    const buttonDoneElement = document.createElement("button"); //создали button элемент
    divElement.append(buttonDoneElement); //добавили элемент
    buttonDoneElement.type = "button"; //назначили тип
    buttonDoneElement.className = "btn btn-outline-primary"; //назначили класс
    buttonDoneElement.innerText = "Done"; // дали название

    const buttonRemoveElement = document.createElement("button"); //создали button элемент
    divElement.append(buttonRemoveElement); //добавили элемент
    buttonRemoveElement.type = "button"; //назначили тип
    buttonRemoveElement.className = "btn btn-outline-danger"; //назначили класс
    buttonRemoveElement.innerText = "Remove"; // дали название

    buttonDoneElement.addEventListener("click", () => {
      todoItem.done = !todoItem.done; //меняем событие на противоположное
      updateView(); //обновляем вид
    });
  }
}

document.getElementById("doneAction").addEventListener("click", () => {
  for (const todoItem of todoList) {
    //перебираем элементы массива
    if (todoItem.selected) {
      todoItem.done = true;
    }

    todoItem.selected = false;
  }

  updateView();
});
