import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkLabor — Pakistan Ka Digital Labour Chowk',
  description:
    'LinkLabor connects daily-wage workers with employers across Pakistan. Find verified workers for plumbing, electrical, masonry, and 60+ more skills — instantly.',
  keywords: ['daily wage workers', 'labour app Pakistan', 'mazdoor app', 'hire workers Pakistan'],
  openGraph: {
    title: 'LinkLabor — Pakistan Ka Digital Labour Chowk',
    description: 'Connecting Pakistan\'s daily-wage workers with employers through a trusted, verified mobile platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
