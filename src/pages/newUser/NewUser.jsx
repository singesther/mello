import axios from "axios";
import { useState } from "react";
import "./newUser.css";
import { useHistory } from "react-router";

export default function NewUser() {
  const history = useHistory();
  const [form,setForm] = useState({
    TIN: "",
    BRANCHID: "",
    FNAME: "",
    LNAME: "",
    GENDER: "",
    DOB: "",
    PASSWORD: "",
    INSURANCE: "",
    TM: 0.0,
    TINBR: "",
    PHONE: "",
    EMAIL: "",
    ADDRESS: "",
    STATUS: "",
    MODIFIER: 0,
    CATEGORY: "",
    RELATION: "",
    BENEFICIARY: "",
    WKDEPARTMENT: "",
    WKPLACEADDRESS: "",
    LASTREQUDTE: ""
  });

  const handleChange =(e) =>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/v1/clients/register",form);
      if(response){
        console.log(response);
        history.push('/users');
      }
    } catch (error) {
       console.log(error);
    }
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>First name</label>
          <input type="text" value={form.FNAME} onChange={handleChange} name="FNAME" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" name="LNAME" value={form.LNAME} onChange={handleChange}  placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="EMAIL" value={form.EMAIL} onChange={handleChange} placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="PASSWORD" value={form.PASSWORD} onChange={handleChange} placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="PHONE" value={form.PHONE} onChange={handleChange} placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Work Address</label>
          <input type="text" name="WKPLACEADDRESS" value={form.WKPLACEADDRESS} onChange={handleChange} placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" name="ADDRESS" value={form.ADDRESS} onChange={handleChange} placeholder="Kigali | Rwanda" />
        </div>
        <div className="newUserItem">
          <label>Relation</label>
          <input type="text" name="RELATION" value={form.RELATION} onChange={handleChange} placeholder="single" />
        </div>
        <div className="newUserItem">
          <label>Tin</label>
          <input type="text" name="TIN" value={form.TIN} onChange={handleChange} placeholder="1112.." />
        </div>
        <div className="newUserItem">
          <label>Branch Id</label>
          <input type="text" name="BRANCHID" value={form.BRANCHID} onChange={handleChange}  placeholder="1" />
        </div>
        <div className="newUserItem">
          <label>DOB</label>
          <input type="date" name="DOB" value={form.DOB} onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Insurance</label>
          <input type="text" name="INSURANCE" value={form.INSURANCE} onChange={handleChange} placeholder="MMI" />
        </div>
        <div className="newUserItem">
          <label>TM</label>
          <input type="text" name="TM" value={form.TM} onChange={handleChange}  placeholder="123.3" />
        </div>
        <div className="newUserItem">
          <label>TINBR</label>
          <input type="text" name="TINBR" value={form.TINBR} onChange={handleChange} placeholder="123" />
        </div>
        <div className="newUserItem">
          <label>modifier</label>
          <input type="number" name="MODIFIER" value={form.MODIFIER} onChange={handleChange} placeholder="0" />
        </div>
        <div className="newUserItem">
          <label>Category</label>
          <input type="text" name="CATEGORY" value={form.CATEGORY} onChange={handleChange} placeholder="pharmacy" />
        </div>
        <div className="newUserItem">
          <label>beneficiary</label>
          <input type="text" name="BENEFICIARY" value={form.BENEFICIARY} onChange={handleChange} placeholder="kwizera" />
        </div>
        <div className="newUserItem">
          <label>Work department</label>
          <input type="text" name="WKDEPARTMENT" value={form.WKDEPARTMENT} onChange={handleChange} placeholder="medecine" />
        </div>
        <div className="newUserItem">
          <label>LASTREQUDTE</label>
          <input type="text" name="LASTREQUDTE" value={form.LASTREQUDTE} onChange={handleChange} placeholder="medecine" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="GENDER"  onChange={handleChange} id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="GENDER"  onChange={handleChange} id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="GENDER"  onChange={handleChange} id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" value={form.STATUS} onChange={handleChange} name="STATUS" id="active">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>
    </div>
  );
}
