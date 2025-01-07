import { useTheme } from "@/components/theme/theme-provider";
import TravelWorldIcon from "../travel-world";
const Footer: React.FC = () => {
  const { theme } = useTheme();
  const footerBgColor = theme == "dark" ? "bg-gray-400" : "bg-white";
  return (
    <footer className={`${footerBgColor} border-t border-gray-200 pt-10`}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <TravelWorldIcon />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            enim.
          </p>
        </div>

        {/* Discover Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Discover</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tours"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                Tours
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="text-gray-600 hover:text-orange-500 transition"
              >
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center space-x-2">
              <span className="text-orange-500">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Address: Lorem</span>
            </li>
            <li className="text-gray-600 flex items-center space-x-2">
              <span className="text-orange-500">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Email: xyz@mail.com</span>
            </li>
            <li className="text-gray-600 flex items-center space-x-2">
              <span className="text-orange-500">
                <i className="fas fa-phone"></i>
              </span>
              <span>Phone: 00022200222</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 transition"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
