import { useRef } from "react";
import { BsCheck } from "react-icons/bs";

const CheckBox = ({ checked, onChange, label }) => {
  const inputRef = useRef(null);

  const handeChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={handeChange}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <BsCheck className="custom-checkbox__checkmark__icon" />
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
