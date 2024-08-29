import Link from 'next/link'
import React from 'react'

export default function ArticlePage() {
  return (
    <div>
      <Link href={'/Posts'}>
        <button>To me to posts</button>
      </Link>
    </div>
  )
}
