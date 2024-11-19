const Input = ({ name, className, type, placeholder, value, onchange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      className={className}
    ></input>
  );
};
export default Input;
