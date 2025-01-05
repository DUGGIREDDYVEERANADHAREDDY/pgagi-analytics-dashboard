import { Button, Heading, Text, Img } from "./..";
import React from "react";

export default function ProductDetails1({
  productCode = "AX001232",
  productCategory = "Salads",
  editButtonLabel = "Edit",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-2 p-[22px] sm:p-4 bg-white-a700 shadow-xs rounded-[14px]`}
    >
      <Img
        src="images/img_rectangle_5.png"
        alt="Productimage"
        className="ml-[38px] mr-[46px] h-[248px] w-full rounded-[20px] object-cover"
      />
      <Text as="p" className="text-[18px] font-normal text-blue_gray-800">
        {productCode}
      </Text>
      <Heading size="headings" as="h4" className="text-[24px] font-semibold text-blue_gray-800">
        {productCategory}
      </Heading>
      <Button size="xl" shape="round" className="min-w-[100px] self-end rounded-[5px] px-[34px] font-medium sm:px-5">
        {editButtonLabel}
      </Button>
    </div>
  );
}
