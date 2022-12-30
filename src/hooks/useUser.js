import React, { useContext } from 'react';
import UserContext from '../providers/UserContext.jsx';

const useUser = () => useContext(UserContext);

export default useUser;
