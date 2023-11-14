import Image from 'next/image'

import { ModeToggle } from '@/components/mode-toggle'
import { profileData } from '@/data/profile'

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
      <section className="flex items-center">
      <Image
            alt="Author"
            src={profileData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
      </section>
    </main>
  )
}
