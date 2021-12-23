import { useContext, useEffect, useState } from "react";
import { Popconfirm, Space,Table,message, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProductList() {
  const {token} = useContext(AuthContext);
  const [data, setData] = useState([]);

  const fetchData = async ()=>{
    try {
        const response = await axios.get('http://localhost:4000/api/pharmacies',{
          headers:{
            accept: 'application/json',
            Authorization:`Bearer ${token}`
          }
        });
        return response.data;
    } catch (error) {
      console.log(error);   
    }
  }


  useEffect(()=>{
    const populate = async() =>{
        const response = await  fetchData();
     setData(response.payload);
      }
      populate();
  },[]);

  const confirm = async (id)=> {
     console.log(id);
     try {
      const response = await axios.delete(`http://localhost:4000/api/pharmacies/${id}`);
      if(response){
        console.log(response);
        message.success('pharmacy deleted successfully');
      }
    } catch (error) {
       console.log(error);
       message.error(error.message);
    }
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  const columns = [
    {
        title: 'Name',
        dataIndex: 'NAME',
        width:100,
        key: 'name',
        fixed:'left'
      },
      {
        title: 'Location',
        dataIndex: 'LOCATION',
        key: 'location',
      }, {
        title: 'Email',
        dataIndex: 'EMAIL',
        key: 'email',
      }, {
        title: 'About',
        dataIndex: 'ABOUT',
        key: 'about',
      }, {
        title: 'TIN',
        dataIndex: 'TINNUMBER',
        key: 'tin',
      },
      {
        title: 'Manager',
        dataIndex: 'MANAGRNAME',
        key: 'manager',
      },
      {
        title: 'Manager Phone',
        dataIndex: 'MANAGRPHONE',
        key: 'managerPhone',
      },
      {
        title: 'Branch Reg Date',
        dataIndex: 'BRANCHREGISTRATIONDATE',
        key: 'breanchRegDate',
      },
      {
        title: 'Head quarter',
        dataIndex: 'HEADQUATER',
        key: 'headquarter',
      },
      {
        title: 'date',
        dataIndex: 'REGDATE',
        key: 'date',
      },
      {
        title: 'office name',
        dataIndex: 'BRANCHOFFICENAME',
        key: 'office',
      },
      {
        title: 'Action',
        key: 'action',
        width:200,
        fixed:'right',
        render: (text, record) => (
          <Space size="middle">
            <Link to={`/pharmacies/${record.ID}`}><h4>Update</h4></Link>
            <Popconfirm
             title="Are you sure to delete this task?"
             onConfirm={()=>confirm(record.ID)}
             onCancel={cancel}
             okText="Yes"
             cancelText="No"
            >
              <Button type="ghost">Delete</Button>
            </Popconfirm>
          </Space>
        ),
      },
  ];

  return (
    <div className="">
      {data && <Table columns={columns} scroll={{ x: 1300 }}  dataSource={data} />}
      {!data && <h2>Loading ...</h2>}
    </div>
  );
}
