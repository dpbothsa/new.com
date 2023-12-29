import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './output.css'

function Output() {
    const [users,setUsers]=useState([])
    const [uid,setId]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/getallUsers').then(employees=>setUsers(employees.data)).catch((err)=>{
            console.log(users)
        })
    },[])
  return (
   <div>
      {
        users.map((i)=>{
            return(
               <div className='main3'>
                  <h2 className='head1'>User Details of ID: {i.userId}</h2>
                  <h3 className='hh'>Name: <p className='hp'>{i.name}</p></h3>
                  <h3 className='hh'>Email: <p className='hp'>{i.email}</p></h3>
                  <h3 className='hh'>Mobile: <p className='hp'>{i.mobile}</p></h3>
                  <h3 className='hh'>City: <p className='hp'>{i.city}</p></h3>
                  <h3 className='hh'>Qualification: <p className='hp'>{i.education}</p></h3>
                  <h3 className='hh'>Percentage or CGPA: <p className='hp'>{i.percentage}</p></h3>
                  <h3 className='hh'>Experience: <p className='hp'>{i.experienace}</p></h3>
                 
                </div>
            )
        })
      }

      <div>
        <input type='text' placeholder='userId' onChange={(e)=>setId(e.target.value)}/>
        {
             users.map((i)=>{
                if(uid===i.userId){
                    return(
                        <div className='main3'>
                           <h2 className='head1'>User Details of ID: {i.userId}</h2>
                           <h3 className='hh'>Name: <p className='hp'>{i.name}</p></h3>
                           <h3 className='hh'>Email: <p className='hp'>{i.email}</p></h3>
                           <h3 className='hh'>Mobile: <p className='hp'>{i.mobile}</p></h3>
                           <h3 className='hh'>City: <p className='hp'>{i.city}</p></h3>
                           <h3 className='hh'>Qualification: <p className='hp'>{i.education}</p></h3>
                           <h3 className='hh'>Percentage or CGPA: <p className='hp'>{i.percentage}</p></h3>
                           <h3 className='hh'>Experience: <p className='hp'>{i.experienace}</p></h3>
                          
                         </div>
                     )
                }
               
            })
        }

      </div>
   </div>
  )
}

export default Output