'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

export function SmoothLink({
  href,
  children,
  className = '',
  offset = 80 // Adjust this value based on your header height
}: {
  href: string
  children: ReactNode
  className?: string
  offset?: number
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      })
      
      // Update URL without reloading
      window.history.pushState(null, '', href)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}