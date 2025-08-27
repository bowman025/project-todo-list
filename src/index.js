import "./css/style.css";
import { Item, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour } from "./modules/items.js";
import { projectList, Project } from "./modules/projects.js";
import { displayList } from "./modules/DOMside.js";
import { displayProject } from "./modules/DOMmain.js";

console.log(exampleItemOne);

console.log(projectList);

const exampleProject = new Project("My First Project");
exampleProject.items.push(exampleItemOne, exampleItemTwo);
projectList.push(exampleProject);

const exampleProjectTwo = new Project("My Second Project");
exampleProjectTwo.items.push(exampleItemThree, exampleItemFour);
projectList.push(exampleProjectTwo);

displayList(projectList);
displayProject(exampleProject);