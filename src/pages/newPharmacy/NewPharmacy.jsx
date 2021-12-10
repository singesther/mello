import { Input, Form, Button,message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
import './newPharmacy.css';

const NewPharmacy = () => {
    const history = useHistory();
    const onFinish = async(values) => {
        console.log('Success:', values);
        try {
            const response = await axios.post("http://localhost:4000/api/pharmacies/",values);
            if(response){
              console.log(response);
              message.success('pharmacy created successfully');
              history.push('/pharmacies');
            }
          } catch (error) {
             console.log(error);
             message.error(error.message);
          }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Pharmacy</h1>
            <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      <Form.Item label="Name" name="NAME">
        <Input />
      </Form.Item>
      <Form.Item label="Tin Number" name="TINNUMBER">
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="LOCATION">
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="PHONE">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="EMAIL">
        <Input />
      </Form.Item>
      <Form.Item label="About" name="ABOUT">
        <Input />
      </Form.Item>
      <Form.Item label="Logo" name="LOGO">
        <Input />
      </Form.Item>
      <Form.Item label="Registration Date" name="REGDATE">
        <Input />
      </Form.Item>
      <Form.Item label="Active" name="ACTIVE">
        <Input />
      </Form.Item>
      <Form.Item label="Email Pass" name="EMAILPASS">
        <Input />
      </Form.Item>
      <Form.Item label="Remaining Days" name="REMAINDAYS">
        <Input />
      </Form.Item>
      <Form.Item label="Branch Id" name="BRANCHID">
        <Input />
      </Form.Item>
      <Form.Item label="Branch Office Name" name="BRANCHOFFICENAME">
        <Input />
      </Form.Item>
      <Form.Item label="Branch registration date" name="BRANCHREGISTRATIONDATE">
        <Input />
      </Form.Item>
      <Form.Item label="Province" name="PROVINCE">
        <Input />
      </Form.Item>
      <Form.Item label="District" name="DISTRICT">
        <Input />
      </Form.Item>
      <Form.Item label="Sector" name="SECTOR">
        <Input />
      </Form.Item>
      <Form.Item label="Headquarter" name="HEADQUATER">
        <Input />
      </Form.Item>
      <Form.Item label="Manager name" name="MANAGRNAME">
        <Input />
      </Form.Item>
      <Form.Item label="Manager Phone" name="MANAGRPHONE">
        <Input />
      </Form.Item>
      <Form.Item label="Manager Email" name="MANAGREMAIL">
        <Input />
      </Form.Item>
      <Form.Item label="Device Id" name="DEVICEID">
        <Input />
      </Form.Item>
      <Form.Item label="Sdc Id" name="SDCID">
        <Input />
      </Form.Item>
      <Form.Item label="MRCNO" name="MRCNO">
        <Input />
      </Form.Item>
      <Form.Item label="CRCKEY" name="CMCKEY">
        <Input />
      </Form.Item>
      <Form.Item label="Business Activity" name="BUSINESSACTI">
        <Input />
      </Form.Item>
      <Form.Item label="DEVICESRNBR" name="DEVICESRNBR">
        <Input />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default NewPharmacy;
