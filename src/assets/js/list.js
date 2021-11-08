const generateItem = (id, content) => {
  const newListElement = document.createElement('li');
  newListElement.id = `item-${id}`;
  newListElement.innerHTML = `<input type="checkbox" class="mark-item" id="mark-item-${id}" data-item-id="${id}">
        <label for="mark-item-${id}">${content}</label>
        <button id="delete-item-${id}">Delete</button>`;

  return newListElement;
};

const checkItem = (e) => {
  const { itemId } = e.currentTarget.dataset;
  document.querySelector(`#item-${itemId} > label`).classList.add('line-through');
};

function clickCheckbox() {
  document.querySelectorAll('.mark-item').forEach((checkbox) => {
    checkbox.addEventListener('click', checkItem);
  });
}

clickCheckbox();

const addItem = () => {
  const itemsListEl = document.querySelector('#items-list');
  const inputValue = document.querySelector('#add-item-input').value;
  const listElementsCount = itemsListEl.childElementCount;

  itemsListEl.append(generateItem(listElementsCount + 1, inputValue));
  clickCheckbox();
};

document.querySelector('#add-item-button').addEventListener('click', addItem);
