const Input = ({ className, type, placeholder, value, onchange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      className={className}
    ></input>
  );
};
export default Input;
