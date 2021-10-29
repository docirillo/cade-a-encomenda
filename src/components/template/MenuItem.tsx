import Link from 'next/link';

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function linkRendering() {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 text-white dark:text-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-semibold`}>{props.text}</span>
      </a>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-indigo-600 dark:hover:bg-gray-800 cursor-pointer`}
    >
      {props.url ? (
        <Link href={props.url}>{linkRendering()}</Link>
      ) : (
        linkRendering()
      )}
    </li>
  );
}
