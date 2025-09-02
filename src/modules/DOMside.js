import { displayProject, content } from "./DOMmain.js";
import { projectList, addProject, removeProject } from "./projects.js";
import trashcan from "../img/trash-can-outline.svg";
import enter from "../img/arrow-collapse-left.svg";

const sideList = document.querySelector(".side-list");

const displayList = (projectList) => {
    const myProjects = document.createElement("h2");
    myProjects.classList.add("side-my-projects");
    myProjects.textContent = "My Projects";
    sideList.appendChild(myProjects);
    projectList.forEach(project => {
        const item = document.createElement("div");
        item.classList.add("side-items");
        const listItem = document.createElement("button");
        listItem.classList.add("side-item");
        listItem.textContent = project.title;
        const removeItem = document.createElement("button");
        removeItem.classList.add("remove-side-item");
        const removeItemIcon = document.createElement("img");
        removeItemIcon.classList.add("remove-side-item-icon");
        removeItemIcon.src = trashcan;
        removeItem.appendChild(removeItemIcon);
        item.append(listItem, removeItem);
        sideList.appendChild(item);
        listItem.onclick = () => displayProject(project);
        removeItem.onclick = () => {
            removeProject(projectList.indexOf(project));
            sideList.removeChild(item);
            console.log("Removed.");
            console.log(projectList);
            if(content.firstChild === null) return;
            else if(content.firstChild.getAttribute("data-id") === project.dataID) {
                while(content.firstChild) {
                    content.removeChild(content.firstChild);
                }
            }
        }
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
    const projectInputImage = document.createElement("img");
    projectInputImage.classList.add("side-input-image");
    projectInputImage.src = enter;
    projectInputButton.appendChild(projectInputImage);
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
    });
}

export { displayList, addProjectToList };