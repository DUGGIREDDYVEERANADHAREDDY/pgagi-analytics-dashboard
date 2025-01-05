import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    cyan_A700_66: "bg-cyan-a700_66 text-blue_gray-800",
    gray_100_02: "bg-gray-100_02",
    teal_A700_60: "bg-teal-a700_60 text-teal-700",
    transparency_quantinery: "bg-transparency-quantinery",
    red_400: "bg-red-400 text-white-a700",
    cyan_A700: "bg-cyan-a700 text-white-a700",
  },
};
const sizes = {
  sm: "h-[36px] px-3.5 text-[14px]",
  "3xl": "h-[54px] px-2.5",
  lg: "h-[48px] px-2",
  "4xl": "h-[54px] px-[34px] text-[16px]",
  xs: "h-[30px] px-[34px] text-[14px]",
  md: "h-[44px] px-2",
  "5xl": "h-[58px] px-2.5",
  xl: "h-[50px] px-4 text-[16px]",
  "2xl": "h-[50px] px-[34px] text-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "cyan_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["sm", "3xl", "lg", "4xl", "xs", "md", "5xl", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "cyan_A700_66",
    "gray_100_02",
    "teal_A700_60",
    "transparency_quantinery",
    "red_400",
    "cyan_A700",
  ]),
};

export { Button };
