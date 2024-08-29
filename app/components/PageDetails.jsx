import React from 'react'

export default async function PageDetails({postId}) {
    console.log(postId)
    
    await new Promise((resolve)=>{   // wait 2 second until request data ,but not loved 
      setTimeout(()=>{
        resolve()
      },2000)
    })
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next:{
          revalidate:120,    //isr
        }
      })
      const post= await response.json();
      
  return (
        <div className='my-3 rounded mx-5 p-5 bg-slate-300'>
              <h1 className='font-bold text-2xl '>{post.title}</h1>
              <p>{post.body}</p>
            </div>
  )
}
