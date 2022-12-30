import React from 'react';
import useUser from './hooks/useUser.js';

const Child = () => {
  const { user, setUser } = useUser();

  const changeUsername = () => {
    setUser('Another Name');
  };

  return (
    <div
      className="flex flex-col justify-center items-center border-8"
      style={{ height: '100vh' }}
    >
      <div className="text-2xl font-bold m-8">
        Username is {user}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={changeUsername}
      >
        Change user name
      </button>
    </div>
  )
};

export default Child;
