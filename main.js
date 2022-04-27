var todoWrapper = document.querySelector('.todo__wrapper');
var input = document.querySelector('.todo__input');
var addBtn = document.querySelector('.icon-add');
var deleteAllBtn = document.querySelector('.icon-delete');
var completedBtn = document.querySelector('.icon-completed');
var removeBtn = document.querySelector('.icon-trash');

addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  /* Create elements */
  if (input.value.trim()) {
    /* UL */
    var ulTag = document.createElement('ul');
    ulTag.classList.add('todo-list__items');

    /* LI */
    var liTag = document.createElement('li');
    liTag.innerText = input.value;
    liTag.classList.add('todo-list__item');

    /* Button */
    var buttonDiv = document.createElement('div');
    buttonDiv.classList.add('todo-list__button');

    /* Completed button  */
    var completedBtn = document.createElement('button');
    completedBtn.classList.add('icon-completed');
    completedBtn.innerHTML = '<i class="ri-check-line"></i>';

    /* Edit button */
    var editBtn = document.createElement('button');
    editBtn.classList.add('icon-edit');
    editBtn.innerHTML = '<i class="ri-edit-2-fill"></i>';
    editBtn.onclick = function () {
      editWorking(liTag);
    };

    /* Trash button */
    var trashBtn = document.createElement('button');
    trashBtn.classList.add('icon-trash');
    trashBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';

    /* Appending Elements into each other */
    ulTag.appendChild(liTag);
    liTag.appendChild(buttonDiv);
    buttonDiv.appendChild(completedBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(trashBtn);

    /* if input is empty then don't display empty list in DOM */
    todoWrapper.appendChild(ulTag);

    /* sessionStorage */
    /* when the add button click clear the input value */
    input.value = '';
    /* completed and trash button working */
    liTag.addEventListener('click', function (e) {
      var items = e.target;
      if (items.classList[0] === 'icon-completed') {
        var todo = items.parentElement;
        var todo2 = todo.parentElement;
        todo2.classList.add('line-through');
      } else if (items.classList[0] === 'icon-trash') {
        var todo = items.parentElement;
        var todo2 = todo.parentElement;
        todo2.classList.add('fall');
        todo2.addEventListener('transitionend', function () {
          var todo3 = todo2.parentElement;
          todo3.remove();
        });
      }
    });
  } else if (input.value === '') {
    alert('please fill the input field');
  }
});

function editWorking(e) {
  var editValue = prompt('edit the select item', e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}

function deleteAllElements() {
  var gettingUlTag = document.querySelectorAll('.todo-list__items');
  for (var i = 0; i < gettingUlTag.length; i++) {
    gettingUlTag[i].remove();
  }
  input.value = '';
}
