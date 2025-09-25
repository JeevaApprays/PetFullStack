import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
 
 
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email === 'admin@gmail.com' && loginData.password === '12345') {
      localStorage.setItem('user', JSON.stringify({ email: loginData.email, role: 'admin' }));
      navigate('/admin');
    } else {
      try {
        const response = await axios.post('http://localhost:8080/login', loginData);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/home');
      } catch (error) {
        alert('Login failed');
        console.error('There was an error logging in!', error);
      }
    }
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register here</Link></p>


    </div>

    )
}

export default LoginPage