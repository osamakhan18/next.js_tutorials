// import React from 'react'
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1>this is home page</h1>
      <Link href={"/products"}>Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English </Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French </Link>

    </div>
  )
}
