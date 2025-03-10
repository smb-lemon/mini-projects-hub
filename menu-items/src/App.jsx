import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import menu from './data';
import Categories from './Categories';

const allCategories = ['All', ...new Set(menu.map((item) =>item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category == 'All'){
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  return (
  <main>
    <section className='menu'>
      <Title text='Our Menu'/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>
  )
};
export default App;
