import React from "react";
import { useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Composants/ClassComponent'
import FunctionalComponent from './Composants/FunctionalComponent'
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Composants/NavigationBar";
import Updateevent from "./Composants/Updateevent";
import Addevent from "./Composants/Addevent";

//redux
import { useDispatch } from "react-redux";
import { fetchEvents } from "./redux/slices/eventsSlice";
import Wishlist from "./Composants/wishlist";

//lazy loading

const Events = React.lazy(() => import('./Composants/events'));
const EventDetails = React.lazy(() => import('./Composants/EventDetails'));
const AddEvent = React.lazy(() => import('./Composants/Addevent'));


function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

      // const [{color,background}, setColor]= useState({color:"red",background:"purple"});
  
    //   useEffect(()=> console.log("mounting"),[]);
    //  useEffect(()=> console.log("chaque rerender"));
    //  useEffect(()=> console.log("mounting & updating"),[color]);
  
     return (
  /* { const tab=(
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

  </ul>} 
   <ClassComponent name="yasmine"/>
  <FunctionalComponent test="testprops"/>
 
  <div className='App'>
    <input onChange={e=>setColor(current =>({...current,color:e.target.value}))}/>
  <h1> color is {color} </h1>
  </div> */

<React.Suspense fallback={<h1> Loading ...</h1>} >
<NavigationBar/>
<Routes>
                <Route index element={<Events />} loader={dispatch(fetchEvents())}/>

       <Route
          path="/event/:id"
          element={<EventDetails/>}
        />  
         <Route
          path="/event/addevent"
          element={<Addevent/>}
        /> 
        <Route
        path="/events/update/:id"
        element={<Updateevent/>}
      />  
      <Route
          path="/wishlist"
          element={<Wishlist/>}
        /> 
        <Route
          path="*"
          element={<img src="/images/notfound.jfif" width="100%" />}
        />       
</Routes>
</React.Suspense>
  


  ) 
}

export default App
