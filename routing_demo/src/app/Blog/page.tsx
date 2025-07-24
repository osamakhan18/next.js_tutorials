import React from 'react'

export default  async function Blog() {
  await new Promise (resolve =>{
    setTimeout(()=>{resolve('international delay')},2000)
  })
  return (

    <div>
      <h2>Blog</h2>
    </div>
  )
}
