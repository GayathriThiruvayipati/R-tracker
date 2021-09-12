import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = ({addUser}) =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const onSubmit = (e) =>{
      e.preventDefault()
  
      const base_url = "http://localhost:3001/users/add";
      const data = { name, email, password, confirmpassword};
      axios.post(base_url,data).then(response=>{
        console.log(response);
      })
      .catch(error=>{console.log(error.response)});

      console.log(JSON.stringify(data));
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
        <h3>Registration</h3>
        <div className="form-control">
        <label>Fullname</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Fullname"
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address" />
      </div>
      <div className="form-control ">
        <label>Password</label>
        <input 
          type="password"
          value={password}
          onChange = {(e) => setPassword(e.currentTarget.value)}
          placeholder="New password" />
      </div>
      <div className="form-control ">
        <label>Confirm Password</label>
        <input 
          type="password"
          value={confirmpassword}
          onChange = {(e) => setConfirmPassword(e.currentTarget.value)}
          placeholder="Confirm password" />
      </div>
      <input type="submit" value="Sign-up" className="btn btn-block" />
      <Link to={'/login'} style={{textDecoration:'none'}}><p>Have an account? <span>Login</span></p></Link>
    </form>
    )
}
export default Register