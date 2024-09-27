// src/pages/Details.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Details = ({ onNavigateToDashboard }) => {
  const [userData, setUserData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  });
  
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  // Get the current user from Firebase Auth
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);  // Set the current user's ID
      } else {
        // If not logged in, redirect to login page
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (userId) {
      try {
        // Create a document in the "users" collection with the current user ID
        const userDocRef = doc(db, 'users', userId);
        
        // Set the user data in the document
        await setDoc(userDocRef, {
          field1: userData.field1,
          field2: userData.field2,
          field3: userData.field3,
          field4: userData.field4,
          field5: userData.field5,
        });

        // Navigate to the dashboard after successful submission
        onNavigateToDashboard();
        navigate('/pharmacist/dashboard');
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  return (
    <div class="w-[100%] h-[100%] relative bg-[#f8f8fb]">
<div class="p-[72px] top-[70px] absolute left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow flex-col justify-start items-center gap-8 inline-flex">    <div class="text-[#161545] text-[32px] font-black font-['Merriweather'] text-center">Join as  <br/> a pharmacist</div>
<div style={styles.container}>
      
      <form style={styles.form}>
       
          <input
            type="text"
            name="field1"
            placeholder="Full Name"
            value={userData.field1}
            onChange={handleInputChange}
            className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
            style={styles.input}
          />
    
          <input
            type="text"
            name="field2"
            placeholder="CNOPT Order number"

            value={userData.field2}
            onChange={handleInputChange}
            className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
            style={styles.input}
          />
       
          <input
            placeholder="CNAM identifier"

            type="text"
            name="field4"
            value={userData.field4}
            onChange={handleInputChange}
            className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
            style={styles.input}
          />
       
          <input
            placeholder="Pharmacy address"
            type="text"
            name="field5"
            value={userData.field5}
            onChange={handleInputChange}
            className="pl-4 p-2 border border-gray-300 rounded-md placeholder-opacity-60 placeholder-gray-800 text-lg font-medium w-full max-w-md"
            style={styles.input}
          />
      
        <button type="button" onClick={handleSubmit}> <div style={{width: 350, height: 60, padding: 24, background: '#171645', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div style={{color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Create account</div>
</div></button>
      
      
      </form>
      <div className="m-5 w-[274px] text-center text-[#1e2c4b] text-sm font-normal font-['Mulish']">By joining, you agree to our Terms of Service and Privacy Policy</div>

    </div>
    </div></div>
  );
};
const styles = {
  container: { maxWidth: '700px', margin: 'auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: {fontFamilty: 'Poppins',width: 350, height: 60, background: '#F8F8FB', borderRadius: 4, border: '1px #DADAF2 solid'},
  button: { padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' },
  error: { color: 'red' },
  
};

export default Details;
