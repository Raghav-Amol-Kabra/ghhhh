import React, { useState } from 'react'
import "./Ordernow.css";
import 'bootstrap/dist/css/bootstrap.css'
const App = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    let name,value;
    const getUserData = (event) => {
name= event.target.name;
value= event.target.value;

setUser({...user, [name]: value})
     }
     const postData = async(e) => {
e.preventDefault();
const {name,email,phone,address} = user;
const response = await fetch("https://order-now-be192-default-rtdb.firebaseio.com/Order-now.json",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
        name,
        email,
        phone,
        address,
    })
})
if(response){
    setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    alert("Order has been placed")
    alert("Thanks for ordering.")
}     

}
  return (
    <div>
        <h1>Order Form</h1>
        <form method='POST'>
            <div className='form'>
     
                <br/>
                <input 
                name='name'
                type="text"
                class="form-control"
                 id="exampleInputPassword1" 
                placeholder='Enter Your Name'
                value={user.name}
                onChange={getUserData}
                required
                />
                 
                <br/>
                <br/>
                
               
                <input 
                name='email'
                type="text"
                class="form-control"
                 id="exampleInputPassword1" 
                placeholder='Enter Your Order'
                value={user.email}
                onChange={getUserData}
                required
                />
            
                <br/>
                <br/>
                 
                
                <input 
                name='phone'
                type="text"
                class="form-control"
                 id="exampleInputPassword1" 
                placeholder='Enter Your Phone number'
                value={user.phone}
                onChange={getUserData}
                required
                />
                <br/>
                <br/>
               
                  
                <input 
                name='address'
                className='address'
                type="text"
                class="form-control"
                 id="exampleInputPassword1" 
                placeholder='Enter Your Address'
                value={user.address}
                onChange={getUserData}
                required
                />
                
                <br/>
                <div className="alert alert-danger" role="alert">
Note:-Shipping is only in Solapur/Jule Solapur
</div>
               
           
             
              
             

            </div>

            <br/>
            <br/>
         
            <button className='button btn-primary' onClick={postData}>Order</button>
            <br/>
            <br/><br/><br/>
        </form>
    </div>
  )
}

export default App
