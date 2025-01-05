import { Heading } from "./..";
import React from "react";

export default function CalendarDayList({
  daytext27 = "27",
  daytext28 = "28",
  calendarnumber1 = "1",
  daytext2 = "2",
  daytext3 = "3",
  daytext4 = "4",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 flex-1 flex-wrap`}>
      <Heading
        size="textmd"
        as="p"
        className="flex h-[26px] w-[26px] items-center justify-center bg-gray-50_7f text-center font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800_33"
      >
        {daytext27}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="flex h-[26px] w-[26px] items-center justify-center bg-gray-50_7f text-center font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800_33"
      >
        {daytext28}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="h-[26px] w-[26px] bg-gray-50_7f py-0.5 pl-1 pr-4 font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800"
      >
        {calendarnumber1}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="h-[26px] w-[26px] bg-gray-50_7f py-0.5 pl-1 pr-3 font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800"
      >
        {daytext2}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="h-[26px] w-[26px] bg-gray-50_7f py-0.5 pl-1 pr-3 font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800"
      >
        {daytext3}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="h-[26px] w-[26px] bg-gray-50_7f py-0.5 pl-1 pr-3 font-poppins text-[15px] font-medium tracking-[0.45px] text-blue_gray-800"
      >
        {daytext4}
      </Heading>
    </div>
  );
}
