class Project {
    constructor(title) {
        this.title = title,
        this.items = []
    };
}

const projectList = [];

const addProject = (title) => {
    const newProject = new Project(title);
    projectList.push(newProject);
}

export { projectList, Project, addProject };