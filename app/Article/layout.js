import React from 'react'
export const metadata={
    title:'Article pages'
}
export default function layout({ children }) {
  return (
    <div>
        
            <h1>Articles</h1>
        <div className='mt-14 bg-blue-500 h-52 text-white mx-9 rounded'>
          { children }
        </div>
    </div>
  )
}
