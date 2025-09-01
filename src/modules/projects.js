import { storeProjectList, getStoredProjectList } from "./storage";
import { Item, addItem, removeItem, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour } from "./items.js";

class Project {
    constructor(title) {
        this.title = title,
        this.dataID = self.crypto.randomUUID();
        this.items = []
    };
}

const projectList = [];

const addToProjectList = () => {
    const storedProjectList = localStorage.getItem("Project LIst");
    if(storedProjectList !== null) {
        projectList.push(...storedProjectList);
    } else return;
}

const addProject = (title) => {
    const newProject = new Project(title);
    projectList.push(newProject);
}

const removeProject = (index) => {
    projectList.splice(index, 1);
}

const exampleProject = new Project("My First Project");
exampleProject.items.push(exampleItemOne, exampleItemTwo);
projectList.push(exampleProject);

const exampleProjectTwo = new Project("My Second Project");
exampleProjectTwo.items.push(exampleItemThree, exampleItemFour);
projectList.push(exampleProjectTwo);

export { projectList, Project, addToProjectList, addProject, removeProject };