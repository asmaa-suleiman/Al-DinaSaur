import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div dir="rtl" className="text-right text-lg">
      <h3 className="text-lg font-semibold mb-4">صفحة الطلبات</h3>

      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-lg text-gray-700"
          >
            {/* Parcel Icon */}
            <img className="w-12" src={assets.parcel_icon} alt="طرد" />

            {/* Order Items + Address */}
            <div>
              <div>
                {order.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="py-0.5">
                    {item.name} × {item.quantity}
                  </p>
                ))}
              </div>

              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>

              <div>
                <p>{order.address.street},</p>

                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <p className="mt-2">{order.address.phone}</p>
            </div>

            {/* Order Details */}
            <div>
              <p className="text-lg">عدد المنتجات: {order.items.length}</p>

              <p className="mt-3">
                طريقة الدفع:{" "}
                {order.paymentMethod === "COD"
                  ? "الدفع عند الاستلام"
                  : order.paymentMethod}
              </p>

              <p>حالة الدفع: {order.payment ? "تم الدفع" : "غير مدفوع"}</p>

              <p>التاريخ: {new Date(order.date).toLocaleDateString("ar-LB")}</p>
            </div>

            {/* Total Amount */}
            <p className="text-lg font-medium">
              {order.amount} {currency}
            </p>

            {/* Order Status */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              className="p-2 font-semibold border border-gray-300 rounded text-right text-lg"
              value={order.status}
              dir="rtl"
            >
              <option value="Order Placed">تم استلام الطلب</option>

              <option value="Packing">قيد التجهيز</option>

              <option value="Shipped">تم الشحن</option>

              <option value="Out for delivery">قيد التوصيل</option>

              <option value="Delivered">تم التوصيل</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
