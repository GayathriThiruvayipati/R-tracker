import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="add-form">
      <h3>Login</h3>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
        />
      </div>
      <div className="form-control ">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="New password"
        />
      </div>
      <input type="submit" value="Sign-in" className="btn btn-block" />
      <Link to="/" style={{textDecoration: 'none', fontWeight:400}}><p>Don't have an account? <span>Sign-up</span></p></Link>
    </form>
  );
};

export default Login;
