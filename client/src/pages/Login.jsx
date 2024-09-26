// src/pages/Login.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({onLoginSuccess}) => {
  const [identifier, setIdentifier] = useState(''); // Use a single state for email or phone number
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [verificationId, setVerificationId] = useState(null); // For phone number verification
  const [code, setCode] = useState(''); // For verification code input
  const navigate = useNavigate();

  const confirmLogin = () => {
    // Assume login logic is implemented here

    // On successful login:
    onLoginSuccess();
    navigate('/dashboard'); // Navigate to dashboard after login
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Detect whether the identifier is an email or phone number
    const isEmail = identifier.includes('@');
    
    try {
      if (isEmail) {
        const userCredential = await signInWithEmailAndPassword(auth, identifier, password);
        if (userCredential.user.emailVerified) {
          alert('Login Successful');
        } else {
          alert('Please verify your email before logging in.');
        }
      } else {
      
        alert('Login Successful'); 
      }
      confirmLogin();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={styles.container}>
     <h1>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
        
      </form>
      <p>
        Don't have an account? <button onClick={() => window.location.href = '/signup'}>Create an account</button>
      </p>
      <div id="recaptcha-container"></div>

    </div>
  );
};

const styles = {
  container: { maxWidth: '300px', margin: 'auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' },
  error: { color: 'red' },
};

export default Login;
