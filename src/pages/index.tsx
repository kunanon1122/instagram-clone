import React from "react";

import { SwiperStory } from "@/features/SwiperStory";
import { SideBar } from "@/features/SideBar";
import { PostInfinite } from "@/features/PostInfinite";
import { SideAccount } from "@/features/SideAccount";
import { Navbar } from "@/features/Navbar";
import { Footer } from "@/features/Footer";
import { MenuBar } from "@/features/MenuBar";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-full min-h-screen flex flex-col justify-self-center px-3 md:px-0 md:flex-row md:justify-self-auto md:justify-between">
          <SideBar />

          <div className="fixed md:hidden h-15 w-full px-3 border-b top-0 left-0 bg-white z-30">
            <Navbar />
          </div>

          <div className="flex-1 flex flex-wrap justify-center items-center mt-14 md:mt-0">
            <div className="w-full max-w-157.5 min-h-[calc(100vh-108px)]">
              <div className="h-21 mt-4 mb-6 py-2 md:px-8">
                <SwiperStory />
              </div>
              <div className="max-w-117 justify-self-center">
                <PostInfinite />
              </div>
            </div>

            <SideAccount />
            <Footer />
          </div>

          <div className="block md:hidden h-12 w-full">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
