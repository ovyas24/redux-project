import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions";

function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="columns mt-4">
            <div className="column">
                <p className="is-size-1">counter : {counter}</p>
            </div>
            <div className="column">
                <div className="columns mt-2">
                    <div className="column">
                        <button className="button is-medium" style={{ width: '100%' }} onClick={() => dispatch(increment())} >+</button>
                    </div>
                    <div className="column">
                        <button className="button is-medium" style={{ width: '100%' }} onClick={() => dispatch(decrement())} >-</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
