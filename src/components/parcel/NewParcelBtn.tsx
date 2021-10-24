interface NewParcelBtnProps {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function NewParcelBtn(props: NewParcelBtnProps) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-yellow-500 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
