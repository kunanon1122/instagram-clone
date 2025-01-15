import React from "react";

import { Navbar } from "@/features/Navbar";
import { SideBar } from "@/features/SideBar";
import { PostInfinite } from "@/features/PostInfinite";
import { SideAccount } from "@/features/SideAccount";
import { Footer } from "@/features/Footer";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between">
        <div className="w-full min-h-screen flex flex-col justify-self-center px-3 md:px-0 md:flex-row md:justify-self-auto md:justify-between">
          <SideBar />

          <div className="block md:hidden h-15 w-full px-4">mobile box top</div>

          <div className="flex-1 flex flex-wrap justify-center items-center">
            <div className="w-full max-w-157.5 min-h-[calc(100vh-108px)]">
              <div className="h-21 mt-4 mb-6 py-2 md:px-8">
                <Navbar />
              </div>
              <div className="max-w-117 justify-self-center">
                <PostInfinite />
              </div>
            </div>

            <SideAccount />
            <Footer />
          </div>

          <div className="block md:hidden h-12 w-full">mobile box bottom</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
