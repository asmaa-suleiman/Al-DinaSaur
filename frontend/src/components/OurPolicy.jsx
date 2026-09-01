import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700"
    >
      {/* Exchange Policy */}
      <div>
        <img
          src={assets.exchange}
          className="w-12 m-auto mb-5"
          alt="سياسة الاستبدال"
        />

        <p className="font-semibold">استبدال خلال يوم واحد</p>

        <p className="text-gray-400">
          يمكنك استبدال المنتج بمنتج آخر خلال يوم واحد
        </p>
      </div>

      {/* Return Policy */}
      <div>
        <img
          src={assets.quality}
          className="w-12 m-auto mb-5"
          alt="سياسة الإرجاع"
        />

        <p className="font-semibold">إرجاع خلال يوم واحد</p>

        <p className="text-gray-400">
          يمكنك إرجاع المنتج خلال يوم واحد من استلامه
        </p>
      </div>

      {/* Quality */}
      <div>
        <img
          src={assets.support}
          className="w-12 m-auto mb-5"
          alt="جودة المنتجات"
        />

        <p className="font-semibold">منتجات موثوقة</p>

        <p className="text-gray-400">
          نوفر لك أدوات ومنتجات مختارة بعناية وبجودة موثوقة
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
