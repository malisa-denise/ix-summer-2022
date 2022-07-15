// Single Element Selector
const row = document.getElementById('jacques-row');
// console.log(row);

// Multi Element Selector
const rows = document.getElementsByTagName('td');
const names = document.getElementsByClassName('name');
const namedRows = document.getElementsByName('row');

// console.log(namedRows);



// DOM Tree Traversal

// each element has children
// accessed by element.children

// each element has a parent
// accessed by element.parentElement



// Create/Editing and Removing Elements
const tableBody = document.getElementById('table-body');

const newRow = document.createElement('tr');
const nameCell = document.createElement('td');
const surnameCell = document.createElement('td');

nameCell.innerHTML = 'Michelle';
surnameCell.innerHTML = 'Fisher';

newRow.append(nameCell);
newRow.append(surnameCell);

tableBody.append(newRow);

// Add Event Listeners to DOM Elements
const removeButton = document.getElementById('remove-button');

removeButton.addEventListener('click', (event) => {
  // this is how we remove elements from the DOM
  //  user the remove() function
  // event.target.parentElement.parentElement.remove();

  // this is how we manage event bubbling 
  event.stopPropagation();

  console.log(event);
});

tableBody.addEventListener('click', (event) => {
  console.log(event);
});

// tableBody.addEventListener('mousemove', (event) => {
//   console.log(event);
// });


// Creating and Editing Attributes
tableBody.classList.add('green');

if (tableBody.classList.contains('green')) {
  tableBody.classList.remove('green');
}

tableBody.setAttribute('name', 'something different');

console.log(tableBody.getAttribute('id'));



// local storage
const input = document.getElementById('text-input');

const savedText = localStorage.getItem('text');
if (savedText) {
  input.value = savedText;
}

input.addEventListener('change', (event) => {

  // console.log(input.value);
  localStorage.setItem('text', input.value);
});


