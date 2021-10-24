interface InputParcelProps {
  type?: 'text' | 'number' | 'email' | 'tel' | 'checkbox';
  value: any;
  text: string;
  readonly?: boolean;
  className: string;
  valueChanged?: (value: any) => void;
}

export default function InputParcel(props: InputParcelProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        onChange={(e) => props.valueChanged?.(e.target.value)}
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readonly}
        className={`border border-yellow-500 rounded-md focus:outline-none bg-white px-4 py-2 ${
          props.readonly ? '' : 'focus:bg-yellow-50'
        }`}
      />
    </div>
  );
}
