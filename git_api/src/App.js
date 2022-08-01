// import './App.css';

import { useEffect, useState } from "react";
import Image from "./Image";

function App() {
  const [state,setState] = useState('')

  useEffect(()=>{
    fetch('https://api.github.com/users/evanphx').then(res=>res.json()).then(data=>setState(data))
  },[])
  return (
    <div className="App">
      {/* {console.log(state.login)} */}
      {Object.keys(state).map((item)=> <p>{item}:{state[item]}</p>)}
      {/* <Image /> */}
    </div>
  );
}

export default App;
