import cx from "./Button.module.scss";

export const Button = ({ onClick, children, className, dataTestId }) => {
  return (
    <button className={`${cx.container} ${className}`} onClick={onClick} data-testId={dataTestId}>
      {children}
    </button>
  );
};
