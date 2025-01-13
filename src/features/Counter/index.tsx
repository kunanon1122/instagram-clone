import React from "react";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/reducers/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          [ - ]
        </button>
        <span> {count} </span>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          [ + ]
        </button>
      </div>
    </div>
  );
};
