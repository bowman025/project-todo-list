import { displayProject } from "./DOMmain.js";
import { addProject, projectList } from "./projects.js";

const sideList = document.querySelector(".side-list");

const displayList = (projectList) => {
    projectList.forEach(project => {
        const listItem = document.createElement("button");
        listItem.classList.add("side-item");
        listItem.textContent = project.title;
        sideList.appendChild(listItem);
        listItem.onclick = () => displayProject(project);
    });
}

const emptyList = () => {
    while(sideList.firstChild) {
        sideList.removeChild(sideList.firstChild);
    };
}

const addProjectToList = () => {
    const projectInputBox = document.createElement("input");
    projectInputBox.setAttribute("id", "side-input-box");
    projectInputBox.setAttribute("type", "text");
    projectInputBox.setAttribute("name", "title");
    projectInputBox.setAttribute("minlength", "4");
    projectInputBox.setAttribute("maxlength", "48");
    projectInputBox.setAttribute("placeholder", "New Project");
    const projectInputButton = document.createElement("button");
    projectInputButton.classList.add("side-input-button");
    projectInputButton.setAttribute("type", "submit");
    projectInputButton.textContent = "Add";
    const projectInput = document.createElement("form");
    projectInput.classList.add("side-input");
    projectInput.append(projectInputBox, projectInputButton);
    sideList.insertAdjacentElement("afterend", projectInput);
    projectInput.addEventListener("submit", (e) => {
        e.preventDefault();
        if(projectInputBox.value === "") {
            projectInputBox.value = "New Project";
        }
        addProject(projectInputBox.value);
        projectInputBox.value = "";
        emptyList();
        displayList(projectList);
        console.log(projectList);
    })
}

export { displayList, addProjectToList };