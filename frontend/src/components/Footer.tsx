import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-12">
      <div className="flex flex-col gap-3">
        <div>
          <Link to="/">
            <img
              src="/logoFooter.png"
              alt="Ever After Elegance Logo"
              width="70"
              height="60"
            />
            <h2 className="text-white font-semibold font-poppins mb-2">
              Ever After Elegance
            </h2>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 text-sm">
            <span className="font-medium font-poppins">Email:</span>
            <p className="font-semibold font-poppins">
              everafterelegance@contact.com
            </p>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="font-medium font-poppins">Phone:</span>
            <p className="font-semibold font-poppins">+961-03-550448</p>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="font-medium font-poppins">Address:</span>
            <p className="font-semibold font-poppins">Beirut, Lebanon</p>
          </div>
        </div>
      </div>
      <h2 className="text-white font-semibold font-poppins mb-2">
        Quick Links
      </h2>
      <div className="flex flex-col gap-1">
        <a
          href=""
          className="font-medium font-poppins text-sm text-[#FFFFFF66] hover:text-primary"
        >
          Home
        </a>
        <a
          href=""
          className="font-medium font-poppins text-sm text-[#FFFFFF66] hover:text-primary"
        >
          About Us
        </a>
        <a
          href=""
          className="font-medium font-poppins tetx-sm text-[#FFFFFF66] hover:text-primary"
        >
          Careers
        </a>
        <a
          href=""
          className="font-medium font-poppins text-sm text-[#FFFFFF66] hover:text-primary"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
