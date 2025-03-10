import PropTypes from "prop-types";

const Button = ({ onClick, text, color, textColor, className}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 rounded-md hover:bg-[#2e3034] transition-all duration-300 cursor-pointer border border-[#e4e4e7]`}
      style={{ backgroundColor: color, color: textColor}}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Button;
