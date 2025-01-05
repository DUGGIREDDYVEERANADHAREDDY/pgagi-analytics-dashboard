import React from "react";

const sizes = {
  heading3xl: "text-[42px] font-bold lg:text-[35px] md:text-[38px] sm:text-[32px]",
  textxs: "text-[12px] font-medium",
  texts: "text-[14px] font-medium",
  textmd: "text-[15px] font-medium",
  textlg: "text-[16px] font-medium lg:text-[13px]",
  text2xl: "text-[20px] font-medium lg:text-[17px]",
  text3xl: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  text4xl: "text-[25px] font-medium lg:text-[21px] md:text-[23px] sm:text-[21px]",
  headingxs: "text-[18px] font-bold lg:text-[15px]",
  headings: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  headingmd: "text-[26px] font-semibold lg:text-[22px] md:text-[24px] sm:text-[22px]",
  headinglg: "text-[28px] font-bold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  headingxl: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
  heading2xl: "text-[42px] font-bold lg:text-[35px] md:text-[38px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-sfpro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
