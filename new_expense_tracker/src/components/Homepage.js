import React from 'react'
import img from '../asset/img/dashboard.jpg'

function Homepage() {
  return (
    <div className='container'>
      
     <div className='leftcontainer'> 
        <p>Welcome to Expense Tracker </p>
        <p> Manage all your expenses here</p> 
        <img src={img} alt='Dashboard'/>
     </div>
     <div className='rightcontainer'> 
        <p> </p>
        <div className='formcard'>
          <div>
          <h2 style={{alignSelf:'centre'}}>Register</h2>
          </div>
          <div>
            <label>
            Name 
            
            </label>
            <input  required placeholder='Enter your name' type="text "/>
          </div>
          <div>
            <label>
            Email
            </label>
            <input required placeholder='Enter your email' type="email"/>
          </div>
          <div>
            <label>
           Password
            </label>
            <input required placeholder='Enter your password' type="password"/>
          </div>
          <div>
            <label>
           Confirm password
            </label>
            <input required placeholder='Confirm password' type="password"/>
          </div>
          <div>
        <button>submit</button>
          </div>

        </div>
     </div>
    </div>
  )
}

export default Homepage
