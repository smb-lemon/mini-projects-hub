# Project Details

### Vite Configuration

Create a vite project <br>
```sh
npm create vite@latest project-name
```
Install Dpendencies <br>
```sh
npm install
```
Start the development server <br>
```sh
npm run dev 
```
### Setup

First create - three components (Tours, Tour, and Loading), we can create three separate files in project directory: Tours.jsx, Tour.jsx, and Loading.jsx. In each of these files, we will define a React functional component that returns JSX code for rendering the respective component.

### Fetch Tours

The Tours component will be responsible for rendering a list of Tour components. In App.jsx, we will fetch the tours data from a URL using the fetch API. Before the data is loaded, we should show a loading spinner or message, which can be implemented using the Loading component.

### Render Tours

Once the data is loaded, we can set the state of component to store the tours data. We can then map over the tours array and render a Tour component for each tour. Each Tour component will receive the tour data as props, including the tour's id, image, info, name, and price.

### Remove Tour

To implement the "remove tour" functionality, we can add a button to each Tour component that, when clicked, removes the tour from the list of tours. 
We can achieve this by updating the state of the Tours component to remove the tour from the tours array.

### Read More

To implement the "read more" functionality, we can add a button to each Tour component that, when clicked, expands the description of the tour. 
We can achieve this by updating the state of the Tour component to toggle a "read more" flag, and conditionally rendering the full description based on the flag.

