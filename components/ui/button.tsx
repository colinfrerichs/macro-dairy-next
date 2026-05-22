const Button = ({
  text,
  action,
}: {
  text: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
