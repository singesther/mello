import { useContext } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/login/Login';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token } = useContext(AuthContext);

  console.log(token);
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
