import "./css/style.css";
import { projectList, populateProjectList } from "./modules/projects.js";
import { displayList, addProjectToList } from "./modules/DOMside.js";
import { displayProject } from "./modules/DOMmain.js";

populateProjectList();
displayList();
addProjectToList();
displayProject(projectList[0]);