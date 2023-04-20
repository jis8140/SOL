import Link from 'next/link';
import Image from 'next/image';
import profile from '../../public/main_image.jpeg';

export default function Topbar() {
  return (
    <>
      <header>
        <div className="headerBox">
          <Link href='https://github.com/jis8140/'>
            <div className="headerIcon">
              <Image className='object-none rounded-md' src={profile} alt='프로필 사진' width={30} height={20} />
              <span className="ml-3 text-xl">개발자 전인성</span>
            </div>
          </Link>
          <nav className="headerNavBox">
            <Link href="/">
              <p className="headerNavText">Home</p>
            </Link>
            <Link href="/about">
              <p className="headerNavText">About</p>
            </Link>
            <Link href="/projects">
              <p className="headerNavText">Projects</p>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}