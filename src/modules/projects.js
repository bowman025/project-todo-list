import { exampleItemOne, exampleItemTwo } from "./items.js";

const projectList = [];
const addProject = (newProject) => projectList.push(newProject);
const removeProject = (projectIndex) => projectList.splice(projectIndex, 1);
const addItem = (project, newItem) => project.push(newItem);
const removeItem = (project, itemIndex) => project.splice(itemIndex, 1);

const exampleProject = [exampleItemOne, exampleItemTwo];
addProject(exampleProject);

export { projectList, addProject, removeProject, addItem, removeItem };