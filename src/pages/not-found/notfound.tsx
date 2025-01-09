import { NavLink } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-orange-200 to-orange-600 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold">404</h1>
        <p className="mb-6 text-2xl">Oops! Page Not Found</p>
        <p className="mb-6 text-xl">
          The page you're looking for doesn't exist or might have been moved.
        </p>
        <NavLink
          to={"/"}
          className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-orange-700 shadow-md transition-all duration-200 hover:bg-indigo-100"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
