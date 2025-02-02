import { useState } from "react";
import data from './data.js';
import List from './List.jsx';

const App = () => {
  const [dataList, setDataList] = useState(data);
  return <main>
    <section className="container">
      <h3>{dataList.length} birthdays today</h3>
      <List dataList = {dataList} />
      <button type="button" 
      className="btn btn-block" 
      onClick={() =>{setDataList([])}}>
        Clear All
      </button>
    </section>
  </main>;
};
export default App;
