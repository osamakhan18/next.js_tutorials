// import { Promise } from 'dns'
import React from 'react'

export default   async function ProductDetails({params}:{
    params:Promise<{productId:string}>
}) {
    const productId = (await params).productId
  return (
    <div>the product details is {productId}</div>
  )
}
