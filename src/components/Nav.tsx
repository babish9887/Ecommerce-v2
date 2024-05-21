"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React, { Children, ComponentProps } from 'react'

function Nav({children}:{children:React.ReactNode}) {
  return (
    <nav className='bg-primary text-primary-foreground flex justify-center px-4'>
      {children}
    </nav>
  )
}

export function NavLink(props:Omit<ComponentProps<typeof Link>, "className">){
      const pathname=usePathname()
      const data=pathname.split('/')
      //@ts-ignore
      return <Link {...props} className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground", props.href===pathname && "bg-background text-foreground")}/>

}

export default Nav