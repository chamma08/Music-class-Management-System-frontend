import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', {
                username: username,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='login'>

        
      
    </div>
  )
}

export default Login
