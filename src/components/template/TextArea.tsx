interface TextAreaProps {
  value: any;
  text: string;
  readonly?: boolean;
  className: string;
  valueChanged?: (value: any) => void;
}

export default function TextArea(props: TextAreaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <textarea
        onChange={(e) => props.valueChanged?.(e.target.value)}
        value={props.value}
        readOnly={props.readonly}
        className={`border border-sky-800 rounded-md focus:outline-none dark:bg-gray-500 bg-white px-6 py-12 resize-none ${
          props.readonly ? '' : 'focus:bg-white dark:text-white'
        }`}
      />
    </div>
  );
}
