import type { Metadata } from "next"
import "./globals.css"
import { GeistSans } from "geist/font"

export const metadata: Metadata = {
  title: "Next-cv",
  description: "Read.cv cloned built with Next.js and Tailwind CSS ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
