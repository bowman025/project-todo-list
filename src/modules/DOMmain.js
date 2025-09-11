import { Item, addItem, removeItem, toggleItemChecked } from "./items";
import { displayList } from "./DOMside";
import trashcan from "../img/trash-can-outline.svg";
import note from "../img/note-plus-outline.svg";
import checkboxBlank from "../img/checkbox-blank-outline.svg";
import checkbox from "../img/checkbox-outline.svg";
import checkboxMarked from "../img/checkbox-marked-outline.svg";
import expand from "../img/arrow-expand-horizontal.svg";
import collapse from "../img/arrow-collapse-horizontal.svg";

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
    label1.textContent = "*Title: ";
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");
    input1.setAttribute("id", "title");
    input1.required = true;
    div1.append(label1, input1);
    const div2 = document.createElement("div");
    div2.classList.add("input");
    const label2 = document.createElement("label");
    label2.setAttribute("for", "date");
    label2.textContent = "*Due Date: ";
    const input2 = document.createElement("input");
    input2.setAttribute("type", "date");
    input2.setAttribute("name", "date");
    input2.setAttribute("id", "date");
    input2.required = true;
    div2.append(label2, input2);
    const div3 = document.createElement("div");
    div3.classList.add("input");
    const label3 = document.createElement("label");
    label3.setAttribute("for", "priority");
    label3.textContent = "Priority: ";
    const select = document.createElement("select");
    select.setAttribute("name", "priority");
    select.setAttribute("id", "priority");
    select.required = true;
    const option1 = document.createElement("option");
    option1.setAttribute("value", "Low");
    option1.classList.add("option", "option-1");
    option1.textContent = "Low";
    const option2 = document.createElement("option");
    option2.setAttribute("value", "Medium");
    option2.classList.add("option", "option-2");
    option2.textContent = "Medium";
    const option3 = document.createElement("option");
    option3.setAttribute("value", "High");
    option3.classList.add("option", "option-3");
    option3.textContent = "High";
    select.append(option1, option2, option3);
    div3.append(label3, select);
    const div4 = document.createElement("div");
    div4.classList.add("input");
    const label4 = document.createElement("label");
    label4.setAttribute("for", "description");
    label4.textContent = "Description: ";
    const input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("name", "description");
    input4.setAttribute("id", "description");
    div4.append(label4, input4);
    const div5 = document.createElement("div");
    div5.classList.add("input", "input-submit");
    const button = document.createElement("button");
    button.classList.add("input-submit-button");
    button.textContent = "Add";
    div5.appendChild(button);
    itemForm.append(div1, div2, div3, div4, div5);
    itemDialog.appendChild(itemForm);
    return [itemDialog, itemForm];
}

const displayProject = (project) => {
    const [newDialog, newForm] = createDialog();
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    if(projectTitle.textContent === "High Priority" || projectTitle.textContent === "Medium Priority" || projectTitle.textContent === "Low Priority"|| projectTitle.textContent === "Due Today" || projectTitle.textContent === "Due Tomorrow" || projectTitle.textContent === "Due in Two Days" || projectTitle.textContent === "Overdue") {
        projectTitle.contentEditable = "false";
        projectTitle.classList.add("project-title-not-editable");
    } else projectTitle.contentEditable = "plaintext-only";
    const displayProjectItems = () => {
        const editCheckedItem = (projectItem, projectItemContent, projectItemTitle, projectItemButtons, projectItemChecked, projectItemCheckedIcon) => {
        projectItem.style.flexDirection = "row";
        projectItemCheckedIcon.src = checkboxMarked;
        projectItemContent.replaceChildren(projectItemTitle);
        projectItemContent.style.textDecoration = "4px line-through solid var(--primary-border-color)";
        projectItemContent.style.alignItems = "center";
        projectItemContent.style.justifyContent = "center";
        projectItemContent.style.margin = "0";
        projectItemTitle.style.margin = "0";
        projectItemTitle.contentEditable = "false";
        projectItemTitle.classList.add("project-item-title-not-editable");
        projectItemButtons.style.flexDirection = "row";
        projectItemButtons.style.alignItems = "center";
        projectItemButtons.style.margin = "0 5px 0 0";
        projectItemChecked.classList.add("project-item-checked-lock");
        }
        project.items.forEach((item, index) => {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item", `project-item-${index}`);
            projectItem.setAttribute("tabindex", "0");
            projectItem.dataset.id = item.dataID;
            const projectItemContent = document.createElement("div");
            projectItemContent.classList.add("project-item-content");
            const projectItemTitle = document.createElement("div");
            projectItemTitle.textContent = item.title;
            projectItemTitle.classList.add("project-item-title");
            projectItemTitle.contentEditable = "plaintext-only";
            const projectItemText = document.createElement("div");
            projectItemText.classList.add("project-item-text");
            const projectItemTextA = document.createElement("div");
            projectItemTextA.classList.add("project-item-text-a");
            const projectItemTextB = document.createElement("div");
            projectItemTextB.classList.add("project-item-text-b");
            projectItemTextB.style.display = "none";
            const projectItemButtons = document.createElement("div");
            projectItemButtons.classList.add("project-item-buttons");
            const projectItemDate = document.createElement("div");
            projectItemDate.classList.add("project-item-date");
            const projectItemDateLabel = document.createElement("label");
            projectItemDateLabel.setAttribute("for", `date-${item.dataID}`);
            projectItemDateLabel.textContent = "Due: " + item.dueDate;
            const projectItemDateCalendar = document.createElement("input");
            projectItemDateCalendar.setAttribute("type", "date");
            projectItemDateCalendar.setAttribute("name", `date-${item.dataID}`);
            projectItemDateCalendar.setAttribute("id", `date-${item.dataID}`);
            projectItemDateCalendar.classList.add("project-item-date-calendar")
            projectItemDate.append(projectItemDateLabel, projectItemDateCalendar);
            const projectItemPriority = document.createElement("div");
            projectItemPriority.classList.add("project-item-priority");
            const projectItemPriorityLabel = document.createElement("label");
            projectItemPriorityLabel.setAttribute("for", `priority-${item.dataID}`);
            projectItemPriorityLabel.textContent = "Priority: ";
            const projectItemPrioritySelect = document.createElement("select");
            projectItemPrioritySelect.setAttribute("name", `priority-${item.dataID}`);
            projectItemPrioritySelect.setAttribute("id", `priority-${item.dataID}`);
            projectItemPrioritySelect.classList.add("project-item-priority-select");
            const option1 = document.createElement("option");
            option1.setAttribute("value", "Low");
            option1.classList.add("project-item-priority-option", "project-item-priority-option-1");
            option1.textContent = "Low";
            if(item.priority === option1.textContent) {
                option1.setAttribute("selected", true);
            }
            const option2 = document.createElement("option");
            option2.setAttribute("value", "Medium");
            option2.classList.add("project-item-priority-option", "project-item-priority-option-2");
            option2.textContent = "Medium";
            if(item.priority === option2.textContent) {
                option2.setAttribute("selected", true);
            }
            const option3 = document.createElement("option");
            option3.setAttribute("value", "High");
            option3.classList.add("project-item-priority-option", "project-item-priority-option-3");
            option3.textContent = "High";
            if(item.priority === option3.textContent) {
                option3.setAttribute("selected", true);
            }
            projectItemPrioritySelect.append(option1, option2, option3);
            projectItemPriority.append(projectItemPriorityLabel, projectItemPrioritySelect);
            projectItemPriority.style.display = "none";
            const projectItemDesc = document.createElement("div");
            projectItemDesc.classList.add("project-item-description");
            const projectItemDescLabel = document.createElement("label");
            projectItemDescLabel.classList.add("project-item-description-label");
            projectItemDescLabel.setAttribute("for", `description-${index}`);
            projectItemDescLabel.textContent = "Description:";
            const projectItemDescInput = document.createElement("textarea");
            projectItemDescInput.classList.add("project-item-description-input");
            projectItemDescInput.textContent = item.description;
            projectItemDescInput.setAttribute("name", "description");
            projectItemDescInput.setAttribute("id", `description-${index}`);
            projectItemDesc.append(projectItemDescLabel, projectItemDescInput);
            projectItemDesc.style.display = "none";
            const projectItemNotes = document.createElement("textarea");
            projectItemNotes.textContent = item.notes;
            projectItemNotes.classList.add("project-item-notes");
            projectItemNotes.setAttribute("name", "notes");
            projectItemNotes.setAttribute("id", `note-${index}`);
            const projectItemNotesLabel = document.createElement("label");
            projectItemNotesLabel.classList.add("project-item-notes-label");
            projectItemNotesLabel.setAttribute("for", `note-${index}`);
            projectItemNotesLabel.textContent = "Notes:";
            const projectItemVisibility = document.createElement("button");
            projectItemVisibility.classList.add("project-item-visibility");
            projectItemVisibility.setAttribute("visible", "no");
            const projectItemVisibilityIcon = document.createElement("img");
            projectItemVisibilityIcon.classList.add("check-project-item-icon");
            projectItemVisibility.appendChild(projectItemVisibilityIcon);
            projectItemVisibilityIcon.src = expand;
            const projectItemChecked = document.createElement("button");
            projectItemChecked.classList.add("project-item-checked");
            const projectItemCheckedIcon = document.createElement("img");
            projectItemCheckedIcon.classList.add("check-project-item-icon");
            projectItemChecked.appendChild(projectItemCheckedIcon);
            const projectItemDelete = document.createElement("button");
            projectItemDelete.classList.add("project-item-delete");
            const removeItemIcon = document.createElement("img");
            removeItemIcon.classList.add("remove-project-item-icon");
            removeItemIcon.src = trashcan;
            projectItemDelete.appendChild(removeItemIcon);
            projectItemTextA.append(projectItemDate, projectItemPriority, projectItemDesc);
            projectItemTextB.append(projectItemNotesLabel, projectItemNotes);
            projectItemText.append(projectItemTextA, projectItemTextB);
            projectItemButtons.append(projectItemVisibility, projectItemChecked, projectItemDelete);
            projectItemContent.append(projectItemTitle, projectItemText)
            projectItem.append(projectItemContent, projectItemButtons);
            projectCard.appendChild(projectItem);
            if(item.checked === false) {
            projectItemCheckedIcon.src = checkboxBlank;
            } else {
                projectItemButtons.replaceChildren(projectItemChecked, projectItemDelete);
                editCheckedItem(projectItem, projectItemContent, projectItemTitle, projectItemButtons, projectItemChecked, projectItemCheckedIcon);
            }
            projectTitle.onblur = () => {
                project.title = projectTitle.textContent;
                const myProjectsItems = document.querySelector(".side-my-items");
                myProjectsItems.replaceChildren();
                displayList();
            }
            projectTitle.addEventListener("keydown", (e) => {
                if(e.key === "Enter") {
                    e.preventDefault();
                    projectTitle.blur();
                }
            });
            projectItemTitle.onblur = () => {
                item.title = projectItemTitle.textContent;
            }
            projectItemTitle.addEventListener("keydown", (e) => {
                if(e.key === "Enter") {
                    e.preventDefault();
                    projectItemTitle.blur();
                }
            });
            projectItemDateCalendar.onchange = () => {
                const updatedDate = new Date(projectItemDateCalendar.value);
                const updatedFormattedDate = updatedDate.toDateString();
                item.dueDate = updatedFormattedDate;
                projectItemDateLabel.textContent = "Due: " + item.dueDate;
                projectItemDate.replaceChildren(projectItemDateLabel, projectItemDateCalendar);
            }
            projectItemPrioritySelect.onchange = () => {
                item.priority = projectItemPrioritySelect.value;
            }
            projectItemNotes.onchange = () => {
                item.notes = projectItemNotes.value;
            }
            projectItemDescInput.onchange = () => {
                item.description = projectItemDescInput.value;
            }
            projectItemVisibility.onclick = () => {
                if(projectItemVisibility.getAttribute("visible") === "no") {
                projectItemVisibilityIcon.src = collapse;
                projectItemVisibility.setAttribute("visible", "yes");
                projectItem.style.flex = "1 1 100%";
                projectItemPriority.style.removeProperty("display");
                projectItemDesc.style.removeProperty("display");
                projectItemTextB.style.removeProperty("display");
                projectItemButtons.style.flexDirection = "column";
                } else if(projectItemVisibility.getAttribute("visible") === "yes") { projectItemVisibilityIcon.src = expand;
                projectItemVisibility.setAttribute("visible", "no");
                projectItem.style.flex = "";
                projectItemPriority.style.display = "none";
                projectItemDesc.style.display = "none";
                projectItemTextB.style.display = "none";
                projectItemButtons.style.flexDirection = "row";
                }
            }
            projectItemChecked.addEventListener("mouseenter", () => {
                if(item.checked === false) {
                projectItemCheckedIcon.src = checkbox;
                } else return;
            });
            projectItemChecked.addEventListener("mouseleave", () => {
                if(item.checked === false) {
                projectItemCheckedIcon.src = checkboxBlank;
                } else return;
            });
            projectItemChecked.onclick = () => {
                if(item.checked === false) {
                toggleItemChecked(item);
                projectItemButtons.replaceChildren(projectItemChecked, projectItemDelete);
                editCheckedItem(projectItem, projectItemText, projectItemTitle, projectItemButtons, projectItemChecked, projectItemCheckedIcon);
                } else return;
            }
            projectItemDelete.onclick = () => {
                removeItem(projectItem.dataset.id);
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
    if(projectTitle.textContent === "Low Priority" || projectTitle.textContent === "Medium Priority" || projectTitle.textContent === "High Priority" || projectTitle.textContent === "Due Today" || projectTitle.textContent === "Due Tomorrow" || projectTitle.textContent === "Due in Two Days" || projectTitle.textContent === "Overdue") {
    projectTop.appendChild(projectTitle);    
    } else projectTop.append(projectTitle, itemButton);
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
        newForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const item = new Item(document.querySelector("#title").value, 
            document.querySelector("#description").value, 
            new Date(document.querySelector("#date").value),
            document.querySelector("#priority").value);
            addItem(item, project);
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