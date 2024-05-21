import ProductCard, { ProductCardSkeleton } from '@/components/ProductCard'
import db from '@/db/db'
import React, { Suspense } from 'react'
import {cache} from '@/lib/cache'

const getProducts =  cache(async()=>{
      return await db.product.findMany({
            where:{isAvailableforPurchase:true}, 
            orderBy:{name:"asc"}})
},["/products", "getProducts"], {revalidate:false})

async function page() {
  return (
      <>
      <div className='flex justify-between items-center'>
      <h1 className='text-4xl sm:5xl font-bold mb-6'>Products</h1>
      <div>
            
      </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     
      <Product />
      </div>
      </>
  )
}

async function Product(){
      const products=await getProducts()
      return products.map(product=>(
            <ProductCard key={product.id} {...product} />
      ))
}

export default page