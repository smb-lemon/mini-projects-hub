# Navbar

### Data

Checking the data.jsx file and find two arrays: one for links and one for social icons. Notice how icons from react-icons can be used directly in the data structures. J

### Initial Approach

Setting up a Navbar component with a showLinks state value (boolean). Importing the links from data and render them conditionally in the Navbar based on the showLinks state value.By setting up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

### Fixed Approach

Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

### Dynamic Approach

Using the useRef and getBoundingClientRect() function, to get exact height of links 