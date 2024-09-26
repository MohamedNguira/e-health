import React, { useState } from 'react';
import { auth } from '../firebase';
import { PhoneAuthProvider,createUserWithEmailAndPassword,linkWithCredential, sendEmailVerification, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = ({onSignUpSuccess}) => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);


  const confirmSignup = () => {
    // Assume signup logic is implemented here

    // On successful signup:
    onSignUpSuccess();
    navigate('/details'); // Navigate to details page after signup
  };

  // Initialize the reCAPTCHA
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

  // Send SMS verification code
  const sendVerificationCode = async () => {
    setError('');
    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setCodeSent(true);
      setSuccessMessage('Verification code sent to your phone.');
    } catch (err) {
      setError(err.message);
    }
  };

  // Verify the SMS verification code
  const verifyCode = async () => {
    setError('');
    try {
      const credential = await PhoneAuthProvider.credential(verificationId, verificationCode);
      await linkWithCredential(auth.currentUser,credential);
      setSuccessMessage('Phone number verified successfully!');
      confirmSignup();
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  // Poll for email verification status
  const checkEmailVerification = async (user) => {
    const userRef = auth.currentUser;
    await userRef.reload();
    if (userRef.emailVerified) {
      setEmailVerified(true);
      setSuccessMessage('Email verified! Now, verify your phone number.');
      // After email is verified, send SMS verification
      await sendVerificationCode();
    } else {
      setTimeout(() => checkEmailVerification(user), 2000); // Check every 2 seconds
    }
  };

  // Handle Signup process
  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      setSuccessMessage('Signup successful! Please check your email for verification.');

      // Polling for email verification
      checkEmailVerification(user);
    }catch (err) {
        setError(err.message);
        console.log(err);
      }
  //"+21653423203"
    };
  
  return (  
    <div style={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={styles.input}
        />
        {codeSent && (
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
            style={styles.input}
          />
        )}
        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
        <button type="submit" style={styles.button} disabled={emailVerified}>
          Sign Up
        </button>
      </form>
      {codeSent && (
        <button onClick={verifyCode} style={styles.button}>
          Verify Phone
        </button>
      )}
      <p>
        Already have an account? <button onClick={() => window.location.href = '/login'}>Login</button>
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
  success: { color: 'green' },
};

export default Signup;
