import { Input, Form, Button, message } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import './resetPassword.css';

const ResetPassword =  () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);

  let currentUser = JSON.parse(user);
 // console.log(currentUser.TIN);

    const onFinish = async  (values) => {
        console.log('Success:', values.password);
        try{
            const response = await  axios.put('http://localhost:4000/auth/reset/12344678',{
                password:values.password
            });
            console.log(response);
            message.success("cool");
        }catch(error){
            message.error(error.message);
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="form-container">
            <h2 className="reset-title">Reset password</h2>
             <Form
          name="basic"
          className="reset-form"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Password"
            name="password"
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
            label="Confirm Password"
            name="PASSWORD"
            rules={[
              {
                required: true,
                message: 'Passwords must match!',
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
    )
}

export default ResetPassword
