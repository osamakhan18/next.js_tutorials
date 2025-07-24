import { promises } from "dns";

export default  async function product({
  params,

}:{params:Promise<{productId:string}>}

){
  const productId = (await params).productId
  return<>
  <h1>product details</h1>

  </>
}