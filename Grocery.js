document.getElementById('grocery-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the grocery item and quantity from inputs
    const groceryItem = document.getElementById('grocery-item').value;
    const groceryQuantity = document.getElementById('grocery-quantity').value;

    // Create list item with the grocery item and quantity
    const listItem = document.createElement('li');
    listItem.textContent = `${groceryItem} - ${groceryQuantity} kg`;

    // Add delete button to each item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);

    // Append item to the grocery list
    document.getElementById('grocery-list').appendChild(listItem);

    // Clear the input fields
    document.getElementById('grocery-item').value = '';
    document.getElementById('grocery-quantity').value = '';
});
