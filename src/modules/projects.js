import { exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour, exampleItemFive } from "./items.js";

class Project {
    constructor(title) {
        this.title = title,
        this.dataID = self.crypto.randomUUID(),
        this.items = []
    }
}

const projectList = [];

const addProject = (title) => {
    const newProject = new Project(title);
    projectList.push(newProject);
}

const removeProject = (index) => {
    projectList.splice(index, 1);
}

const populateProjectList = () => {
    if(localStorage.length === 0 || localStorage.length !== 0 && JSON.parse(localStorage.getItem("Project List")).length === 0) {
    const exampleProject = new Project("My First Project");
    exampleProject.items.push(exampleItemOne, exampleItemTwo);
    const exampleProjectTwo = new Project("My Second Project");
    exampleProjectTwo.items.push(exampleItemThree, exampleItemFour, exampleItemFive);
    projectList.push(exampleProject, exampleProjectTwo);
    console.log("Populated project list.");
    } else if(localStorage.length !== 0 && JSON.parse(localStorage.getItem("Project List")).length > 0) {
        const storedList = JSON.parse(localStorage.getItem("Project List"));
        storedList.forEach(project => {
            projectList.push(project);
        });
    } else console.log("Can't populate the project list.");
}

const filterPriority = (value) => {
    let filteredPriorityList = [];
    for(let i = 0; i < projectList.length; i++) {
        filteredPriorityList = filteredPriorityList.concat(projectList[i].items).filter(item => item.priority === value);
    }
    return filteredPriorityList;
}

const filterDate = (value) => {
    let filteredDateList = [];
    for(let i = 0; i < projectList.length; i++) {
        filteredDateList = filteredDateList.concat(projectList[i].items.filter(item => item.dueDate === value));
    }
    return filteredDateList;
}

const filterOverdue = () => {
    const today = new Date().toDateString();
    let filteredOverdueList = [];
    for(let i = 0; i < projectList.length; i++) {
       filteredOverdueList = filteredOverdueList.concat(projectList[i].items.filter(item => Date.parse(item.dueDate) < Date.parse(today)));
    }
    return filteredOverdueList;
}

export { projectList, Project, populateProjectList, addProject, removeProject, filterPriority, filterDate, filterOverdue };