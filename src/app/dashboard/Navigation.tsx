'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


function Navigation() {

const pathname = usePathname();

const navLinks = [
    { name: 'Settings', href: '/dashboard/settings' },
    { name: 'Profile', href: '/dashboard/profile' },
  ];
  console.log(navLinks);

  return (
    <>
    {navLinks.map((link) => {
       const isActive = pathname?.startsWith(link.href)

      return (
        <nav className="bg-slate-500 flex justify-center p-5">
        <Link
         className={isActive ? 'text-slate-50' : 'text-black'}
          href={link.href}
          key={link.name}
        >
          {link.name}
        </Link>

        </nav>

      )
    })}
  </>
  )
}

export default Navigation