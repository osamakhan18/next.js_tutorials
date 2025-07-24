"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
export default function OrderProduct() {
    const router = useRouter()
    const handelChange =()=>{
        console.log("order oplaced")
        router.push('/')
        
    }
  return (
    <div>
        <h1>orderProduct</h1>
        <button onClick={handelChange}>Place Order</button>
    </div>
  )
}
