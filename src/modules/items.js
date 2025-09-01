import { projectList } from "./projects";

class Item {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.checked = false,
        this.dataID = self.crypto.randomUUID();
    }
}

const addItem = (item, project) => {
    const index = projectList.indexOf(project);
    projectList[index].items.push(item);
}

const removeItem = (item, project) => {
    const itemToRemove = project.items.indexOf(item);
    project.items.splice(itemToRemove, 1);
}

/* addItem(new Item("Coffee", "Buy that expensive coffee.", "Tomorrow", "Medium", ""), projectList[0]);
addItem(new Item("Bread", "Need a loaf of bread.", "Today", "High", "Remember to buy whole wheat bread"), projectList[0]);
addItem(new Item("Workout", "Do a 45 minute rubber band workout.", "Tomorrow", "Medium", "Try the yellow rubber band first."), projectList[1]);
addItem(new Item("Get a haircut", "Go to the barbershop on the corner and get a new haircut.", "Wednesday", "Low", "Remember to bring that photo to show the hairdresser."), projectList[1]); */

const exampleItemOne = new Item("Coffee", "Buy that expensive coffee.", "Tomorrow", "Medium", "");
const exampleItemTwo = new Item("Bread", "Need a loaf of bread.", "Today", "High", "Remember to buy whole wheat bread");
const exampleItemThree = new Item("Workout", "Do a 45 minute rubber band workout.", "Tomorrow", "Medium", "Try the yellow rubber band first.");
const exampleItemFour = new Item("Get a haircut", "Go to the barbershop on the corner and get a new haircut.", "Wednesday", "Low", "Remember to bring that photo to show the hairdresser.");

export { Item, addItem, removeItem, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour };