import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(true);
  const menuItems = [
    {
      value: 1,
      label: "Home",
      href: "/",
    },
    {
      value: 2,
      label: "Planning Tools",
      href: "/",
    },
    {
      value: 3,
      label: "Venue",
      href: "/",
    },
    {
      value: 4,
      label: "Vendors",
      href: "/",
    },
    {
      value: 5,
      label: "Offers",
      href: "/",
    },
    {
      value: 6,
      label: "Your Business",
      href: "/",
    },
  ];
  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <nav className="flex flex-wrap md:flex items-center justify-between w-full py-5 px-12 text-lg text-gray-700 bg-white">
        {/* logo */}
        <div>
          <Link to="/" className="flex justify-center items-center gap-2">
            <img
              src="/logo.png"
              alt="Ever After Elegance Logo"
              width="72"
              height="61"
            />
            <p className="font-poppins font-medium text-black">
              Ever After Elegance
            </p>
          </Link>
        </div>
        <div
          className={`w-full md:w-auto md:flex md:items-center ${
            showMobileNav ? "" : "hidden"
          }`}
        >
          <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
            {menuItems.map((item) => (
              <li key={item.value}>
                <Link
                  className="md:p-4 py-2 block font-poppins font-medium text-[#00000099] hover:text-primary"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="w-full md:w-auto text-center text-[16px] font-medium font-poppins text-[#00000066] border-2 border-[#00000066] rounded-lg px-4 py-1 hover:text-gray-600 hover:border-gray-600 hover:bg-white hover:shadow-md"
            onClick={handleGoToLogin}
          >
            Login
          </button>
          <button
            className="w-full md:w-auto text-center text-[16px] font-medium font-poppins text-white border-2 border-primary bg-primary rounded-lg px-4 py-1 hover:border-secondary hover:bg-secondary hover:shadow-md"
            
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
