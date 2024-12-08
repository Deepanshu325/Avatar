import React, { useState } from 'react'
import "./Form.css"
import axios from 'axios'

const Form = () => {
 const [first_name, setFirst_name] = useState();
 const [last_name, setLast_name] = useState();
 const [email, setEmail] = useState();
 const [gender, setGender] = useState();
 const [avatar, setAvatar] = useState();
 const [domain, setDomain] = useState();
 const [available, setAvailable] = useState();
  


 const adduser = async () =>{

 
    try{    
     await  axios.post('http://localhost:5000/api/users',
            {
                first_name : first_name,
                last_name : last_name,
                email:email,
                gender:gender,
                avatar:avatar,
                domain:domain,
                available:available
            }
        );{
           setFirst_name(' ')
           setLast_name('')
           setEmail('')
           setGender('')
           setAvatar('')
           setDomain('')
           setAvailable('')
        }
    } 
    catch{
         console.log("error")
    }
 }
  return (
    <div className="form-container">
        <h1>Add User</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" 
          value={first_name} 
          onChange={(event)=>{
            setFirst_name(event.target.value)
          }}required />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name"
            value={last_name} 
            onChange={(event)=>{
              setLast_name(event.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" 
           value={email} 
           onChange={(event)=>{
             setEmail(event.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" 
           value={first_name} 
           onChange={(event)=>{
             setGender(event.target.value)}}
          required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar URL:</label>
          <input type="text" id="avatar" name="avatar"
            value={avatar} 
            onChange={(event)=>{
              setAvatar(event.target.value)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="domain">Domain:</label>
          <input type="text" id="domain" name="domain" 
            value={domain} 
            onChange={(event)=>{
              setDomain(event.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="available">Available:</label>
          <input type="text" id="available" name="available" 
            value={available} 
            onChange={(event)=>{
              setAvailable(event.target.value)}}
          />
        </div>
        <button type="submit" onClick={adduser}>Submit</button>
      </form>
    </div>

  )
}

export default Form
