import "./userList.css";
import { Link } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Button, message, Popconfirm, Space, Table } from "antd";

export default function UserList() {
  const {token} = useContext(AuthContext);
  const [data, setData] = useState([]);

  const fetchData = async ()=>{

    const response = await axios.get('http://localhost:4000/api/clients');
    if(response){
      return response;
    }

  }

  useEffect(() => {

    const populate = async() =>{
      const response = await  fetchData();
   setData(response.data);
    }
    populate();
   console.log("data "+data);
  }, [])


  const confirm = (id) =>{
    handleDelete(id);
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  const handleDelete = async(id) => {
    const res =  await axios.delete(`http://localhost:4000/api/v1/clients/${id}`);
    console.log(res);
    setData(data.filter((item) => item.ID !== id));
  };
  
  const columns = [
    { title: "ID", dataIndex: "ID", key: "id",width:80,fixed:'left' },
    {
      title: "TIN",
      dataIndex: "TIN",
      width: 90,
    },
    { title: "FNAME", dataIndex: "FNAME",key: "fname", width: 90, },
    { title: "LNAME",dataIndex: "LNAME",key: "lname", width: 90, },
    {title: "GENDER",dataIndex: "GENDER",key: "gender", width: 90,},
    {title: "DOB",dataIndex: "DOB",key: "dob", width: 100,},
    {title: "INSURANCE",dataIndex: "INSURANCE",key: "insurance", width: 90,},
    {title: "TM",dataIndex: "TM",key: "tm", width: 90,},
    {title: "TINBR",dataIndex: "TINBR",key: "tinbr", width: 90,},
    {title: "PHONE",dataIndex: "PHONE",key: "phone", width: 90,},
    {title: "EMAIL",dataIndex: "EMAIL",key: "email", width: 90,},
    {title: "ADDRESS",dataIndex: "ADDRESS",key: "address", width: 90,},
    {title: "STATUS",dataIndex: "STATUS",key: "status", width: 90,},
    {title: "CATEGORY",dataIndex: "CATEGORY",key: "category", width: 90,},
    {title: "RELATION",dataIndex: "RELATION",key: "relation", width: 90,},
    {title: "BENEFICIARY",dataIndex: "BENEFICIARY",key: "beneficiary", width: 90,},
    {title: "WKDEPARTMENT",dataIndex: "WKDEPARTMENT",key: "wkdept", width: 90,},
    {title: "WKPLACEADDRESS",dataIndex: "WKPLACEADDRESS",key: "wkplace", width: 90,},
    {title: "LASTREQUDTE",dataIndex: "LASTREQUDTE",key: "lastquote", width: 90,},
    {
      title: "action",
     key: "action",
     width:150,
     fixed:'right',
      render: (record) => (
      
        <Space size="middle">
           <Link to={`/user/${record.TIN}`}><h4>Update</h4></Link>
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
    <div className="userList">
     {
       data.length > 0 && <Table columns={columns} scroll={{ x: 1300 }} dataSource={data}  />
     } 
     {data.length ===0  && <h2>Loading</h2>}
    </div>
  );
}
