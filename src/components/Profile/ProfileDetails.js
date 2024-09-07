import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProfileDetails = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default ProfileDetails;
