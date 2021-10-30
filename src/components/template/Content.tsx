interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div className={`flex-col mt-7 text-gray-50 dark:text-gray-100`}>
      {props.children}
    </div>
  );
}
