import React from "react";

import SubTitle from "@/components/SubTitle";

import { MyAccount } from "@/features/SideAccount/MyAccount";
import { RecommendAcc } from "@/features/SideAccount/RecommendAcc";

export const SideAccount = () => {
  return (
    <div className="hidden lg:block w-full self-start max-w-80 mt-9 pl-16">
      <MyAccount />
      <div className="flex justify-between mt-4">
        <SubTitle gray bold>
          แนะนำสำหรับคุณ
        </SubTitle>
        <SubTitle size="sm" bold>
          ดูทั้งหมด
        </SubTitle>
      </div>
      <RecommendAcc />
      <SubTitle size="sm" className="mt-8 text-gray-300">
        เกี่ยวกับ ความช่วยเหลือ ข่าวประชาสัมพันธ์
      </SubTitle>
      <SubTitle size="sm" className="text-gray-300">
        API งาน ความเป็นส่วนตัว ข้อกำหนด
      </SubTitle>
      <SubTitle size="sm" className="mb-4 text-gray-300">
        ตำแหน่ง ภาษา Meta Verified
      </SubTitle>
      <SubTitle size="sm" className="text-gray-300">
        © 2025 Instagram from Meta
      </SubTitle>
    </div>
  );
};
