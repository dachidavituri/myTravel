import { NavLink } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-200 to-orange-600 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! Page Not Found</p>
        <p className="text-xl mb-6">
          The page you're looking for doesn't exist or might have been moved.
        </p>
        <NavLink
          to={"/"}
          className="px-6 py-3 text-lg font-semibold text-orange-700 bg-white rounded-lg shadow-md hover:bg-indigo-100 transition-all duration-200"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
