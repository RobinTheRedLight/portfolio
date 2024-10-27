import { useParams } from "react-router-dom";
import { useSingleBlogQuery } from "../redux/features/blog/blogApi";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isError, error } = useSingleBlogQuery(id);

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
        <p className="text-red-500">Failed to load blog: {error.message}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen   py-12 px-4">
      <div className="max-w-3xl mx-auto bg-neutral  p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="mb-6">By {blog.author}</p>
        {/* Blog Content */}
        <div
          className="prose max-w-none "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
