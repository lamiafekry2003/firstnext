import PageDetails from '@/app/components/PageDetails'
import React, { Suspense } from 'react'

export default async function page({params}) {
    const postId = params.postId
    const loadingJsx=(
      <div>
        <h1 className='text-center text-white'>Loading......</h1>
      </div>
    )
      
  return (
    <div>
        <h1 className=' text-center text-white my-5'>PostDetails</h1>
        <Suspense fallback={loadingJsx}>
          <PageDetails postId={postId}/> 
        </Suspense>
    </div>

  )
}
