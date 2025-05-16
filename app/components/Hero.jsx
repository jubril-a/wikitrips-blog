const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(1deg,#03cdfd,#397dd6)] min-h-[480px] flex items-center p-4 sm:px-16 lg:px-24 before:content-[''] before:absolute before:inset-0 before:bg-[url('/geometric-bg.jpg')] before:opacity-3 before:mix-blend-color-burn">
        <div className="relative z-10 w-full max-w-[1024px] mx-auto">
            <main className="max-w-[500px]">
                <span>The WikiBlog:</span>
                <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Travel Guides, Destination Highlights, and Tour Tips</h1>
                <p>Helpful articles on top destinations, travel tips, visa assistance, and guided tour experiences to help you plan better trips.</p>
            </main>
        </div>
    </section>
  )
}

export default Hero