const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // User's input in the place holder will get accessed here
    const name = inputElement.value; // Accessing the user's input
    todoList.push(name);
    console.log(todoList);

    inputElement.value = ''; // Reset the input in the text box
}