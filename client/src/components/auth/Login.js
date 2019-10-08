import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    login,
    error,
    clearErrors,
    isAuthenticated,
    clearSucces,
    succes
  } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (succes) {
      clearSucces();
    }

    if (error === "Password or User not found!") {
      console.log(error);
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history, succes]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email.toLowerCase()}
            onChange={onChange}
            required
            pattern="[a-z]{1}[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="An email should start with a letter and contain @"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            pattern="[a-z0-9.-]{8,}"
            title="Must contain just numbers and letters"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
