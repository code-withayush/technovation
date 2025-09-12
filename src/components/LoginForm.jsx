import React from "react";

const LoginForm = () => {
  return (
    <section id="container-s">
      <div id="bg-blur-s"></div>
      <div className="login-form-s">
        <h1
  style={{
    color: "black",
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center"
  }}
>
  College Login
</h1>

        <form>
          <div className="input-field-s">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
          </div>
          <div className="input-field-s">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button type="submit">Login</button>
          <p
  style={{
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
    color: "black"
  }}
>
  Forgot Password?{" "}
  <a
    href="#"
    style={{
      color: "blue",
      textDecoration: "none"
    }}
  >
    Reset
  </a>
</p>

<p
  style={{
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
    color: "black"
  }}
>
  Don&apos;t have an account?{" "}
  <a
    href="#"
    style={{
      color: "blue",
      textDecoration: "none",
  
    }}
  >
    Register
  </a>
</p>

        </form>
      </div>
    </section>
  );
};

export default LoginForm;
