/* import { createItems, Item, exampleItemOne, exampleItemTwo } from "./modules/items.js";
import { projectList, addProject, removeProject, addItem, removeItem } from "./modules/projects.js"; */

export const displayProject = (project) => {
    const content = document.querySelector(".content");
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    project.items.forEach(item => {
        const projectItem = document.createElement("ul");
        projectItem.classList.add("project-item", `project-item-${project.items.indexOf(item)+1}`);
        const projectItemTitle = document.createElement("li");
        projectItemTitle.textContent = item.title;
        const projectItemDesc = document.createElement("li");
        projectItemDesc.textContent = "Description: " + item.description;
        const ProjectItemDate = document.createElement("li");
        ProjectItemDate.textContent = "Due: " + item.dueDate;
        const projectItemPriority = document.createElement("li");
        projectItemPriority.textContent = "Priority: " + item.priority;
        const projectItemNotes = document.createElement("li");
        projectItemNotes.textContent = "Notes: " + item.notes;
        const ProjectItemChecked = document.createElement("li");
        ProjectItemChecked.textContent = "Completed: " + item.checked;
        projectItem.append(projectItemTitle, projectItemDesc, ProjectItemDate, projectItemPriority, projectItemNotes, ProjectItemChecked);
        projectCard.appendChild(projectItem);
    });
    content.replaceChildren(projectCard);
}