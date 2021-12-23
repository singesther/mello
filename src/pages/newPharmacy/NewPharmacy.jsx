import { Input, Form, Button,message,Upload, DatePicker, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return (
      
        <div className="newProduct">
             <Typography.Title style={{textAlign:'center'}} level={2}>Add new Pharmacy</Typography.Title>
            <Form
            className="form"
            style={{
              width:'80%',
              margin:'50px auto',
              display:'grid',
              gridTemplateColumns:'repeat(3,1fr)',
              gridRowGap:'10px',
              gridColumnGap:'2rem'
            }}
      layout="vertical"
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
       <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
       </Upload>
      </Form.Item>
      <Form.Item label="Registration Date" name="REGDATE">
        <DatePicker  style={{width:'100%'}} />
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
        <Button block type="primary" htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default NewPharmacy;
