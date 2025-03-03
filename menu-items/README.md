## Menu-Items

### Title Component

First, we need to create a Title component to display the main title of your app. This component can be a simple function that returns a heading element with the app title.

### Explore and Import Data

Import the menu items data from data.js into your project. This data should be an array of objects, with each object representing a menu item and containing properties such as title, price, image URL, and description.

### State Value

Setting up the menu items data as a state variable in the App.jsx component using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output.

### Render Items

Passing the menu items state value down to the Menu.jsx component. In the Menu component, iterate over the list of menu items using the map method, and for every item, render a MenuItem component.

In the MenuItem component, render an image element, a title, a price, and a description. We can use the data from the menu items array to fill in the information for each component.

### Set Object


In JavaScript, the Set object is a collection of unique values. It allows you to store values of any type, such as primitive types (numbers, strings, booleans) and object references.

Here's a simple example of using a Set:

```js
// Create a new set
let mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Add a duplicate value (ignored)
mySet.add(1);

// Get the size of the set (3)
console.log(mySet.size);

// Check if a value is in the set (true)
console.log(mySet.has(2));

// Remove a value from the set
mySet.delete(2);

// Get an array of all values in the set
let myArray = Array.from(mySet);
console.log(myArray); // [1, 3]
```

```js
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
console.log(tempItems);
```
### Unique Categories

In the App.jsx component, set up functionality to get only the unique categories from the menu items data and store them in a separate array. Add an "all" category to this array to display all menu items.
We can find more info on Set Object.

### State Value and Render Categories

Setting up the categories array as a state variable in the App.jsx component using the useState hook. This will allow us to modify the data and have those changes automatically reflected in the rendered output.

Creating a Categories component and pass the categories state value down to this component. In the Categories component, iterate over the categories array and render buttons for each category.