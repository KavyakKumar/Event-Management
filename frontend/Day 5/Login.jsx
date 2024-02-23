import { useState } from 'react';
import '../assets/login.css';
// import '../assets/styles.css';
// import Dashboard from './DashBoard'; 


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
      alert('Login successfully!!');
        // Here you can add your signup logic
        alert('Redirecting to Your Dashboard..');
        window.location.href = '/DashBoard';
        // setIsLoggedIn(true);
    
    // Here you can add your login logic
    console.log('Username:', username);
    console.log('Password:', password);
    
  };
      
  const handleSignUp = () => {
    // Redirect to the sign-up page
    window.location.href = '/Register';
  };
  // return isLoggedIn ? (
  //   <Dashboard />
  // ) :
  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>      </form>
    </div>
   
  );
};

export default Login;