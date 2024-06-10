import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Composants/ClassComponent'
import FunctionalComponent from './Composants/FunctionalComponent'
import { Routes, Route } from "react-router-dom";
import Events from './Composants/events'
 
function App() {
  const [count, setCount] = useState(0)
const tab=(
      {name:"TWIN3",module:"React"},
      {name:"",module:"EXpress"})

      const [{color,background}, setColor]= useState({color:"red",background:"purple"});
  
    //   useEffect(()=> console.log("mounting"),[]);
    //  useEffect(()=> console.log("chaque rerender"));
    //  useEffect(()=> console.log("mounting & updating"),[color]);
  
     return (
   <> 
  {/* { const tab=(
      {name:"TWIN3",module:"React"},
      {name:"",module:"EXpress"})
  return (
   <> {hello("TWIN3")} 
  <p style={{color:"red"}}> {element}</p>
  <ul>
    {tab.map((e,i) =>
    {
      return <li key={i}> {e.name} & {e.module} </li>
    })} 

  </ul>} */}
  {/* <ClassComponent name="yasmine"/>
  <FunctionalComponent test="testprops"/>
 
  <div className='App'>
    <input onChange={e=>setColor(current =>({...current,color:e.target.value}))}/>
  <h1> color is {color} </h1>
  </div> */}



<Routes>
          <Route path="/" element={<Events/>} />
        
        </Routes>

</>  
  


  ) 
}

export default App
