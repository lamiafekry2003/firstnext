import React from 'react'
import Todo from '../components/todo'
import Link from 'next/link';
// fetch using server side component 
export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
      next:{
        revalidate:120,    //isr
      }
    })
    const post= await response.json();
    console.log(post)



  return (
    <div>
        <h1 className=' text-center text-white'>posts</h1>
        <div>
          {post.map((post)=>(
            <Link href={`/Posts/${post.id}`}>
             <div className='my-3 rounded mx-5 p-5 bg-slate-300'>
              <h1 className='font-bold text-2xl '>{post.title}</h1>
              <p>{post.body}</p>
            </div>
            </Link>
          ))}
        </div>
        
        <div>
          <Todo/>
        </div>
    </div>
  )
}
