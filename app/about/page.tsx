import dynamic from "next/dynamic"
import { Suspense } from "react"

const DynamicAboutPage = dynamic(() => import("@/components/about-page"), {
  ssr: false,
})

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicAboutPage />
    </Suspense>
  )
}

