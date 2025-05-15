import { Suspense } from 'react'
import Blog from "./components/Blog"
import Session from "../components/Session"
import Footer from "../components/Footer"

export default function page() {
  
  return (
    <>
      <Suspense fallback={
        <div className="grid justify-center items-center h-svh">
          <div className="loader"></div>
        </div>}>
        <Blog />
        <Session />
        <Footer />
      </Suspense>
    </>
  )
}
