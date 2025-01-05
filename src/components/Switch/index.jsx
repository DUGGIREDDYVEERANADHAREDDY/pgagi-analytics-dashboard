import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtFillGray30001: {
    offColor: "#e3e4e8",
    onColor: "#0bb5c9",
    offHandleColor: "#0bb5c9",
    onHandleColor: "#0bb5c9",
  },
};
const sizes = {
  xs: {
    width: 76,
    height: 38,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillGray30001",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillGray30001"]),
};

export { Switch };
