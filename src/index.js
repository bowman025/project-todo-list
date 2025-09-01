import "./css/style.css";
import { storeProjectList, appendStoredProjectList } from "./modules/storage.js"
import { Item, addItem, removeItem, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour } from "./modules/items.js";
import { projectList, Project, addToProjectList } from "./modules/projects.js";
import { displayList, addProjectToList } from "./modules/DOMside.js";
import { displayProject, itemDialog } from "./modules/DOMmain.js";

appendStoredProjectList();
displayList(projectList);
displayProject(projectList[0]);
addProjectToList();
storeProjectList();

console.log(projectList)