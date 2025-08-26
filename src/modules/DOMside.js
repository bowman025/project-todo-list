import { createItems, Item, exampleItemOne, exampleItemTwo } from "./items.js";
import { projectList, addProject, removeProject, addItem, removeItem } from "./projects.js";

export const displayList = () => {
    const sidebar = document.querySelector(".sidebar");
    const sideList = document.querySelector(".side-list");
    projectList.forEach(project => {
        const listItem = document.createElement("li");
        listItem.classList.add("side-item");
        listItem.textContent = `My Project ${projectList.indexOf(project)+1}`;
        sideList.appendChild(listItem);
    });
};