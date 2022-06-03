import { useState } from "react";
import { decrement, increment, incrementByAmount, reset } from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Counter = () => {

  const [incrementAmount, setIncrementeAmount] = useState<number>(0)

  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementeAmount(0)
    dispatch(reset())
  }

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()
  
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input 
        type="number" 
        value={incrementAmount}
        onChange={ e => setIncrementeAmount(Number(e.target.value))}
      />
      <div>
        <button
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter