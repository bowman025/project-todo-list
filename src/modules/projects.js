import { exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour } from "./items.js";
import { storeProjectList } from "./storage.js";

class Project {
    constructor(title) {
        this.title = title,
        this.dataID = self.crypto.randomUUID();
        this.items = []
    };
}

const projectList = [];

const addProject = (title) => {
    const newProject = new Project(title);
    projectList.push(newProject);
    storeProjectList();
}

const removeProject = (index) => {
    projectList.splice(index, 1);
    storeProjectList();
}

const populateProjectList = (projectList) => {
    if(localStorage.length === 0 || localStorage.length !== 0 && JSON.parse(localStorage.getItem("Project List")).length === 0) {
    const exampleProject = new Project("My First Project");
    exampleProject.items.push(exampleItemOne, exampleItemTwo);
    const exampleProjectTwo = new Project("My Second Project");
    exampleProjectTwo.items.push(exampleItemThree, exampleItemFour);
    projectList.push(exampleProject, exampleProjectTwo);
    storeProjectList();
    console.log("Populated project list.");
    } else if(localStorage.length !== 0 && JSON.parse(localStorage.getItem("Project List")).length > 0) {
        const storedList = JSON.parse(localStorage.getItem("Project List"));
        storedList.forEach(project => {
            projectList.push(project);
        });
    } else console.log("Can't populate the project list.");
}

export { projectList, Project, populateProjectList, addProject, removeProject };