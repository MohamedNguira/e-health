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
        navigate('/dashboard');
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  return (
    <div>
      <h2>Fill Your Details</h2>
      <form>
        <div>
          <label>Field 1:</label>
          <input
            type="text"
            name="field1"
            value={userData.field1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Field 2:</label>
          <input
            type="text"
            name="field2"
            value={userData.field2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Field 3:</label>
          <input
            type="text"
            name="field3"
            value={userData.field3}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Field 4:</label>
          <input
            type="text"
            name="field4"
            value={userData.field4}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Field 5:</label>
          <input
            type="text"
            name="field5"
            value={userData.field5}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Confirm</button>
      </form>
    </div>
  );
};

export default Details;
