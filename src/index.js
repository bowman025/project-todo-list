import "./css/style.css";
import { projectList, populateProjectList } from "./modules/projects.js";
import { displayList, displaySecondaryList, addProjectToList } from "./modules/DOMside.js";
import { displayProject } from "./modules/DOMmain.js";
import { storeProjectList } from "./modules/storage.js";

populateProjectList();
displayList();
displaySecondaryList();
addProjectToList();
displayProject(projectList[0]);

document.addEventListener("visibilitychange", () => {
    if(document.hidden) {
        storeProjectList();
    } else return;
});

for (let i = 0; i < 3; i++) { // Outer loop
  console.log(`Outer loop iteration: ${i}`);
  for (let j = 0; j < 2; j++) { // Inner loop
    console.log(`  Inner loop iteration: ${j}`);
  }
}