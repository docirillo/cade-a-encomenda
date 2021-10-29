interface ButtonProps {
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`text-white px-4 py-2 rounded-md bg-violet-500 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
