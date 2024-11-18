const contentEl = document.querySelector('.content');
const fetchBtn = document.querySelector('.submitEl');

// DONT USE THIS
// const getTodos = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Something went wrong! ' + err));
// };

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await res.json();

  data.forEach((todo) => {
    const todoEl = document.createElement('div');

    todoEl.innerHTML = `
        <h1 class="text-xl font-bold"> ${todo.title} </h1>
        <p> ${todo.completed ? 'Completed' : 'Not Completed'} </p>
    `;

    todoEl.classList.add('border', 'border-2', 'p-4', 'rounded-xl');

    contentEl.appendChild(todoEl);
  });
};

document.addEventListener('DOMContentLoaded', getTodos);
