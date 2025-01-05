import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[20px]",
};

const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01",
    white_A700: "bg-white-a700 text-blue_gray-800",
  },
   outline: {
    blue_gray_100_01: "",
  },
  underline: {
    blue_gray_800: "text-blue_gray-800 border-b border-blue_gray-800 border-solid",
  },
  none: {
    default: "border-none bg-transparent text-gray-800 focus:outline-none", // focus:outline-none is added to prevent focus borders
  },
};

const sizes = {
  sm: "h-[54px] px-3.5",
  md: "h-[54px] px-4 text-[16px]",
  lg: "h-[66px] px-3 text-[24px]",
  xs: "h-[40px] px-3 text-[24px]",
};

const Input = React.forwardRef(
  (
    {
      className = "focus:outline-none focus:ring-0",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "blue_gray_800",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0"
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  },
);



Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline", "underline", "none"]),
  color: PropTypes.oneOf(["gray_50_01", "white_A700", "blue_gray_100_01", "blue_gray_800"]),
};

export { Input };
