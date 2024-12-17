'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">Something went wrong!</h2>
      <Button
        onClick={reset}
        variant="default"
      >
        Try again
      </Button>
    </div>
  )
} 