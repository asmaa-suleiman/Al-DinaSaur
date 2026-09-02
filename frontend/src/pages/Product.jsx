import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");

  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);

        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  //whatsapp functionality
  const askOnWhatsApp = () => {
    const phoneNumber = "96103011006";

    const productUrl = window.location.href;

    const message = `
مرحباً، لدي سؤال عن هذا المنتج:

${productData.name}

السعر: $${productData.price}

رابط المنتج:
${productUrl}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*------------- product data --------------*/}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*--------------- product images------------- */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* ----------------- product info ------------------- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8"></div>

          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black mb-2 text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            أضف إلى السلة
          </button>

          {/*whatsapp button  */}
          <button
            onClick={askOnWhatsApp}
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition"
          >
            <img src={assets.whatsapp_icon} alt="واتساب" className="w-6 h-6" />

            <span>اسأل عن المنتج عبر واتساب</span>
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>منتج أصلي 100%</p>

            <p>إمكانية الإرجاع والاستبدال خلال يوم واحد</p>
          </div>
        </div>
      </div>

      {/* -------------description and review section ----------- */}

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">الوصف</b>

          <p className="border px-5 py-3 text-sm">التقييمات (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            يمكنك الاطلاع على تفاصيل المنتج ومواصفاته واستخداماته من خلال الوصف
            الموجود أعلاه. نحرص على توفير معلومات واضحة لمساعدتك على اختيار
            المنتج المناسب لاحتياجاتك.
          </p>

          <p>
            قد تختلف بعض المواصفات بحسب نوع المنتج أو المقاس أو الموديل المتوفر.
          </p>
        </div>
      </div>

      {/* -------------------display related products ----------*/}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
