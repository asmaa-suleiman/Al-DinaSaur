import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb- w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 text-lg">
            متجر متخصص في توفير العدد والأدوات اليدوية والكهربائية ومستلزمات
            البناء والصيانة والدهان، مع تشكيلة متنوعة تلبي احتياجات المحترفين
            وأصحاب المنازل
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">الشركة</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>الرئيسة</li>
            <li>من نحن</li>
            <li>التوصيل</li>
            <li>الخصوصية</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">تواصل معنا</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>03 899 166</li>
            <li>shksleiman@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="p-5 text-sm text-center">
          copyright 2026@ -All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
