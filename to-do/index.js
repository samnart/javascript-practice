/* eslint-disable indent */
const todoText = document.getElementById('todoText').value;
// const todo-item = document.getElementById('todo-item');

// eslint-disable-next-line no-unused-vars
let addTodo = () => {
	if (todoText != '') {
        setData(todoText);
        listTodo();
	}
};

let listTodo = () => {
    let html = '';
    let data = getData();
    if (data) {
        html += '<ol>';
        data.forEach((value, item) => {
            html += `<li>${value} &nbsp;&nbsp;&nbsp;<button onclick="removeData(${item})">Remove</button></li>`;
        });
        html += '</on>';
    }
    document.getElementById('todo-item').innerHTML = html;
};

let getData = (item = null) => {
    let data = JSON.parse(localStorage.getItem('mytodo'));
    if (data) {
        if (item) {
            if (data.indexOf(item) != -1) {
                return data[item];
            } else {
                return false;
            }
        }
        return data;
    }
    return false;
};

listTodo();

let setData = (item) => {
    if (getData(item) != false) {
        alert('Item alreadd exist in todo!');
    } else {
        let data = getData();
        data = (data != false) ? data : [];
        data.push(item);
        data = JSON.stringify(data);
        localStorage('mytodo', data);
    }
};

// eslint-disable-next-line no-unused-vars
let removeData = (itemId) => {
    let data = getData();
    if (data) {
        let newData = data.filter((v, i) => { return i != itemId; });
        newData = JSON.stringify(newData);
        localStorage.setItem('mytodo', newData);
        listTodo();
    } else {
        alert('no data found');
    }
};