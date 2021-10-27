import Link from 'next/link';
import useAuth from '../../data/hooks/useAuth';
import Image from 'next/image';
import avatar from '../../../public/images/avatar.svg';

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth();

  return (
    <Link href="/profile" passHref={true}>
      <Image
        width="60px"
        height="60px"
        src={user?.imageUrl ?? avatar}
        alt="User Avatar"
        className={`rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  );
}
