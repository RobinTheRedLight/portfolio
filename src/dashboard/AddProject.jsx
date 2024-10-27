import { useForm, useFieldArray } from "react-hook-form";
import { useProjectMutation } from "../redux/features/project/projectApi";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [addProject, { isLoading, isSuccess, error }] = useProjectMutation();

  // Use useFieldArray for dynamic technologies input
  const {
    fields: technologyFields,
    append: appendTechnology,
    remove: removeTechnology,
  } = useFieldArray({
    control,
    name: "technologies",
  });

  // Use useFieldArray for dynamic description input
  const {
    fields: descriptionFields,
    append: appendDescription,
    remove: removeDescription,
  } = useFieldArray({
    control,
    name: "description",
  });

  const onSubmit = async (data) => {
    try {
      // Transform technologies and description arrays from objects to strings
      const transformedData = {
        ...data,
        technologies: data.technologies.map((tech) => tech.name),
        description: data.description.map((desc) => desc.point),
      };

      await addProject(transformedData).unwrap();
      reset();
      alert("Project added successfully!");
    } catch (err) {
      console.error("Failed to add project:", err);
      // Handle error if needed
    }
  };

  return (
    <div className="flex w-full max-w-3xl min-h-screen">
      <div className="w-full p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center font-[Montserrat]">Add Project</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Project Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Project Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Project name is required" })}
              className={`block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter project name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className={`block w-full px-3 py-2 border ${
                errors.image ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter image URL"
            />
            {errors.image && (
              <p className="mt-2 text-sm text-red-600">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Live Site Link */}
          <div className="mb-4">
            <label
              htmlFor="liveSiteLink"
              className="block text-sm font-medium mb-1"
            >
              Live Site Link
            </label>
            <input
              id="liveSiteLink"
              type="text"
              {...register("liveSiteLink", {
                required: "Live site link is required",
              })}
              className={`block w-full px-3 py-2 border ${
                errors.liveSiteLink ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter live site URL"
            />
            {errors.liveSiteLink && (
              <p className="mt-2 text-sm text-red-600">
                {errors.liveSiteLink.message}
              </p>
            )}
          </div>

          {/* Client Code Link */}
          <div className="mb-4">
            <label
              htmlFor="clientCodeLink"
              className="block text-sm font-medium mb-1"
            >
              Client Code Link
            </label>
            <input
              id="clientCodeLink"
              type="text"
              {...register("clientCodeLink", {
                required: "Client code link is required",
              })}
              className={`block w-full px-3 py-2 border ${
                errors.clientCodeLink ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter client code URL"
            />
            {errors.clientCodeLink && (
              <p className="mt-2 text-sm text-red-600">
                {errors.clientCodeLink.message}
              </p>
            )}
          </div>

          {/* Server Code Link (Optional) */}
          <div className="mb-4">
            <label
              htmlFor="serverCodeLink"
              className="block text-sm font-medium mb-1"
            >
              Server Code Link (Optional)
            </label>
            <input
              id="serverCodeLink"
              type="text"
              {...register("serverCodeLink")}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter server code URL"
            />
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Technologies
            </label>
            {technologyFields.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  type="text"
                  {...register(`technologies.${index}.name`, {
                    required: "Technology is required",
                  })}
                  className={`block w-full px-3 py-2 border ${
                    errors.technologies && errors.technologies[index]
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="Enter technology"
                />
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            {errors.technologies && (
              <p className="mt-2 text-sm text-red-600">
                {errors.technologies.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => appendTechnology({ name: "" })}
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            >
              Add Technology
            </button>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            {descriptionFields.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  type="text"
                  {...register(`description.${index}.point`, {
                    required: "Description point is required",
                  })}
                  className={`block w-full px-3 py-2 border ${
                    errors.description && errors.description[index]
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="Enter description point"
                />
                <button
                  type="button"
                  onClick={() => removeDescription(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            {errors.description && (
              <p className="mt-2 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => appendDescription({ point: "" })}
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            >
              Add Description Point
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Adding..." : "Add Project"}
          </button>

          {/* Error Message */}
          {error && (
            <p className="mt-2 text-sm text-red-600">
              An error occurred while adding the project.
            </p>
          )}

          {/* Success Message */}
          {isSuccess && (
            <p className="mt-2 text-sm text-green-600">
              Project added successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProject;
