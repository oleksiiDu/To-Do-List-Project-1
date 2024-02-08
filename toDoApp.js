const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

const addTask = () => {
    if (inputBox.value === "") {
        alert("You should enter the text!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
};

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else {
        return false;
    };
});

showTask();