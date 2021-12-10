import axios from 'axios';
import { createContext, useState } from 'react';
import { message } from 'antd';

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(localStorage.getItem('user'));

  const login = async (values) => {
    try {
      const res = await axios.post('http://localhost:4000/auth/login', values);
      if (res) {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        setToken(localStorage.getItem('token'));
        localStorage.setItem('user', JSON.stringify(res.data.user));
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
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
