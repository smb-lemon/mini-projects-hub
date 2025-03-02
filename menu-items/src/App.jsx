import { useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import menu from './data';

const tempCatagories = menu.map((item) =>
  item.category
)
console.log(tempCatagories);

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
