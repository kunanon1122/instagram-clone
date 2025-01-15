import React from "react";
import clsx from "clsx";
import SubTitle from "@/components/SubTitle";

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "hidden md:flex flex-col h-26 items-center justify-between px-20 py-4 text-sm text-gray-500 z-10"
      )}
    >
      <div className="flex flex-wrap justify-center space-x-4">
        <SubTitle size="sm">
          Meta
        </SubTitle>
        <SubTitle size="sm">
          เกี่ยวกับ
        </SubTitle>
        <SubTitle size="sm">
          บล็อก
        </SubTitle>
        <SubTitle size="sm">
          งาน
        </SubTitle>
        <SubTitle size="sm">
          ความช่วยเหลือ
        </SubTitle>
        <SubTitle size="sm">
          API
        </SubTitle>
        <SubTitle size="sm">
          ความเป็นส่วนตัว
        </SubTitle>
        <SubTitle size="sm">
          ข้อกำหนด
        </SubTitle>
        <SubTitle size="sm">
          ตำแหน่ง
        </SubTitle>
        <SubTitle size="sm">
          Instagram Lite
        </SubTitle>
        <SubTitle size="sm">
          Threads
        </SubTitle>
        <SubTitle size="sm">
          การอัพโหลดผู้ติดต่อและผู้ที่ไม่ได้ใช้บริการ
        </SubTitle>
        <SubTitle size="sm">
          Meta Verified
        </SubTitle>
      </div>
      <SubTitle size="sm" className="mt-3">
        ภาษาไทย ᐯ © 2025 Instagram from Meta
      </SubTitle>
    </footer>
  );
};
