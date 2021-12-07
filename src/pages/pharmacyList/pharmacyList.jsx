import { useContext, useEffect, useState } from "react";
import { Space,Table } from "antd";
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

  console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
        title: 'Name',
        dataIndex: 'NAME',
        key: 'name',
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
        render: (text, record) => (
          <Space size="middle">
            <Link to={`/pharmacies/${record.ID}`}><h4>Update</h4></Link>
            <h4>Delete</h4>
          </Space>
        ),
      },
  ];

  return (
    <div className="productList">
      {data && <Table columns={columns} dataSource={data} />}
      {!data && <h2>Loading ...</h2>}
    </div>
  );
}
