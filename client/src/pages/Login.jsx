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
    <div class="w-[100%] h-[100%] relative bg-[#f8f8fb]">
<div class="p-[72px] top-[70px] absolute left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow flex-col justify-start items-center gap-8 inline-flex">    <div class="text-[#161545] text-[32px] font-black font-['Merriweather']">Log in</div>
   <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          style={styles.input}
          className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
          className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit"><div style={{width: 400, height: 75, padding: 24, background: '#171645', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div style={{color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Log in</div>
</div></button>
        
      </form>
      <div className="m-7 opacity-50 text-[#161545] text-lg font-medium font-['Poppins']">OR</div>
      <img src='./google.jpg' style={{ width: '400px', height: 'auto' }}></img>
      <div  className="m-3 text-center text-[#161545] text-lg font-medium font-['Poppins']">
        Don't have an account? <button onClick={() => window.location.href = '/signup'}>Create an account</button>
      </div>
      <div id="recaptcha-container"></div>
    </div>
    </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '700px', margin: 'auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: {fontFamilty: 'Poppins',width: 400, height: 75, background: '#F8F8FB', borderRadius: 4, border: '1px #DADAF2 solid'},
  button: { padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' },
  error: { color: 'red' },
  
};

export default Login;
