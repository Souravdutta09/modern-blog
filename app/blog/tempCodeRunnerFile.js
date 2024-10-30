import React from 'react';

const blogs = [
  {
    title: 'Blog Post 1',
    description: 'This is the first blog post.',
    slug: 'blog-post-1',
    image: '/images/blog1.jpg',
    date: 'October 10, 2023',
    author: 'Author 1',
  },
  {
    title: 'Blog Post 2',
    description: 'This is the second blog post.',
    slug: 'blog-post-2',
    image: '/images/blog2.jpg',
    date: 'October 12, 2023',
    author: 'Author 2',
  },
  // Add more blog objects as needed
];

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-2">By {blog.author} on {blog.date}</p>
              <a href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;