import fs from 'fs';
import { PostMetadata } from '@/api/PostMetadata';
import matter from 'gray-matter';

const tagList: string[] = ['CS', 'Algorithm', 'Backend-Infra', 'Language', 'Review']

const getPostMetadata = (): PostMetadata[] => {
  const files: string[] = new Array();
  tagList.map((tagName) => {
    const fileName = fs.readdirSync('./src/posts/' + tagName + '/').map((name) => `${tagName}/${name}`);
    files.push(...fileName);
  });

  const posts = files.map((fileName) => {
    const fileContents = fs.readFileSync(`./src/posts/${fileName}/README.md`, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: matterResult.data.slug,
      image: matterResult.data.image,
      tag: matterResult.data.tag
    };
  });

  return posts;
}

export default getPostMetadata;