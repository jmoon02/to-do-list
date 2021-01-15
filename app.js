let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addToDo);

// Delete event
itemList.addEventListener('click', removeTodo);

// Search event
filter.addEventListener('keyup', filterTodo);

// Add Todo
function addToDo(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;
    // create new li 
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node
    li.appendChild(document.createTextNode(newItem));
    // append li to list
    itemList.appendChild(li);

    // create delete button
    let deleteBtn = document.createElement('button');
    // add class to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // add text node
    deleteBtn.appendChild(document.createTextNode('completed'));
    // append deleteBtn to li
    li.appendChild(deleteBtn);
}

// Remove Todo
function removeTodo(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Completed Task. Do you want to delete this task?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        };
    }
}

// Filter Todo
function filterTodo(e){
    let searchInput = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(searchInput) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}