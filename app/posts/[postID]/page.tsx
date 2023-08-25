import { getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { postID: string } }) {
  const posts = getSortedPostsData();
  const { postID } = params;

  const post = posts.find((post) => post.id === postID);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post?.title,
  };
}

export default async function Post({ params }: { params: { postID: string } }) {
  const posts = getSortedPostsData();
  const { postID } = params;

  if (!posts.find((post) => post.id === postID)) return notFound();

  return <div>page</div>;
}
