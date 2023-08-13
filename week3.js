const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
//adding user entered tasks to the list
function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something!");
    }
    else {
        let li = document.createElement("li");//creating li 
        li.innerHTML = inputBox.value;//adding user entered text from input box to li
        listContainer.appendChild(li);//adding li to the code
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";//adding a cross sign 
        li.appendChild(span);
    }
    inputBox.value = '';//emptying input box after adding user entered task to the list
    saveData();// calling savedata function
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");//if contents of li are clicked, check the box
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();//if the cross is clicked delete the task
    }


}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);//saves data entered by user even if page is refreshed
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");//shows previously saved data
}
showTask();