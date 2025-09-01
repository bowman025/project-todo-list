import { Item, addItem, removeItem } from "./items";
import { storeItem, unstoreItem } from "./storage";
import trashcan from "../img/trash-can-outline.svg";
import note from "../img/note-plus-outline.svg";

const main = document.querySelector("main");
const content = document.querySelector(".content");

const createDialog = function() {
    const itemDialog = document.createElement("dialog");
    itemDialog.classList.add("new-item-dialog");
    itemDialog.setAttribute("closedby", "any");
    const itemForm = document.createElement("form");
    itemForm.classList.add("new-item-form");
    itemForm.setAttribute("method", "");
    const div1 = document.createElement("div");
    div1.classList.add("input");
    const label1 = document.createElement("label");
    label1.setAttribute("for", "title");
    label1.textContent = "Title: ";
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");
    input1.setAttribute("id", "title");
    div1.append(label1, input1);
    const div2 = document.createElement("div");
    div2.classList.add("input");
    const label2 = document.createElement("label");
    label2.setAttribute("for", "description");
    label2.textContent = "Description: ";
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "description");
    input2.setAttribute("id", "description");
    div2.append(label2, input2);
    const div3 = document.createElement("div");
    div3.classList.add("input");
    const label3 = document.createElement("label");
    label3.setAttribute("for", "date");
    label3.textContent = "Due Date: ";
    const input3 = document.createElement("input");
    input3.setAttribute("type", "date");
    input3.setAttribute("name", "date");
    input3.setAttribute("id", "date");
    div3.append(label3, input3);
    const div4 = document.createElement("div");
    div4.classList.add("input");
    const label4 = document.createElement("label");
    label4.setAttribute("for", "priority");
    label4.textContent = "Priority: ";
    const select = document.createElement("select");
    select.setAttribute("name", "priority");
    select.setAttribute("id", "priority");
    const option1 = document.createElement("option");
    option1.setAttribute("value", "low");
    option1.classList.add("option", "option-1");
    option1.textContent = "Low";
    const option2 = document.createElement("option");
    option2.setAttribute("value", "medium");
    option2.classList.add("option", "option-2");
    option2.textContent = "Medium";
    const option3 = document.createElement("option");
    option3.setAttribute("value", "high");
    option3.classList.add("option", "option-3");
    option3.textContent = "High";
    select.append(option1, option2, option3);
    div4.append(label4, select);
    const div5 = document.createElement("div");
    div5.classList.add("input");
    const label5 = document.createElement("label");
    label5.setAttribute("for", "notes");
    label5.textContent = "Notes: ";
    const input5 = document.createElement("textarea");
    input5.setAttribute("name", "notes");
    input5.setAttribute("id", "notes");
    div5.append(label5, input5);
    const div6 = document.createElement("div");
    div6.classList.add("input", "input-submit");
    const button = document.createElement("button");
    button.classList.add("input-submit-button");
    button.textContent = "Add";
    div6.appendChild(button);
    itemForm.append(div1, div2, div3, div4, div5, div6);
    itemDialog.appendChild(itemForm);
    return [itemDialog, itemForm, button];
}

const displayProject = (project) => {
    const [newDialog, newForm, newButton] = createDialog();
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    const displayProjectItems = () => {
    project.items.forEach(item => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item", `project-item-${project.items.indexOf(item)+1}`);
        projectItem.addEventListener("click", () => {
            if(projectItem.style.width === "") {
            projectItem.style.width = "65%";
            } else {
            projectItem.style.width = "";
            }
        });
        const projectItemText = document.createElement("ul");
        projectItemText.classList.add("project-item-text", `project-item-${project.items.indexOf(item)+1}`)
        const projectItemTitle = document.createElement("li");
        projectItemTitle.textContent = "Title: " + item.title;
        const projectItemDesc = document.createElement("li");
        projectItemDesc.textContent = "Description: " + item.description;
        const projectItemDate = document.createElement("li");
        projectItemDate.textContent = "Due: " + item.dueDate;
        const projectItemPriority = document.createElement("li");
        projectItemPriority.textContent = "Priority: " + item.priority;
        const projectItemNotes = document.createElement("li");
        projectItemNotes.textContent = "Notes: " + item.notes;
        const projectItemChecked = document.createElement("li");
        projectItemChecked.textContent = "Completed: " + item.checked;
        const projectItemDelete = document.createElement("button");
        const removeItemIcon = document.createElement("img");
        removeItemIcon.classList.add("remove-project-item-icon");
        removeItemIcon.src = trashcan;
        projectItemDelete.appendChild(removeItemIcon);
        projectItemText.append(projectItemTitle, projectItemDesc, projectItemDate, projectItemPriority, projectItemNotes, projectItemChecked);
        projectItem.append(projectItemText, projectItemDelete)
        projectCard.appendChild(projectItem);
        projectItemDelete.onclick = () => {
            console.log("Deleted.");
            console.log(item);
            console.log(project);
            removeItem(item, project);
            projectCard.removeChild(projectItem);
        }
    });
    }
    const projectTop = document.createElement("div");
    projectTop.classList.add("project-top");
    projectTop.setAttribute("data-id", `${project.dataID}`);
    const itemButton = document.createElement("button");
    itemButton.classList.add("project-item-button");
    const itemButtonImage = document.createElement("img");
    itemButtonImage.classList.add("project-item-button-image");
    itemButtonImage.src = note;
    itemButton.appendChild(itemButtonImage);
    projectTop.append(projectTitle, itemButton);
    content.replaceChildren(projectTop, projectCard);
    const addNewItem = () => {
        itemButton.addEventListener("click", () => {
        content.appendChild(newDialog);
        newDialog.close();
        newForm.reset();
        newDialog.showModal();
        });
        newDialog.addEventListener("close", (e) => {
        console.log("Closed.");
        });
        newButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click");
        const item = new Item(document.querySelector("#title").value, 
        document.querySelector("#description").value, 
        document.querySelector("#date").value, 
        document.querySelector("#priority").value, 
        document.querySelector("#notes").value);
        addItem(item, project);
        storeItem(item);
        removeList();
        displayProjectItems();
        newDialog.close();
        });
    }
    const removeList = () => {
        while(projectCard.firstChild) {
            projectCard.removeChild(projectCard.firstChild);
        }
    }
    displayProjectItems();
    addNewItem();
}

export { content, displayProject };