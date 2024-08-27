export const Button = ({ className, btn_name, onSubmit, onClick }) => {
  return (
    <button className={className} onClick={onClick} onSubmit={onSubmit}>
      {btn_name}
    </button>
  );
};
