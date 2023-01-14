let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('client-name').value;
    row.insertCell(1).innerHTML = document.getElementById('comments-type').value;
    row.insertCell(2).innerHTML = document.getElementById('meeting-time').value;
    let actions = row.insertCell(3);
    actions.appendChild(createRemoveButton(id++));
    document.getElementById('client-name').value='';
});

function createRemoveButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove'
    btn.onclick = () => {
        console.log(`Removing row with id: item-${id}`);
        let elementToRemove = document.getElementById(`item-${id}`);
        elementToRemove.parentNode.removeChild(elementToRemove);
    };
    return btn;
}