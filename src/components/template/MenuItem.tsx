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
        className={`flex flex-col justify-center items-center h-20 w-20 hover:text-white text-gray-600 dark:text-gray-200 ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-medium`}>{props.text}</span>
      </a>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-green-400 dark:hover:bg-gray-800 cursor-pointer`}
    >
      {props.url ? (
        <Link href={props.url}>{linkRendering()}</Link>
      ) : (
        linkRendering()
      )}
    </li>
  );
}
