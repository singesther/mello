import { Input, Form, Button } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
const Login = () => {
  const history = useHistory();
  const { isAuth, login } = useContext(AuthContext);
  console.log(isAuth);
  const onFinish = (values) => {
    console.log('Success:', values);
    login(values);
    history.push('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="page-container">
      <div className="logo-container">
        <div className="tagline">
          <h2>Meloline Dashboard </h2>
          <p>Welcome please login first</p>
        </div>
      </div>
      <div className="form-wrapper">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="TIN"
            name="TIN"
            rules={[
              {
                required: true,
                message: 'Please input your TIN number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="PASSWORD"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
