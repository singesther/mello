import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState([]);

  const fetchData = async ()=>{

    const response = await axios.get('http://localhost:4000/api/v1/clients');
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

  const handleDelete = async(id) => {
    const res =  await axios.delete(`http://localhost:4000/api/v1/clients/${id}`);
    console.log(res);
    setData(data.filter((item) => item.ID !== id));
  };
  
  const columns = [
    { field: "ID", headerName: "ID", width: 90 },
    {
      field: "TIN",
      headerName: "TIN",
      width: 90,
    },
    { field: "FNAME", headerName: "FNAME", width: 90 },
    { field: "LNAME",headerName: "LNAME", width: 90 },
    {field: "GENDER",headerName: "Gender", width: 100},
    {field: "DOB",headerName: "DOB", width: 100},
    {field: "INSURANCE",headerName: "INSURANCE", width: 100},
    {field: "TM",headerName: "TM", width: 50},
    {field: "TINBR",headerName: "TINBR", width: 90},
    {field: "PHONE",headerName: "PHONE", width: 90},
    {field: "EMAIL",headerName: "EMAIL", width: 100},
    {field: "ADDRESS",headerName: "ADDRESS", width: 160},
    {field: "STATUS",headerName: "STATUS", width: 90},
    {field: "CATEGORY",headerName: "CATEGORY", width: 100},
    {field: "RELATION",headerName: "RELATION", width: 100},
    {field: "BENEFICIARY",headerName: "BENEFICIARY", width: 100},
    {field: "WKDEPARTMENT",headerName: "WKDEPARTMENT", width: 100},
    {field: "WKPLACEADDRESS",headerName: "WKPLACEADDRESS", width: 100},
    {field: "LASTREQUDTE",headerName: "LASTREQUDTE", width: 100},
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.TIN}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.ID)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
     {
       data.length > 0 && <DataGrid
       rows={data}
       getRowId={(row)=>row.ID}
       disableSelectionOnClick
       columns={columns}
       pageSize={8}
       checkboxSelection
     />
     } 
     {data.length ===0  && <h2>Loading</h2>}
    </div>
  );
}
