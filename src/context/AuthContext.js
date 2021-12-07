import axios from 'axios';
import { createContext, useState } from 'react';
import { message } from 'antd';

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (values) => {
    try {
      const res = await axios.post('http://localhost:4000/auth/login', values);
      if (res) {
        localStorage.setItem('token', res.data.token);
        setToken(localStorage.getItem('token'));
      }
    } catch (error) {
      message.error(`${error.message}`);
      console.log(error);
    }
  };

  const value = {
    token,
    setToken,
    login,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
