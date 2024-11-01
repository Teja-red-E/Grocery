document.getElementById('grocery-form').addEventListener('submit', function (event) {
    event.preventDefault();


    const groceryItem = document.getElementById('grocery-item').value;
    const groceryQuantity = document.getElementById('grocery-quantity').value;


    const listItem = document.createElement('li');
    listItem.textContent = `${groceryItem} - ${groceryQuantity} kg`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);

    document.getElementById('grocery-list').appendChild(listItem);

    document.getElementById('grocery-item').value = '';
    document.getElementById('grocery-quantity').value = '';
});
