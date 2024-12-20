import React from "react";

const blogPosts = [
  {
    title:
      "Breaking down barriers: How Raju Kendre is redefining opportunities for India’s marginalised communities",
    date: "12 November 2024",
    summary:
      "For many communities in India, access to education and leadership opportunities are scarce. Chevening alumnus Raju Kendre is on a mission to break down educational barriers and create a more equitable India—one student and one community at a time.",
    link: "#",
    image:
      "https://www.chevening.org/wp-content/uploads/2024/11/themooknayak-en_2023-02_fb4d30bd-ebbf-4426-870f-7d801c79633a_afd1d45a_43b8_4b46_bf11_e179d363bbf6-839x471.jpeg",
  },
  {
    title: "5 free courses for measuring and maximising social impact",
    date: "7 November 2024",
    summary:
      "Measuring and maximising social impact is a crucial skill for Chevening alumni looking to make a difference in their communities and beyond. We’ve curated 5 free online courses to help you develop expertise in social impact measurement and management.",
    link: "https://www.chevening.org/news/5-free-courses-for-measuring-and-maximising-social-impact/",
    image:
      "https://www.chevening.org/wp-content/uploads/2024/11/News-Blog-Featured-Image-1-839x471.png",
  },
  // Add more blog posts as needed...
];

const BlogFeed = () => {
  return (
    <>
        
        <main className="bg-gray-50 ">
        {/* Hero Section */}
        <div className="bg-blue-100 py-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mt-20">News and blogs</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The Chevening community extends to all corners of the globe. Here is
            the latest news on what is going on in the Chevening network, and
            blogs from members of our community.
            </p>
        </div>

        {/* Blog Feed */}
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
            {blogPosts.map((post, index) => (
                <article
                key={index}
                className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
                >
                <a
                    href={post.link}
                    className="md:w-1/3 flex-shrink-0 h-40 md:h-auto"
                    >
                    <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </a>
                <div className="p-6 md:w-2/3">
                    <header>
                    <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                        <a href={post.link}>{post.title}</a>
                    </h2>
                    <time className="text-sm text-gray-500">{post.date}</time>
                    </header>
                    <p className="text-gray-600 mt-4">{post.summary}</p>
                    <a
                    href={post.link}
                    className="inline-block mt-4 text-red-500 font-medium hover:underline"
                    >
                    Read full article
                    </a>
                </div>
                </article>
            ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
            <ul className="flex items-center space-x-4">
                <li>
                <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                >
                    1
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                >
                    2
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                    Next
                </a>
                </li>
            </ul>
            </div>
        </div>
        </main>
        
                  </>
  );
};

export default BlogFeed;
