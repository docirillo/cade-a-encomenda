interface InputProps {
  type?: 'text' | 'number' | 'email' | 'tel' | 'checkbox';
  value: any;
  text: string;
  readonly?: boolean;
  className?: string;
  onChange?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mt-2 mb-1">{props.text}</label>
      <input
        onChange={(e) => props.onChange?.(e.target.value)}
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readonly}
        className={`border border-sky-800 rounded-md focus:outline-none dark:bg-gray-500 bg-white px-4 py-2 ${
          props.readonly ? '' : 'focus:bg-white dark:text-white'
        }`}
      />
    </div>
  );
}
