import { useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useBlogMutation } from "../redux/features/blog/blogApi";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addBlog, { isLoading, isSuccess, error }] = useBlogMutation();
  const [content, setContent] = useState("");

  const onSubmit = async (data) => {
    if (!content || content === "<p><br></p>") {
      alert("Content is required");
      return;
    }

    try {
      const blogData = {
        ...data,
        content,
        createdAt: new Date().toISOString(),
      };

      await addBlog(blogData).unwrap();
      reset();
      setContent("");
      alert("Blog posted successfully!");
    } catch (err) {
      console.error("Failed to post blog:", err);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-3xl mx-auto  p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center font-[Montserrat]">Add Blog</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className={`block w-full px-3 py-2 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium mb-1">
              Author
            </label>
            <input
              id="author"
              type="text"
              {...register("author", { required: "Author name is required" })}
              className={`block w-full px-3 py-2 border ${
                errors.author ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter author name"
            />
            {errors.author && (
              <p className="mt-2 text-sm text-red-600">
                {errors.author.message}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <Editor
              apiKey="7r6cd2u19u60jr9wi8gtnqk2uwpoo82ia4izvx1ogvapmxfx"
              value={content}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(newContent) => setContent(newContent)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Posting..." : "Post Blog"}
          </button>

          {/* Error Message */}
          {error && (
            <p className="mt-2 text-sm text-red-600">
              An error occurred while posting the blog.
            </p>
          )}

          {/* Success Message */}
          {isSuccess && (
            <p className="mt-2 text-sm text-green-600">
              Blog posted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
