interface TextAreaProps {
  value: any;
  text: string;
  readonly?: boolean;
  className?: string;
  maxlength?: any;
  onChange?: (value: any) => void;
}

export default function TextArea(props: TextAreaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <textarea
        onChange={(e) => props.onChange?.(e.target.value)}
        value={props.value}
        readOnly={props.readonly}
        maxLength={props.maxlength}
        className={`border-sky-800 rounded-md focus:outline-none dark:bg-gray-500 bg-white px-2 py-7 resize-y${
          props.readonly ? '' : 'focus:bg-white dark:text-white'
        }`}
      />
    </div>
  );
}
