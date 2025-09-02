import { projectList } from "./projects";

const storeProjectList = () => {
    localStorage.setItem("Project List", JSON.stringify(projectList));
}

export { storeProjectList };