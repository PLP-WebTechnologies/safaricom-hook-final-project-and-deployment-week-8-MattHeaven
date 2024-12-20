import React from 'react'

const BlogPage = () => {
    return (
        <>
            
                <div className="max-w-4xl mx-auto mt-24 px-4">
                    <p className="uppercase text-lg tracking-widest text-gray-800">Business</p>

                    <div className="mt-6">
                    <h1 className="text-4xl font-semibold">
                        Tesla hired a PR firm to monitor employees
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Amet amet euismod a eu erat.
                        At rhoncus arcu ante malesuada non. Nulla sed tortor hac vitae mattis
                        tellus pellentesque.
                    </p>
                    </div>

                    <img
                    src="https://via.placeholder.com/1197x400"
                    alt="Blog"
                    className="w-full h-auto mt-6 rounded-md"
                    />

                    <p className="mt-4 text-lg text-gray-700">
                    Facebook is shutting down its podcast service and will remove them
                    altogether from its platform on June 3, Bloomberg reported citing a
                    company note. Users won't be allowed to add podcasts starting this week
                    while the Live Audio Rooms will reportedly be integrated into Facebook
                    Live.
                    </p>

                    <div className="mt-12">
                    <h2 className="text-3xl font-medium">Read More:</h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="space-y-4">
                            <div className="h-48 bg-gray-300 rounded-lg"></div>
                            <h3 className="text-xl font-semibold">shadcn/ui</h3>
                            <p className="text-sm text-gray-700">
                            Beautifully designed components built with Radix UI and Tailwind
                            CSS.
                            </p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
        
          </>
    );
  };
  
  export default BlogPage;