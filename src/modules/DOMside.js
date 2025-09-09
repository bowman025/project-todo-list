import { content, displayProject } from "./DOMmain.js";
import { projectList, addProject, removeProject, filterPriority, filterDate } from "./projects.js";
import { today, tomorrow, dayAfterTomorrow } from "./items.js";
import trashcan from "../img/trash-can-outline.svg";
import enter from "../img/arrow-collapse-left.svg";
import down from "../img/arrow-down-drop-circle-outline.svg";
import up from "../img/arrow-up-drop-circle-outline.svg";

const sideList = document.querySelector(".side-list");
const myProjectsDiv = document.querySelector(".side-my");
const myProjectsTitle = document.querySelector(".side-my-title");
const myProjectsItems = document.querySelector(".side-my-items");

const displayUpcoming = () => {
    const upcomingTitleDiv = document.createElement("div");
    upcomingTitleDiv.classList.add("side-upcoming-title-div");
    const upcomingTitle = document.createElement("h2");
    upcomingTitle.classList.add("side-upcoming-title");
    upcomingTitle.textContent = "Upcoming";
    const upcomingButton = document.createElement("button");
    upcomingButton.classList.add("side-upcoming-title-button");
    const upcomingImg = document.createElement("img");
    upcomingImg.classList.add("side-upcoming-title-img");
    upcomingImg.src = up;
    upcomingButton.appendChild(upcomingImg);
    upcomingTitleDiv.append(upcomingTitle, upcomingButton);
    const todayDiv = document.createElement("div");
    todayDiv.classList.add("side-items", "side-items-upcoming");
    const todayBtn = document.createElement("button");
    todayBtn.classList.add("side-item");
    todayBtn.textContent = "Today";
    todayBtn.addEventListener("click", () => {
        const todayDate = {
            title: "Due Today",
            items: filterDate(today.toDateString()),
        }
        console.log(todayDate);
        displayProject(todayDate);
    });
    todayDiv.appendChild(todayBtn);
    const tomorrowDiv = document.createElement("div");
    tomorrowDiv.classList.add("side-items", "side-items-upcoming");
    const tomorrowBtn = document.createElement("button");
    tomorrowBtn.classList.add("side-item");
    tomorrowBtn.textContent = "Tomorrow";
    tomorrowBtn.addEventListener("click", () => {
        const tomorrowDate = {
            title: "Due Tomorrow",
            items: filterDate(tomorrow.toDateString()),
        }
        console.log(tomorrowDate);
        displayProject(tomorrowDate);
    });
    tomorrowDiv.appendChild(tomorrowBtn);
    const dayAfterTomorrowDiv = document.createElement("div");
    dayAfterTomorrowDiv.classList.add("side-items", "side-items-upcoming");
    const dayAfterTomorrowBtn = document.createElement("button");
    dayAfterTomorrowBtn.classList.add("side-item");
    dayAfterTomorrowBtn.textContent = "In Two Days";
    dayAfterTomorrowBtn.addEventListener("click", () => {
        const dayAfterTomorrowDate = {
            title: "Due in Two Days",
            items: filterDate(dayAfterTomorrow.toDateString()),
        }
        console.log(dayAfterTomorrowDate);
        displayProject(dayAfterTomorrowDate);
    });
    dayAfterTomorrowDiv.appendChild(dayAfterTomorrowBtn);
    const overdue = document.createElement("div");
    overdue.classList.add("side-items", "side-items-upcoming");
    const overdueBtn = document.createElement("button");
    overdueBtn.classList.add("side-item");
    overdueBtn.classList.add("side-item-overdue");
    overdueBtn.textContent = "Overdue";

    overdue.appendChild(overdueBtn);

    const upcomingItemsDiv = document.createElement("div");
    upcomingItemsDiv.classList.add("side-upcoming-items-div");
    upcomingItemsDiv.append(todayDiv, tomorrowDiv, dayAfterTomorrowDiv, overdue)
    const upcomingDiv = document.createElement("div");
    upcomingDiv.classList.add("side-upcoming");
    upcomingDiv.append(upcomingTitleDiv, upcomingItemsDiv);
    sideList.appendChild(upcomingDiv);
    upcomingButton.onclick = () => {
        if(upcomingItemsDiv.classList.contains("hidden") === true) {
            upcomingItemsDiv.classList.remove("hidden");
            upcomingItemsDiv.style.display = "";
            upcomingImg.src = up;
        } else {
            upcomingItemsDiv.classList.add("hidden");
            upcomingItemsDiv.style.display = "none";
            upcomingImg.src = down;
        }
    }
}

const displayPriority = () => {
    const priorityTitleDiv = document.createElement("div");
    priorityTitleDiv.classList.add("side-priority-title-div");
    const priorityTitle = document.createElement("h2");
    priorityTitle.classList.add("side-priority-title");
    priorityTitle.textContent = "Priority";
    const priorityButton = document.createElement("button");
    priorityButton.classList.add("side-priority-title-button");
    const priorityImg = document.createElement("img");
    priorityImg.classList.add("side-priority-title-img");
    priorityImg.src = up;
    priorityButton.appendChild(priorityImg);
    priorityTitleDiv.append(priorityTitle, priorityButton)
    const high = document.createElement("div");
    high.classList.add("side-items", "side-items-priority");
    const highBtn = document.createElement("button");
    highBtn.classList.add("side-item");
    highBtn.textContent = "High";
    highBtn.addEventListener("click", () => {
        const highPriority = {
            title: "High Priority",
            items: filterPriority("High"),
        }
        console.log(highPriority);
        displayProject(highPriority);
    });
    high.appendChild(highBtn);
    const medium = document.createElement("div");
    medium.classList.add("side-items", "side-items-priority");
    const mediumBtn = document.createElement("button");
    mediumBtn.classList.add("side-item");
    mediumBtn.textContent = "Medium";
    mediumBtn.addEventListener("click", () => {
        const mediumPriority = {
            title: "Medium Priority",
            items: filterPriority("Medium"),
        }
        console.log(mediumPriority);
        displayProject(mediumPriority);
    });
    medium.appendChild(mediumBtn);
    const low = document.createElement("div");
    low.classList.add("side-items", "side-items-priority");
    const lowBtn = document.createElement("button");
    lowBtn.classList.add("side-item");
    lowBtn.textContent = "Low";
    lowBtn.addEventListener("click", () => {
        const lowPriority = {
            title: "Low Priority",
            items: filterPriority("Low"),
        }
        console.log(lowPriority);
        displayProject(lowPriority);
    });
    low.appendChild(lowBtn);
    const priorityItemsDiv = document.createElement("div");
    priorityItemsDiv.classList.add("side-priority-items-div");
    priorityItemsDiv.append(high, medium, low)
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("side-priority");
    priorityDiv.append(priorityTitleDiv, priorityItemsDiv);
    sideList.appendChild(priorityDiv);
    priorityButton.onclick = () => {
        if(priorityItemsDiv.classList.contains("hidden") === true) {
            priorityItemsDiv.classList.remove("hidden");
            priorityItemsDiv.style.display = "";
            priorityImg.src = up;
        } else {
            priorityItemsDiv.classList.add("hidden");
            priorityItemsDiv.style.display = "none";
            priorityImg.src = down;
        }
    }
}

const displaySecondaryList = () => {
    displayUpcoming();
    displayPriority();
}

const displayList = () => {
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
        myProjectsItems.appendChild(item);
        listItem.onclick = () => displayProject(project);
        removeItem.onclick = () => {
            removeProject(projectList.indexOf(project));
            myProjectsItems.removeChild(item);
            console.log("Removed.");
            console.log(projectList);
            if(content.firstChild === null) return;
            else if(content.firstChild.getAttribute("data-id") === project.dataID) {
                content.replaceChildren();
            }
        }
    });
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
        myProjectsItems.replaceChildren();
        displayList(projectList);
        console.log(projectList);
    });
}

export { displayList, displaySecondaryList, addProjectToList };