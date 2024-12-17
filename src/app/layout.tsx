import "./globals.css"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: {
    default: 'TOLL Legal Consulting',
    template: '%s | TOLL Legal Consulting'
  },
  description: 'Legal consulting for startups, law firms, and individuals',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://toll-legal.com',
    siteName: 'TOLL Legal Consulting'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
