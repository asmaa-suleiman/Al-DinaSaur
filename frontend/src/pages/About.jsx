import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"من"} text2={"نحن"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.outPic} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            مرحبًا بكم في الديناصور للأدوات والمعدات، وجهتكم الموثوقة للحصول على
            مختلف أنواع العدد والأدوات ومستلزمات البناء والصيانة.
          </p>
          <p>
            نوفر مجموعة متنوعة من الأدوات اليدوية والكهربائية، ومستلزمات الدهان،
            والسباكة، والكهرباء، ومعدات السلامة، وأدوات الحدائق، ونسعى دائمًا
            إلى توفير منتجات عملية وعالية الجودة تلبي احتياجات المحترفين وأصحاب
            المنازل على حد سواء.
          </p>
          <b className="text-gray-800">هدفنا</b>
          <p>
            نسعى إلى تسهيل عملية شراء الأدوات والمعدات من خلال توفير تشكيلة
            واسعة من المنتجات، وأسعار مناسبة، وخدمة موثوقة تساعد عملاءنا في
            العثور على الأدوات التي يحتاجون إليها بسهولة.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"لماذا"} text2={"تختارنا"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>الجودة والموثوقية</b>
          <p className="text-gray-600">
            نحرص على توفير أدوات ومعدات عالية الجودة، مختارة بعناية لتلبية
            احتياجاتكم المختلفة.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>أسعار مناسبة</b>
          <p className="text-gray-600">
            نسعى إلى تقديم منتجات بأسعار مناسبة وتنافسية، مع الحفاظ على الجودة
            التي يبحث عنها عملاؤنا.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>خدمة مميزة</b>
          <p className="text-gray-600">
            نهتم بتقديم تجربة تسوق سهلة وسريعة، ونسعى دائمًا إلى مساعدة عملائنا
            واختيار ما يناسب احتياجاتهم.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
