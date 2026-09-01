import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [editingProduct, setEditingProduct] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
  });

  // ---------------- FETCH PRODUCTS ----------------

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ---------------- REMOVE PRODUCT ----------------

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { token },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ---------------- OPEN EDIT FORM ----------------

  const editProduct = (item) => {
    setEditingProduct(item._id);

    setEditData({
      name: item.name || "",
      description: item.description || "",
      price: item.price || "",
      category: item.category || "",
      subCategory: item.subCategory || "",
    });
  };

  // ---------------- EDIT INPUT CHANGE ----------------

  const onEditChange = (event) => {
    const { name, value } = event.target;

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---------------- UPDATE PRODUCT ----------------

  const updateProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        backendUrl + "/api/product/update",
        {
          id: editingProduct,
          ...editData,
        },
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setEditingProduct(null);

        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ---------------- CATEGORIES FOR FILTER ----------------

  const categories = [
    ...new Set(list.map((item) => item.category).filter(Boolean)),
  ];

  // ---------------- FILTER PRODUCTS ----------------

  const filteredList = selectedCategory
    ? list.filter((item) => item.category === selectedCategory)
    : list;

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div dir="rtl">
      {/* PAGE TITLE */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <p className="text-lg font-medium">جميع المنتجات</p>

        {/* CATEGORY FILTER */}

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 min-w-[200px]"
        >
          <option value="">جميع الفئات</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* ---------------- TABLE ---------------- */}

      <div className="flex flex-col gap-2">
        {/* TABLE TITLE */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center py-2 px-2 border bg-gray-100 text-sm">
          <b>الصورة</b>

          <b>الاسم</b>

          <b>الفئة</b>

          <b>السعر</b>

          <b className="text-center">الإجراءات</b>
        </div>

        {/* PRODUCTS */}

        {filteredList.map((item) => (
          <div key={item._id}>
            <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center gap-2 py-2 px-2 border text-sm">
              {/* IMAGE */}

              <img className="w-12" src={item.image?.[0]} alt={item.name} />

              {/* NAME */}

              <p>{item.name}</p>

              {/* CATEGORY */}

              <p>{item.category}</p>

              {/* PRICE */}

              <p>
                {currency}
                {item.price}
              </p>

              {/* ACTIONS */}

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => editProduct(item)}
                  className="border border-gray-400 px-3 py-1 hover:bg-gray-100"
                >
                  تعديل
                </button>

                <button
                  onClick={() => removeProduct(item._id)}
                  className="text-red-500 font-bold text-lg cursor-pointer"
                >
                  X
                </button>
              </div>
            </div>

            {/* ---------------- EDIT FORM ---------------- */}

            {editingProduct === item._id && (
              <form
                onSubmit={updateProduct}
                className="border border-t-0 bg-gray-50 p-5 flex flex-col gap-4"
              >
                <p className="font-semibold text-lg">تعديل المنتج</p>

                {/* NAME */}

                <div>
                  <p className="mb-1">اسم المنتج</p>

                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={onEditChange}
                    className="border px-3 py-2 w-full"
                    required
                  />
                </div>

                {/* DESCRIPTION */}

                <div>
                  <p className="mb-1">الوصف</p>

                  <textarea
                    name="description"
                    value={editData.description}
                    onChange={onEditChange}
                    className="border px-3 py-2 w-full min-h-[100px]"
                    required
                  />
                </div>

                {/* PRICE */}

                <div>
                  <p className="mb-1">السعر</p>

                  <input
                    type="number"
                    step="any"
                    name="price"
                    value={editData.price}
                    onChange={onEditChange}
                    className="border px-3 py-2 w-full"
                    required
                  />
                </div>

                {/* CATEGORY */}

                <div>
                  <p className="mb-1">الفئة</p>

                  <input
                    type="text"
                    name="category"
                    value={editData.category}
                    onChange={onEditChange}
                    className="border px-3 py-2 w-full"
                    required
                  />
                </div>

                {/* SUBCATEGORY */}

                <div>
                  <p className="mb-1">الفئة الفرعية</p>

                  <input
                    type="text"
                    name="subCategory"
                    value={editData.subCategory}
                    onChange={onEditChange}
                    className="border px-3 py-2 w-full"
                  />
                </div>

                {/* BUTTONS */}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2"
                  >
                    حفظ التعديلات
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="border px-6 py-2"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
