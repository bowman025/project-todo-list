class Item {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.checked = false
    };
}
const exampleItemOne = new Item("Coffee", "Buy that expensive coffee.", "Tomorrow", "Medium", "");
const exampleItemTwo = new Item("Bread", "Need a loaf of bread.", "Today", "High", "Remember to buy whole wheat bread");

export { Item, exampleItemOne, exampleItemTwo };