interface NewParcelBtnProps {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
}

export default function NewParcelBtn(props: NewParcelBtnProps) {
  return (
    <button
      className={`bg-yellow-500 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
