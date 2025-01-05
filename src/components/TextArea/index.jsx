import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  tarOutlineGray40059: "!border-gray-400_59 border border-solid bg-white-a700 !focus:outline-none !focus:ring-0",
};
const sizes = {
  xs: "h-[176px] p-3 text-[24px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineGray40059",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]} w-full bg-transparent outline-none border-none !focus:outline-none !focus:ring-0`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
        className="w-full bg-transparent outline-none border-none !focus:outline-none !focus:ring-0"
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarOutlineGray40059"]),
};

export { TextArea };
