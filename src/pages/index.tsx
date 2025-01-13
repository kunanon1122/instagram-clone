import React from "react";
import { useSelector } from "react-redux";

import { Counter } from "@/features/Counter";
import { RootState } from "@/redux/store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div className="text-3xl text-core-red-100">{count}</div>
      <div className="mt-3">
        <Counter />
      </div>
    </div>
  );
};

export default Home;
