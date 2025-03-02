import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import menu from './data';
import Categories from './Categories';

// const tempCatagories = menu.map((item) =>item.category);
// const tempSet = new Set(tempCatagories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = ['All', ...new Set(menu.map((item) =>item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  // console.log(allCategories);
  return (
  <main>
    <section className='menu'>
      <Title text='Our Menu'/>
      <Categories categories={categories}/>
      <Menu items={menuItems} />
    </section>
  </main>
  )
};
export default App;
