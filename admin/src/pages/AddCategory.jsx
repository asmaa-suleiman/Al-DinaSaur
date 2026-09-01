import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { backendUrl } from "../App";

const AddCategory = ({ token }) => {
  const [name, setName] = useState("");

  const [subCategoryInput, setSubCategoryInput] = useState("");

  const [subCategories, setSubCategories] = useState([]);

  // ADD SUBCATEGORY TO ARRAY
  const addSubCategory = () => {
    const value = subCategoryInput.trim();

    if (!value) return;

    if (subCategories.includes(value)) {
      toast.error("هذه الفئة الفرعية موجودة");
      return;
    }

    setSubCategories((prev) => [...prev, value]);

    setSubCategoryInput("");
  };

  // REMOVE SUBCATEGORY
  const removeSubCategory = (index) => {
    setSubCategories((prev) => prev.filter((_, i) => i !== index));
  };

  // SUBMIT CATEGORY
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    console.log("SUBCATEGORIES:", subCategories);

    try {
      const response = await axios.post(
        backendUrl + "/api/category/add",
        {
          name,
          subCategories,
        },
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setSubCategories([]);
        setSubCategoryInput("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4 px-2 sm:px-0 text-lg"
      dir="rtl"
    >
      {/* CATEGORY NAME */}

      <div className="w-full max-w-[500px]">
        <p className="mb-2 font-medium text-lg">اسم الفئة</p>

        <input
          type="text"
          placeholder="مثال: الأدوات اليدوية"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-sm text-lg outline-none"
          required
        />
      </div>

      {/* SUBCATEGORY */}

      <div className="w-full max-w-[500px]">
        <p className="mb-2 font-medium text-lg">الفئات الفرعية</p>

        <div className="flex flex-col xs:flex-row sm:flex-row gap-2 w-full">
          <input
            type="text"
            placeholder="مثال: شاكوش"
            value={subCategoryInput}
            onChange={(e) => setSubCategoryInput(e.target.value)}
            className="w-full flex-1 px-3 py-2 border rounded-sm text-lg outline-none"
          />

          <button
            type="button"
            onClick={addSubCategory}
            className="w-full sm:w-auto bg-gray-800 text-white px-5 py-2 rounded-sm text-lg whitespace-nowrap"
          >
            إضافة
          </button>
        </div>
      </div>

      {/* DISPLAY SUBCATEGORIES */}

      {subCategories.length > 0 && (
        <div className="w-full max-w-[500px] flex flex-wrap gap-2">
          {subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded text-lg max-w-full"
            >
              <span className="break-words">{subCategory}</span>

              <button
                type="button"
                onClick={() => removeSubCategory(index)}
                className="text-red-500 font-bold text-xl leading-none"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* SUBMIT */}

      <button
        type="submit"
        className="w-full sm:w-32 py-3 mt-2 sm:mt-4 bg-black text-white text-lg rounded-sm"
      >
        إضافة الفئة
      </button>
    </form>
  );
};

export default AddCategory;
