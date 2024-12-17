import { HomePage } from "@/components/home-page"

export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

export default function Home() {
  return <HomePage />
} 