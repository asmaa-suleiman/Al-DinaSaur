import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === itemId),
          );

          if (itemInfo) {
            itemInfo.quantity = cartItems[itemId];
            orderItems.push(itemInfo);
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
          );

          console.log(response.data);

          if (response.data.success) {
            // WhatsApp code
            const phoneNumber = "96103011006";

            const message = `
طلب جديد

الاسم: ${formData.firstName} ${formData.lastName}
الهاتف: ${formData.phone}
المحافظة: ${formData.state}
المدينة: ${formData.city}
العنوان: ${formData.street}

المنتجات:
${orderItems
  .map(
    (item) => `${item.name} - الكمية: ${item.quantity} - السعر: $${item.price}`,
  )
  .join("\n")}

المجموع: $${getCartAmount()}
رسوم التوصيل: $${delivery_fee}
الإجمالي: $${getCartAmount() + delivery_fee}
`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message,
            )}`;

            window.open(whatsappUrl, "_blank");

            setCartItems({});
            navigate("/");
          } else {
            toast.error(response.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="border-t pt-8 sm:pt-14 min-h-[80vh]"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* ================= LEFT SIDE - CART TOTAL ================= */}

        <div className="order-2 lg:order-1 w-full lg:w-[40%]">
          <div className="w-full">
            <CartTotal />
          </div>

          {/* Payment Method */}

          <div className="mt-10 text-right" dir="rtl">
            <div className="text-xl sm:text-2xl mb-5">
              <Title text1={"طريقة"} text2={"الدفع"} />
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setMethod("cod")}
                className="flex flex-row-reverse justify-end items-center gap-3 border p-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>

                <p className="text-gray-600 text-sm font-medium">
                  الدفع نقداً عند الاستلام
                </p>
              </div>
            </div>

            {/* Submit Button */}

            <div className="w-full mt-8">
              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 text-sm hover:bg-gray-800 transition"
              >
                تأكيد الطلب
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE - DELIVERY INFORMATION ================= */}

        <div
          className="order-1 lg:order-2 flex flex-col gap-4 w-full lg:w-[55%] lg:max-w-[600px]"
          dir="rtl"
        >
          <div className="text-xl sm:text-2xl mb-3 text-right">
            <Title text1={"معلومات"} text2={"التوصيل"} />
          </div>

          {/* First Name + Last Name */}

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
              type="text"
              placeholder="الاسم الأول"
            />

            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
              type="text"
              placeholder="اسم العائلة"
            />
          </div>

          {/* Phone */}

          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
            type="tel"
            placeholder="رقم الهاتف"
          />

          {/* City + State */}

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
              type="text"
              placeholder="المدينة"
            />

            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
              type="text"
              placeholder="المحافظة"
            />
          </div>

          {/* Street */}

          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="border border-gray-300 rounded py-2.5 px-3.5 w-full text-right outline-none focus:border-gray-500"
            type="text"
            placeholder="العنوان بالتفصيل"
          />
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
