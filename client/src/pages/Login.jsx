// src/pages/Login.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Use a single state for email or phone number
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [verificationId, setVerificationId] = useState(null); // For phone number verification
  const [code, setCode] = useState(''); // For verification code input
  const setupRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            console.log('reCAPTCHA passed');
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired, reset it');
          },
        },  
        
      );
    } catch (err) {
      console.error('Error initializing reCAPTCHA:', err);
    }
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
        // Directly log in using phone number without verification code
        // This method would require your backend to accept this login approach
        setupRecaptcha
        const userCredential = await signInWithPhoneNumberAn(auth, identifier);
        // Assuming signInWithPhoneNumber here would directly log in if the user exists
        alert('Login Successful'); // Confirm login (ensure this logic aligns with your backend)
      }
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
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
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
