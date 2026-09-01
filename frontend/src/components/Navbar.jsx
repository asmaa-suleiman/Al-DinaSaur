import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo - stays in original position */}
      <Link to="/">
        <img src={assets.logo} className="w-28" alt="الشعار" />
      </Link>

      {/* Desktop Navigation */}
      <ul dir="rtl" className="hidden sm:flex gap-5 text-lg text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>الرئيسية</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>المنتجات</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>من نحن</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>تواصل معنا</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search}
          className="w-5 cursor-pointer"
          alt="بحث"
        />

        {/* Profile */}
        {/*
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile}
            className="w-5 cursor-pointer"
            alt="الحساب"
          />

          
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div
                dir="rtl"
                className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded text-right"
              >
                <p className="cursor-pointer hover:text-black">حسابي</p>

                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  طلباتي
                </p>

                <p onClick={logout} className="cursor-pointer hover:text-black">
                  تسجيل الخروج
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart} className="w-5 min-w-5" alt="سلة التسوق" />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          alt="القائمة"
          className="w-5 cursor-pointer sm:hidden"
        />

        {/* Mobile Sidebar */}
        <div
          dir="rtl"
          className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 cursor-pointer">
            {/* Back */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-4 border-b"
            >
              <img src={assets.back} className="h-4 rotate-180" alt="" />

              <p>رجوع</p>
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pr-6 border-b text-right"
              to="/"
            >
              الرئيسية
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pr-6 border-b text-right"
              to="/collection"
            >
              المنتجات
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pr-6 border-b text-right"
              to="/about"
            >
              من نحن
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pr-6 border-b text-right"
              to="/contact"
            >
              تواصل معنا
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
