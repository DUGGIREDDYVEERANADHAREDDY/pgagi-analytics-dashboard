import { Button, Heading, Text, Img } from "./..";
import React from "react";

export default function ProductDetails({
  productCode = "AX001232",
  productDescription = "Nice Green Salad with vegetables",
  productPrice = "₹250",
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
        alt="Salad Image"
        className="ml-10 mr-12 h-[248px] w-full rounded-[20px] object-cover"
      />
      <Text as="p" className="text-[18px] font-normal text-blue_gray-800">
        {productCode}
      </Text>
      <div className="flex flex-col items-center gap-2.5 self-stretch">
        <Heading size="headings" as="h4" className="text-[24px] font-semibold text-blue_gray-800">
          {productDescription}
        </Heading>
        <div className="flex items-center justify-between gap-5 self-stretch">
          <Heading size="headingmd" as="h4" className="text-[26px] font-semibold text-blue_gray-800">
            {productPrice}
          </Heading>
          <Button size="xl" shape="round" className="min-w-[100px] rounded-[5px] px-[34px] font-medium sm:px-5">
            {editButtonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
