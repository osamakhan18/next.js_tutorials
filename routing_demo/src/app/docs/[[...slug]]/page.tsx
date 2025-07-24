import React from 'react'

export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  let content;

  if (slug?.length === 2) {
    content = (
      <h1>
        Reviewing the first {slug[0]} and the second {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    content = <h1>This is the first {slug[0]}</h1>;
  } else {
    content = <h1>This is the slug doc page</h1>;
  }

  return <>{content}</>;
}
