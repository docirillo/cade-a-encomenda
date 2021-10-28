interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={`font-normal text-3xl text-indigo-800 dark:text-gray-100`}>
        {props.title}
      </h1>
      <h2 className={`font-normal text-sm text-indigo-700 dark:text-gray-200`}>
        {props.subtitle}
      </h2>
    </div>
  );
}
