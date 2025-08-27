/* import { createItems, Item, exampleItemOne, exampleItemTwo } from "./items.js";
import { projectList, addProject, removeProject, addItem, removeItem } from "./projects.js"; */
import { displayProject } from "./DOMmain.js";

export const displayList = (projectList) => {
    const sideList = document.querySelector(".side-list");
    projectList.forEach(project => {
        const listItem = document.createElement("button");
        listItem.classList.add("side-item");
        listItem.textContent = project.title;
        sideList.appendChild(listItem);
        listItem.onclick = () => displayProject(project);
    });
};