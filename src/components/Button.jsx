import { BsCart4 } from "react-icons/bs";

const Button = ({ background, size, animate, handeClick, icon, children }) => {
  const bg = background ? `bg-${background}` : "bg-main";
  const Size = size ? "btn-" + size : "";
  const animation = animate ? "btn-animate" : "";

  return (
    <button
      className={`btn ${bg} ${Size} ${animation} `}
      onClick={handeClick ? handeClick : null}
    >
      <span className="btn__txt">{children}</span>
      {icon ? <BsCart4 className="btn__icon" /> : null}
    </button>
  );
};

export default Button;
