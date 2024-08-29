import React from 'react'

export default function page(props) {
    console.log(props)
  return (
    <div>
        <h2>Show title</h2>
        <h2>{props.params.title}</h2>
    </div>
    
  )
}
