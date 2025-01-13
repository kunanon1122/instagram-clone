import React from "react";
// import { useSelector } from "react-redux";

// import { Counter } from "@/features/Counter";
// import { RootState } from "@/redux/store";

const Home = () => {
  // const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div className="md:flex justify-between min-h-screen">
        <div className="hidden md:block w-full px-3 pt-2 pb-5 bg-red-500">
          box 1
        </div>

        <div className="block md:hidden h-15 w-full px-4 bg-red-500">
          mobile box top
        </div>

        <div className="w-full bg-green-500 min-h-[calc(100vh-108px)]">
          <div className="h-21 mx-4 mb-6 p-2">box 2.1</div>
          <div>box 2.2</div>
          <div>box 2.3</div>
        </div>

        <div className="block md:hidden h-12 w-full bg-red-500">
          mobile box bottom
        </div>

        <div className="hidden lg:block w-full bg-blue-500">box 3</div>
      </div>
    </div>
  );
};

export default Home;
