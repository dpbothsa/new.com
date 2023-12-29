import React from 'react'
import './home.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Output from './output'

function Home() {
       const [name,setName]=useState('')
       const [email,setEmail]=useState('')
       const [userId,setUserid]=useState('')
       const [mobile,setMobile]=useState('')
       const [city,setCity]=useState('')
       const [education,setEdu]=useState('')
       const [percentage,setMarks]=useState('')
       const [ experienace,setExp]=useState('')

       const sumbit=(e)=>{
          e.preventDefault()
          axios.post('http://localhost:5000/register',{name,email,userId,mobile,city,education,percentage, experienace})
          alert('Registration completed..')
       }
  return (
    <div className='main2'>
        <form onSubmit={sumbit}>
           <h2 className='head'>New Registraion</h2>
           <label className='lb1'>Full Name :</label>
           <input type="text" placeholder='Enter your full name' className='in' onChange={(e)=>setName(e.target.value)}/><br></br>
           <label className='lb2'>Email :</label>
           <input type="email" placeholder='Enter your Email'className='in'onChange={(e)=>setEmail(e.target.value)} /><br></br>
           <label className='lb3'>New userID :</label>
           <input type="password" placeholder='Create your UserID' className='in' onChange={(e)=>setUserid(e.target.value)}/><br></br>
           <label className='lb4'>Phone :</label>
           <input type="text" placeholder='Enter your Mobile Number'className='in' onChange={(e)=>setMobile(e.target.value)}/><br></br>
           <label className='lb5'>City :</label>
           <input type="text" placeholder='Enter your City' className='in' onChange={(e)=>setCity(e.target.value)}/><br></br>
           <label className='lb6'>Qualification :</label>
           <input type="text" placeholder='Enter your Higher Qulificatiom'className='in' onChange={(e)=>setEdu(e.target.value)} /><br></br>
           <label className='lb7'>Percentage :</label>
           <input type="text" placeholder='Enter your CGPA/Percentage'className='in' onChange={(e)=>setMarks(e.target.value)}/><br></br>
           <label className='lb8'>Eperience :</label>
           <input type="text" placeholder='Enter your Experience' className='in' onChange={(e)=>setExp(e.target.value)}/><br></br>
           <input type='submit' className='btn'/>
       </form>
      <Link to={'/output'}>Output</Link>
    </div>
  )
}

export default Home