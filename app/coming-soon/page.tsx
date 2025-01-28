import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 font-bomiro">Coming Soon</h1>
        <p className="text-xl text-gray-400 mb-8 font-concrete">
          We're working hard to bring you something amazing.
        </p>
        <Link href="/">
          <Button variant="primary" className="w-full text-black hover:bg-gray-200">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}