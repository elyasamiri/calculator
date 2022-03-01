const items = document.getElementById('items')
const form = document.querySelector('form')
const input = document.getElementById('item-input')

form.onsubmit = (event) => {
    event.preventDefault()
    if (!input.value) {
        alert('its empty!');
        return;
    }
    const item = document.createElement('li')
    const text = document.createElement('span')
    const delBtn = document.createElement('button')

    item.appendChild(text);
    item.appendChild(delBtn);


    text.textContent = input.value;
    delBtn.textContent='delete'

    item.className = 'list-group-item d-flex justify-content-between'
    text.className = 'lead';
    delBtn.className = 'btn btn-danger'
    
    //on delete
    delBtn.onclick = function() {
        delBtn.remove()
        text.remove()
        item.remove()
    }
    
    input.value = '' //reset input
    items.appendChild(item)
}