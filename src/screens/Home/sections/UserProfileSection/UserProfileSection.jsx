import React from "react";

export const UserProfileSection = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 md:px-8 lg:px-16 xl:px-[260px] py-4 relative">
      <img
        className="flex-shrink-0 max-w-[752px] h-auto object-cover"
        alt="Image"
        src="/image-6569.png"
      />

      <img
        className="flex-shrink-0 w-[66.3px] h-[24.81px]"
        alt="Group"
        src="/group-1000016644.png"
      />

      <div className="flex items-center justify-end flex-shrink-0 gap-4">
        <div className="text-right w-[147px]  font-normal text-[#00A651] text-sm">
          <span className="font-bold">
            رئيس مجلس الإدارة ورئيس التحرير
            <br />
          </span>

          <span className="font-bold text-xl">ماجد علي</span>
        </div>

        <img
          className="flex-shrink-0 w-[168px] h-[61px] object-cover"
          alt="Image"
          src="/image--8-.png"
        />
      </div>
    </header>
  );
};
