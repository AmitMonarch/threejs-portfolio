interface ButtonProps {
  name?: string;
  isBeam?: boolean;
  containerClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  name,
  isBeam = false,
  containerClass,
  onClick,
}) => {
  return (
    <button type="button" className={`btn ${containerClass}`} onClick={onClick}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
