import "./css/style.css";
import { createItems, Item, exampleItemOne, exampleItemTwo } from "./modules/items.js";
import { projectList, addProject, removeProject, addItem, removeItem } from "./modules/projects.js";
import { displayList } from "./modules/DOMside.js";

console.log(exampleItemOne);

console.log(projectList);

const newProj = [exampleItemOne, exampleItemTwo];

console.log(newProj);

addProject(newProj);

displayList();