import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { ModeToggle } from './mode-toggle'
import { Button, buttonVariants } from './ui/button'

interface BioProps {
  bio: {
    name: string
    avatar: string
    jobTitle: string
    website: string
    about: string
    contacts: {
      label: string
      value: string
      href: string
    }[]
  }
}

export function Bio({ bio }: BioProps) {
  return (
    <section className='flex items-center'>
      <Image
        alt='Author'
        src={bio.avatar}
        width={80}
        height={80}
        className='rounded-full object-cover'
      />
      <div className='ml-4 flex-1'>
        <h1 className='mb-0.5 text-xl'>{bio.name}</h1>
        <p className='text-muted-foreground text-sm'>{bio.jobTitle}</p>

        {bio.website ? (
          <span className='text-muted-foreground bg-secondary rounded-full px-2 py-1 text-xs'>
            <Link href={bio.website} target='_blank' rel='noopener noreferrer'>
              {bio.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}
            </Link>
          </span>
        ) : null}
      </div>
      <ModeToggle />
    </section>
  )
}
