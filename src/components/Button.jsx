import cx from "./Button.module.scss";

export const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      className={`${cx.container} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
