import {
  container,
  heading,
  paragraph,
  form,
  input,
  link,
  button,
  footerText,
} from "./login-cva";

const Login: React.FC = () => {
  return (
    <div className={container()}>
      <h1 className={heading()}>Welcome</h1>
      <p className={paragraph({ size: "md" })}>Login with Email</p>

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
        <div className="flex justify-end">
          <a href="#" className={link()}>
            Forgot your password?
          </a>
        </div>
        <button type="submit" className={button({ size: "md" })}>
          LOGIN
        </button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p className="text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className={link()}>
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
