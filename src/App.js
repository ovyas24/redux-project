import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, signIn } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div> <button onClick={() => dispatch(signIn())} >{
        isLogged ? "LogOut" : "LogIn"
      }</button> </div>
      <h1>counter : {counter}</h1>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      {
        isLogged ? <h3>Valuable info for user</h3> : null
      }
    </div>
  );
}

export default App;
