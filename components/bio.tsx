import React from 'react'
import Image from 'next/image'

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
      <div className='ml-4'>
        <h1 className='mb-0.5 text-xl text-slate-900 dark:text-slate-100'>
          {bio.name}
        </h1>
        <p className='text-slate-600 dark:text-slate-300 text-sm'>
          {bio.jobTitle}
        </p>
        {bio.website ? (
          <span className='text-sm text-slate-400 dark:text-slate-400'>
            <a
              href={bio.website}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              {bio.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}
            </a>
          </span>
        ) : null}
      </div>
    </section>
  )
}
