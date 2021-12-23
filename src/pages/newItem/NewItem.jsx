import { Input, Form, Button,message, Typography } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';

const NewItem = () => {
    const history = useHistory();
    const onFinish = async(values) => {
        console.log('Success:', values);
        try {
            const response = await axios.post("http://localhost:4000/api/items/",values);
            if(response){
              console.log(response);
              message.success('itm created successfully');
              history.push('/phroducts');
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
          <Typography.Title style={{textAlign:'center'}} level={2}>Add new Item</Typography.Title>
            <Form
       style={{
        width:'80%',
        margin:'50px auto',
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridRowGap:'10px',
        gridColumnGap:'2rem'
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
      <Form.Item label="Tin Number" name="TIN">
        <Input />
      </Form.Item>
      <Form.Item label="Branch Id" name="BRANCHID">
        <Input />
      </Form.Item>
      <Form.Item label="Item cls code" name="ITEMCLSCODE">
        <Input />
      </Form.Item>
      <Form.Item label="item Code" name="ITEMCODE">
        <Input />
      </Form.Item>
      <Form.Item label="item type code" name="ITEMTYPCODE">
        <Input />
      </Form.Item>
      <Form.Item label="standard name" name="STANDARDNAME">
        <Input />
      </Form.Item>
      <Form.Item label="organization code" name="ORGNATIONCODE">
        <Input />
      </Form.Item>
      <Form.Item label="package Unit code" name="PACKAGEUNITCODE">
        <Input />
      </Form.Item>
      <Form.Item label="QTYUNITCODE" name="QTYUNITCODE">
        <Input />
      </Form.Item>
      <Form.Item label="TAXTYPECODE" name="TAXTYPECODE">
        <Input />
      </Form.Item>
      <Form.Item label="BARCODE" name="BARCODE">
        <Input />
      </Form.Item>
      <Form.Item label="DFTPRICE" name="DFTPRICEE">
        <Input />
      </Form.Item>
      <Form.Item label="GRP1PRICE" name="GRP1PRICE">
        <Input />
      </Form.Item>
      <Form.Item label="GRP2PRICE" name="GRP2PRICE">
        <Input />
      </Form.Item>
      <Form.Item label="GRP3PRICE" name="GRP3PRICE">
        <Input />
      </Form.Item>
      <Form.Item label="GRP4PRICE" name="GRP4PRICE">
        <Input />
      </Form.Item>
      <Form.Item label="GRP5PRICE" name="GRP5PRICE">
        <Input />
      </Form.Item>
      <Form.Item label="ADDINFO" name="ADDINFO">
        <Input />
      </Form.Item>
      <Form.Item label="SAFTYQTY" name="SAFTYQTY">
        <Input />
      </Form.Item>
      <Form.Item label="INSURANCEAPPLICABLE" name="INSURANCEAPPLICABLE">
        <Input />
      </Form.Item>
      <Form.Item label="INSPRICE" name="INSPRICE">
        <Input />
      </Form.Item>
      <Form.Item label="USEDORUNUSED" name="USEDORUNUSED">
        <Input />
      </Form.Item>
      <Form.Item label="LASTREQDATE" name="LASTREQDATE">
        <Input />
      </Form.Item>
      <Form.Item label="SYNCED" name="SYNCED">
        <Input />
      </Form.Item>
      
      <Form.Item>
        <Button  wrapperCol={{
        span: 4,
      }}  type="primary" htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default NewItem;
