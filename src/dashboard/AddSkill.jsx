import { useForm } from "react-hook-form";
import { useSkillMutation } from "../redux/features/skill/skillApi";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addSkill, { isLoading, isSuccess, error }] = useSkillMutation();

  const onSubmit = async (data) => {
    try {
      await addSkill(data).unwrap();
      reset();
      alert("Skill added successfully!");
    } catch (err) {
      console.error("Failed to add skill:", err);
      alert("Failed to add skill. Please try again later.");
    }
  };

  return (
    <div className="shadow-md rounded-md w-full max-w-3xl">
      <div className="flex">
        <div className="w-full p-8 mt-5">
          <h1 className="text-3xl font-bold mb-6 text-center font-[Montserrat]">
            Add Skill
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Category Dropdown */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium  mb-1"
              >
                Category
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className={`block w-full px-3 py-2 border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="">Select a category</option>
                <option value="Frontend and Backend">
                  {" "}
                  Frontend and Backend
                </option>
                <option value="Languages and Tools">Languages and Tools</option>
              </select>
              {errors.category && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Skill Name Input */}
            <div className="mb-4">
              <label
                htmlFor="skillName"
                className="block text-sm font-medium  mb-1"
              >
                Skill Name
              </label>
              <input
                id="skillName"
                type="text"
                {...register("skillName", {
                  required: "Skill name is required",
                })}
                className={`block w-full px-3 py-2 border ${
                  errors.skillName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="Enter skill name"
              />
              {errors.skillName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.skillName.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isLoading ? "Adding..." : "Add Skill"}
            </button>

            {/* Error Message */}
            {error && (
              <p className="mt-2 text-sm text-red-600">
                An error occurred while adding the skill.
              </p>
            )}

            {/* Success Message */}
            {isSuccess && (
              <p className="mt-2 text-sm text-green-600">
                Skill added successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
