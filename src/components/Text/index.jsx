import React from "react";

const sizes = {
  body_paragraph_small: "font-barlow text-[12px] font-normal not-italic",
  body_paragraph: "font-barlow text-[14px] font-normal not-italic",
  textxl: "text-[18px] font-normal not-italic lg:text-[15px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900_01 font-sfpro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
