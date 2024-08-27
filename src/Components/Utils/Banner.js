export const Banner = ({
  className1,
  className2,
  className3,

  text,
  children,
  img,
  heading,
  subheading,
}) => {
  return (
    <div className={className1}>
      <div className={className2}>{children}</div>
      <div className={className3}></div>
    </div>
  );
};
