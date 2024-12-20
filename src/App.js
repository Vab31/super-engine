import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Firstcomp from './component/firstcomp';
import Seccomp from './component/seccomp';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {

const [iop, setiop] = useState('');
const [todo,settodo] =useState('');
const [sec,setsec]=useState('')

function uiop(){

// console.log([...iop,todo])

  setiop(todo+sec)
  settodo('')
  setsec('')
}

//   return (
//     <div className="App">
//      <input type='text' value={todo} onChange={(e)=>settodo(e.target.value)} />
//      <input type='text' value={sec} onChange={(e)=>setsec(e.target.value)} />

//      <button onClick={uiop}>add</button>
//   <h1>{iop}</h1>

//   <Seccomp/>
//     </div>
//   );}

// export default App;


  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/firstcomp' element={<Firstcomp/>}/>
        <Route path='/seccomp' element={<Seccomp/>}/>
      </Routes>
     </Router>
    </div>
  );}

export default App;
