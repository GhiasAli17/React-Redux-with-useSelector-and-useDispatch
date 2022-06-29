import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './redux/Actions';


function App() {

  
  const dispatch = useDispatch()
  const{IncrementData,DecrementData}= useSelector(state => state.reducer)

  console.log(IncrementData)
  return (
    <div className="App">
      <h1>INCREMENT/DECREMENT COUNTER</h1>

    <button onClick={()=>{dispatch(increment(IncrementData))}}>+</button>
    <button onClick={()=>{dispatch(decrement(DecrementData))}}>-</button>

    <h1>State: {IncrementData}</h1>
    <h2>State:{DecrementData}</h2>


    </div>
  );
}

export default App;
