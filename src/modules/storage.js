import { projectList, addProject, removeProject } from "./projects";

const storeProjectList = () => {
    if(localStorage.getItem("Project List") === null) {
    localStorage.setItem("Project List", JSON.stringify(projectList));
    }
}

const storeProject = (title) => {
    JSON.parse(localStorage.getItem("Project List"));
    addProject(title);
    localStorage.setItem("Project List", JSON.stringify(projectList));
}

const unstoreProject = (index) => {
    JSON.parse(localStorage.getItem("Project List"));
    removeProject(index);
    localStorage.setItem("Project List", JSON.stringify(projectList));
}

const appendStoredProjectList = () => {
    const storedProjectList = JSON.parse(localStorage.getItem("Project List"));
    projectList.push(...storedProjectList);
}

const storeItem = (item, project) => {

}

const unstoreItem = (item) => {
    
}

export { storeProjectList, storeProject, unstoreProject, appendStoredProjectList, storeItem, unstoreItem };