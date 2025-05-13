import { Suspense } from 'react'
import Blog from "./components/Blog"
import Session from "../components/Session"
import Footer from "../components/Footer"

export default function page() {

  return (
    <>
      <Suspense fallback={<p>Loading post...</p>}>
        <Blog />
      </Suspense>
      <Session />
      <Footer />
    </>
  )
}
