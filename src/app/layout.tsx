import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

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
    <html lang="en">
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "selection:bg-primary selection:text-primary-foreground"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
