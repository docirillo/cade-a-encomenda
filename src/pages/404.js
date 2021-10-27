import Image from 'next/image';
import error404 from '../../public/images/404.png';

export default function Custom404() {
  return (
    <div className={`flex justify-center items-center`}>
      <Image src={error404} alt="" />
    </div>
  );
}
