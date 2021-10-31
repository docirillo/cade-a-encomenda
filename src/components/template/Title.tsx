interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={`font-bold text-4xl text-indigo-500 dark:text-gray-100`}>
        {props.title}
      </h1>
      <h2
        className={`font-normal text-base text-indigo-500 dark:text-gray-200`}
      >
        {props.subtitle}
      </h2>
    </div>
  );
}
