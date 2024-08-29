 "use client";

import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [data,setData]=useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);
  return (
    <div>
        <h1>{data?.title}</h1>
    </div>
  )
}
