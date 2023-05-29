import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerBox">
          <div className="footerWritterBox">
            <p>written by @ </p>
            <Link href='https://github.com/jis8140'>
              <p className="italic">개발자 전인성</p>
            </Link>
          </div>
          <nav className="footerNavBox">
            <p>connect me</p>
            <p>&nbsp;.</p>
            <p>&nbsp;jeoninseong8140@gmail.com</p>
            <p>&nbsp;.</p>
            <Link href='https://github.com/jis8140'>
              <p>&nbsp;GitHub</p>
            </Link>
            <p>&nbsp;.</p>
            <Link href='https://github.com/jis8140'>
              <p>&nbsp;Repository</p>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}