import { Link } from "react-router-dom";
import { useBlogsQuery } from "../redux/features/blog/blogApi";

const AllBlogs = () => {
  const { data: blogs = [], isLoading, isError, error } = useBlogsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load blogs: {error.message}</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No blogs available.</p>
      </div>
    );
  }
  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-[Montserrat] text-5xl font-bold text-center">
          Blogs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-20">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-neutral p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className=" mb-4">By {blog.author}</p>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content.replace(/<[^>]+>/g, "").slice(0, 200) + "...",
                }}
              ></div>
              <div className="mt-4">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
