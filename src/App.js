import React, {useState, useEffect} from 'react';

import SpaceMission from "./graphql";
import Cards from './Cards';

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(5);
    setData(spaceMissions);
  }
  useEffect(()=> {
    loadSpaceMission();
  },[])
  console.log(data);

  return (
      <Cards data={data}/>
  )
}

export default App;
