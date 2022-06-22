import {useState, useEffect, useRef} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';

interface AppState {
  subs: Sub[]
  newSubsNumber : number
}
const initialState = [{
  nick: 'Leandro',
  subMonths: 18,
  avatar:"https://acortar.link/zTOo54",
  description:'Soy Programador'
}]
const App = () => {
  const [subs, setSubs] = useState<AppState['subs']>([])
  
  const handleNewSub = (newSub: Sub): void=>{
    setSubs([...subs, newSub])
  }

  useEffect(()=>{
    setSubs(initialState)
  },[])
  const divRef = useRef(null)
  return (
    <div className="App" ref={divRef}>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
