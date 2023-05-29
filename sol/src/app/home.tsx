import Link from 'next/link';
import getPostMetadata from '@/api/postAPI';
import '@/styles/globals.css';
import Image from 'next/image';
import { PostMetadata } from '@/api/PostMetadata';

const PostPreview = (metadata: PostMetadata) => {
  return (
    <>
    </>
  )
}

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews: any = postMetadata.map((metadata) =>
    (
      <Link href={`/posts/${metadata.slug}`} key={metadata.slug}>
        <li className="mainBoxLi">
          <div className="imageBox">
            <Image className="object-cover" src={metadata.image} alt='image' layout="fill"/>
          </div>
          <div className="previewBox">
            <h3 className="previewBoxTag">#{metadata.slug}</h3>
            <h1 className="previewBoxTitle">{metadata.title}</h1>
            <p className="previewBoxSubtitle">{metadata.subtitle}</p>
          </div>
          <div className="previewTimeBox">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="previewTimeText">{metadata.date}</p>
          </div>
        </li>
      </Link>
    ));

  return (
    <>
        <section className="mainBody">
          <div className="mainContainer">
            <ul className="mainBox">
              {postPreviews}
            </ul>
          </div>
        </section>
    </>
  );
}
export default Home;
