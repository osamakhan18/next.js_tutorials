import { use } from 'react';
import Link from 'next/link';

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) {
  // Unwrap values using `use()` (this is valid in a Server Component)
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams); // default to English if lang is not set

  return (
    <div>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: <strong>{lang}</strong></p>

      <h2>Change Language</h2>
      <ul>
        <li>
          <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        </li>
        <li>
          <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </li>
        <li>
          <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </li>
      </ul>
    </div>
  );
}
