import {
  container,
  heading,
  paragraph,
  form,
  input,
  button,
  footerText,
  link,
} from "./register-cva";

const Register: React.FC = () => {
  return (
    <div className={container()}>
      <h1 className={heading()}>CREATE AN ACCOUNT</h1>
      <p className={paragraph({ size: "md" })}>Register with Email</p>

      <form className={form()}>
        <input
          type="email"
          placeholder="Enter Email or Username"
          className={input({ size: "md" })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className={input({ size: "md" })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={input({ size: "md" })}
        />
        <button type="submit" className={button({ size: "md" })}>
          CREATE ACCOUNT
        </button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="#" className={link()}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
