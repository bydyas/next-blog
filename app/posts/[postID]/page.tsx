import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

  const { title, date, contentHtml } = await getPostData(postID);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
