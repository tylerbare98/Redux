import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'


const Counter = () => {

  const counterState = useSelector(state => state.counter)
  const dispatch = useDispatch()


  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
      dispatch({ type: 'INCREMENT'})
  };

  const deccrementHandler = () => {
      dispatch({ type: 'DECREMENT'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counterState} --</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={deccrementHandler}>DECCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
