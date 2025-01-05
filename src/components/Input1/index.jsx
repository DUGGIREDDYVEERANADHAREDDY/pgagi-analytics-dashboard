import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};

const variants = {
  fill: {
    gray_50: "bg-gray-50",
  },
  outline: {
    black_900: "border-black-900 border border-solid",
  },
};

const sizes = {
  xs: "h-[56px] px-4 text-[16px]",
  sm: "h-[70px] px-3",
};

const Input1 = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "sm",
      color = "black_900",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && <span className="mr-2">{label}</span>}
        {!!prefix && <span className="mr-2">{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 px-2 text-start border-none outline-none focus:ring-0"
          {...restProps}
        />
        {!!suffix && <span className="ml-2">{suffix}</span>}
      </label>
    );
  },
);

Input1.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_50", "black_900"]),
};

export { Input1 };
