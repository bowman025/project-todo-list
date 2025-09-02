import "./css/style.css";
import { projectList, populateProjectList } from "./modules/projects.js";
import { displayList, addProjectToList } from "./modules/DOMside.js";
import { displayProject, itemDialog } from "./modules/DOMmain.js";

populateProjectList(projectList);
displayList(projectList);
addProjectToList();

console.log(projectList);