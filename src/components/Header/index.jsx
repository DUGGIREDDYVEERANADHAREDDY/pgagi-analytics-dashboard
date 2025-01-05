import { CloseSVG } from "../Input/close.jsx";
import { Img, Text, Button, Input } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex justify-between items-center gap-5`}>
      <Input
        name="Search Field"
        placeholder={`Search here`}
        value={searchBarValue1}
        onChange={(e) => setSearchBarValue1(e.target.value)}
        suffix={
          <div className="flex h-[24px] w-[24px] items-center justify-center">
            {searchBarValue1?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} />
            ) : (
              <Img src="images/img_search_gray_500_04_1.svg" alt="Search" className="h-[24px] w-[24px]" />
            )}
          </div>
        }
        className="h-[56px] w-[66%] gap-4 rounded-lg border border-gray-200 bg-gray-50_01 px-8 font-barlow text-[16px] text-gray-500_02 md:w-full sm:px-4"
      />
      <div className="flex w-[28%] items-center justify-between gap-5 md:w-full">
        <div className="flex w-[32%] items-center justify-between gap-5">
          <a href="#">
            <Button className="h-[54px] w-[54px] rounded-[14px] bg-transparency-quantinery px-2.5">
              <Img src="images/img_icon_cyan_a700_1.svg" />
            </Button>
          </a>
          <a href="#">
            <Button className="h-[48px] w-[48px] self-end rounded-[14px] bg-transparency-quantinery px-2">
              <Img src="images/img_search_cyan_a700.svg" />
            </Button>
          </a>
        </div>
        <div className="h-[56px] w-px rounded-[50%] bg-blue_gray-100" />
        <div className="flex w-[46%] items-start justify-between gap-5">
          <div className="flex flex-col items-start gap-0.5">
            <Text className="font-barlow text-[18px] font-normal text-gray-500_01 lg:text-[15px]">Hello,</Text>
            <Text className="font-barlow text-[20px] font-normal text-blue_gray-800 lg:text-[17px]">Samantha</Text>
          </div>
          <Img
            src="images/img_placeholder.png"
            alt="Profile Image"
            className="h-[56px] w-[26%] self-center rounded-[26px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}
