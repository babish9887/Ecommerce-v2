import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { formatCurrency } from '@/lib/Formatter'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

function ProductCard({id, name, price, description, imagePath}:{id:string, name:string,price:number, description:string, imagePath:string}) {
      console.log(imagePath);
  return (
    <Card className='flex overflow-hidden flex-col'>
      <div className='relative w-full h-auto aspect-video'>
            <Image src={imagePath} fill alt={name} priority sizes='20'/>
      </div>
      <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{formatCurrency(price)}</CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
            <p className='line-clamp-4'>{description}</p>
      </CardContent>
      <CardFooter>
            <Button><Link href={`/products/${id}/purchase`}>Get this Product</Link></Button>
      </CardFooter>
    </Card>
  )
}

export function ProductCardSkeleton(){
      return(
            <Card className='overflow-hidden flex flex-col animate-pulse'>
                  <div className='w-full aspect-video bg-gray-300'/>
                  <CardHeader>
                        <CardTitle>
                              <div className='w-3/4 h-6 rounded-full bg-gray-300'/>
                        </CardTitle>
                        <CardDescription>
                              <div className='w-1/2 h-4 rounded-full bg-gray-300'/>
                        </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                        <div className='w-full rounded-full bg-gray-300'/>
                        <div className='w-full rounded-full bg-gray-300'/>
                        <div className='w-3/4 rounded-full bg-gray-300'/>
                  </CardContent>
                  <CardFooter>
                        <Button className='w-full' disabled size="lg"></Button>
                  </CardFooter>

            </Card>
      )
}

export default ProductCard