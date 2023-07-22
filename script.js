//let's start by creating variables that are needed i have used getelemenetbyid and queryselector
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonid = document.getElementById('clicked');

//let's create a fumction to add the task when the button is clicked
const buttonClicked = () => {
    if(inputBox.value === ''){
        alert('you must write something!')
    } else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};
//functionality to add task enter is pressed instead of pressing the add button
//or can be used if(e.keyCode === 13) ||  if(e.key === 'Enter')
document.addEventListener('keyup', (e)=> {
    if(e.code === "Enter"){
        buttonClicked();
    }
});

//this function will catch the events of list items  
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

//helps to save all the data to local storage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}
//helps to show the save data
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
