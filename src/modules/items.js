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
    console.log(item.dataID);
    const itemToRemove = project.items.indexOf(item);
    project.items.splice(itemToRemove, 1);
}

const removeItemByID = (itemID) => {
    
    console.log(projectList);
}

const toggleItemChecked = (item) => {
    item.checked = !item.checked;
}

const exampleItemOne = new Item("Coffee", "Buy that expensive coffee.", "2025-10-05", "Medium", "");
const exampleItemTwo = new Item("Bread", "Need a loaf of bread.", "2025-09-20", "High", "Remember to buy whole wheat bread");
const exampleItemThree = new Item("Workout", "Do a 45 minute rubber band workout.", "2025-09-08", "Medium", "Try the yellow rubber band first.");
const exampleItemFour = new Item("Get a haircut", "Go to the barbershop on the corner and get a new haircut.", "2025-09-07", "Low", "Remember to bring that photo to show the hairdresser.");

export { Item, addItem, removeItem, removeItemByID, toggleItemChecked, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour };