import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory, productId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // First: products from the same subcategory
      const sameSubCategory = products.filter(
        (item) => item.subCategory === subCategory && item._id !== productId,
      );

      // Second: other products from the same main category
      const sameCategory = products.filter(
        (item) =>
          item.category === category &&
          item.subCategory !== subCategory &&
          item._id !== productId,
      );

      // Same subcategory products appear first,
      // then other products from the same category
      const relatedProducts = [...sameSubCategory, ...sameCategory];

      // Show maximum 5 related products
      setRelated(relatedProducts.slice(0, 5));
    }
  }, [products, category, subCategory, productId]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"منتجات"} text2={"ذات صلة"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
