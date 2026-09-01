import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import axios from "axios";

const Collection = () => {
  const { products, search, showSearch, backendUrl } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [categories, setCategories] = useState([]);

  const [sortType, setSortType] = useState("relevant");

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/category/list");

      if (response.data.success) {
        setCategories(response.data.categories);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Find the currently selected category
  const selectedCategory = categories.find((item) => item.name === category);

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category filter
    if (category) {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }

    // Subcategory filter
    if (subCategory) {
      productsCopy = productsCopy.filter(
        (item) => item.subCategory === subCategory,
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  // Fetch categories once when page loads
  useEffect(() => {
    fetchCategories();
  }, []);

  // Re-filter products
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  // Sort products
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* FILTER OPTIONS */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          الفلاتر
          <img
            src={assets.dropdown}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* CATEGORY FILTER */}
        <div
          className={`border border-gray-300 px-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);

              // reset subcategory when category changes
              setSubCategory("");
            }}
            className="border px-3 py-2 w-full"
          >
            <option value="">جميع الفئات</option>

            {categories.map((item) => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* SUBCATEGORY FILTER */}
        <div
          className={`border border-gray-300 px-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border px-3 py-2 w-full"
            disabled={!category}
          >
            <option value="">جميع الفئات الفرعية</option>

            {selectedCategory?.subCategories?.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
