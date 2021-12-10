import { useContext } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/login/Login';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  let currentUser = JSON.parse(user);

  console.log(token);
  console.log(currentUser.TIN);

  if (!token) {
    return <Login />;
  }
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
