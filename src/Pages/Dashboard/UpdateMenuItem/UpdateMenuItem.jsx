import { useParams } from "react-router-dom";
import useMenuData from "../../../Hooks/useMenuData";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateMenuItem = () => {
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxios();
  //   const {loadedData}=useLoaderData();
  //   console.log(loadedData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const [menuData] = useMenuData();
  const filteredItemData = menuData.find((data) => data._id === id);
  const onSubmit = async (data) => {
    const imageFile = { image: data.file[0] };
    const res = await axiosCommon.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const newMenuItem = {
        name: data.recipe,
        recipe: data.details,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const updateMenuItemResponse = await axiosSecure.put(
        `/menu/${id}`,
        newMenuItem
      );
      console.log(updateMenuItemResponse.data);
      if (updateMenuItemResponse.data.modifiedCount) {
        Swal.fire({
          title: "Update Successfully!",
          text: `${data.recipe} is added to the menu.`,
          icon: "success",
        });
        reset();
      }
    }
  };
  return (
    <div className="p-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"UPDATE ITEM"}
          subHeading={"Update your menu"}
        ></SectionTitle>
      </div>
      <div className="bg-[#F3F3F3] p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="recipe"
              className="block text-xl font-semibold text-[#151515] mb-2"
            >
              Recipe name*
            </label>
            <input
              type="text"
              id="recipe"
              defaultValue={filteredItemData?.name}
              placeholder="Recipe name"
              {...register("recipe", { required: "Recipe name is required" })}
              className="w-full p-2 border"
            />
            {errors.recipe && (
              <span className="text-red-500 text-sm">
                {errors.recipe.message}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label
                htmlFor="category"
                className="block text-xl font-semibold text-[#151515] mb-2"
              >
                Category*
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 w-full"
                {...register("category", {
                  required: "Category name is required",
                })}
                // defaultValue=""
                defaultValue={filteredItemData?.category}
              >
                <option value="" disabled>
                  Select Your Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <span className="text-red-500 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div className="w-1/2">
              <label
                htmlFor="price"
                className="block text-xl font-semibold text-[#151515] mb-2"
              >
                Price*
              </label>
              <input
                type="number"
                id="price"
                defaultValue={filteredItemData?.price}
                placeholder="Price"
                {...register("price", { required: "Price is required" })}
                className="w-full p-2 border"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="details"
              className="block text-xl font-semibold text-[#151515] mb-2"
            >
              Recipe Details*
            </label>
            <textarea
              name="details"
              id="details"
              defaultValue={filteredItemData?.recipe}
              rows={10}
              className="border w-full"
              {...register("details", {
                required: "Recipe details is required",
              })}
            ></textarea>
            {errors.details && (
              <span className="text-red-500 text-sm">
                {errors.details.message}
              </span>
            )}
          </div>
          <div>
            {/* <label
              htmlFor="image"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Image
            </label> */}

            <input
              type="file"
              className="block w-full px-3 py-3 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
              {...register("file", {
                required: "Image file is required",
              })}
            />
            {errors.file && (
              <span className="text-red-500 text-sm">
                {errors.file.message}
              </span>
            )}
            <div>
              <input
                type="submit"
                value="Add Item"
                className="border mt-2 px-4 py-3 text-xl text-white font-semibold bg-gradient-to-r from-[#835D23]  to-[#B58130]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenuItem;
