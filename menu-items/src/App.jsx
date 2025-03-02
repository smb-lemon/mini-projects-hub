import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import menu from './data';

// const tempCatagories = menu.map((item) =>item.category);
// const tempSet = new Set(tempCatagories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = new Set(menu.map((item) =>item.category));
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
  <main>
    <section className='menu'>
      <Title text='Our Menu'/>
      <Menu items={menuItems} />
    </section>
  </main>
  )
};
export default App;
