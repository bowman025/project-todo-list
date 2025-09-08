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

const removeItem = (itemID) => {
    for(let i = 0; i < projectList.length; i++) {
        console.log(projectList[i].items);
        for(let j = 0; j < projectList[i].items.length; j++) {
            console.log(projectList[i].items[j].dataID);
            if(projectList[i].items[j].dataID === itemID) {
                projectList[i].items.splice(j, 1);
                return;
            }
        }
    }
}

const toggleItemChecked = (item) => {
    item.checked = !item.checked;
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const inSevenDays = new Date(today);
inSevenDays.setDate(inSevenDays.getDate() + 7);

const exampleItemOne = new Item("Coffee", "Buy that expensive coffee.", today.toDateString(), "Medium", "");
const exampleItemTwo = new Item("Bread", "Need a loaf of bread.", today.toDateString(), "High", "Remember to buy whole wheat bread");
const exampleItemThree = new Item("Workout", "Do a 45 minute rubber band workout.", tomorrow.toDateString(), "Medium", "Try the yellow rubber band first.");
const exampleItemFour = new Item("Get a haircut", "Go to the barbershop on the corner and get a new haircut.", inSevenDays.toDateString(), "Low", "Remember to bring that photo to show the hairdresser.");

export { Item, addItem, removeItem, toggleItemChecked, exampleItemOne, exampleItemTwo, exampleItemThree, exampleItemFour };