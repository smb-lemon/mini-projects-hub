import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

function App()  {
  // for loading
  const [isLoading, setIsLoading] = useState(true);
  // to store all the tours if the fetch request is successful
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      // fetch tours
      const response = await fetch(url);
      // returns a json and also await for promise
      const tours = await response.json();
      setTours(tours);
      
    } catch (error) {
      // lg the erro
      console.log(error);
    }
    setIsLoading(false);
  }

  //fetchTour function will be excuted when useEffect will be used
  useEffect(() => {
    fetchTours();
  },[])

  // if loading is true,return the loading component
  if(isLoading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      {/* {tours} prop */}
      <Tours tours={tours}/> 
    </main>
  );
};
export default App;
