import { Button, Heading, Text, Img } from "./..";
import React from "react";

export default function UserProfile({
  productCode = "AX001232",
  chefName = "Chef name",
  editButtonLabel = "Edit",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-[22px] p-[22px] sm:p-4 bg-white-a700 shadow-xs rounded-[14px]`}
    >
      <Img
        src="images/img_img.png"
        alt="Salad Image"
        className="ml-[72px] mr-[54px] h-[232px] w-[232px] rounded-[116px] object-cover"
      />
      <div className="flex flex-col items-center gap-2 self-stretch">
        <Text as="p" className="text-[18px] font-normal text-blue_gray-800">
          {productCode}
        </Text>
        <Heading size="headings" as="h4" className="text-[24px] font-semibold text-blue_gray-800">
          {chefName}
        </Heading>
        <Button size="xl" shape="round" className="min-w-[100px] self-end rounded-[5px] px-[34px] font-medium sm:px-5">
          {editButtonLabel}
        </Button>
      </div>
    </div>
  );
}
