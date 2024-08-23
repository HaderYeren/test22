const button = document.getElementById('myButton');
const inputField = document.getElementById('inputField');
button.addEventListener('click', () => {
    button.textContent = inputField.value;
});

const image = document.getElementById('myImage');
image.src = 'new-image.jpg';

const link = document.getElementById('myLink');
const linkImage = document.getElementById('linkImage');
link.href = 'https://new-url.com';
linkImage.alt = 'Опис нового зображення';

const firstItem = document.getElementById('firstItem');
firstItem.textContent = 'Новий текст для першого елемента';