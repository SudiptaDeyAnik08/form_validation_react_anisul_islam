import React, { useState } from "react";

const SignUp =()=>{

    const [userName,setName] = useState('');
    const [userEmail,setEmail] = useState('');
    const [userPassword,setPassword] = useState('');

    const handelNameChange =(e)=>{
        setName(e.target.value);
       
    }

    const handelEmailChange =(e)=>{
        setEmail(e.target.value);
       
    }

    
    const handelPasswordChange =(e)=>{
        setPassword(e.target.value);
       
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            userName,userEmail,userPassword
        }
        console.log(newUser);

    }


    return(
        <div>
            <h1>User SignUp!</h1>
            <form onSubmit={handelSubmit}>
               <div>
                    <label htmlFor="userName" >Name: </label>
                    <input  type="text" id="userName" name="userName" onChange={handelNameChange} value={userName} />
               </div>

               <div>
                    <label htmlFor="userEmail" >Email: </label>
                    <input  type="text" id="userEmail" name="userEmail" onChange={handelEmailChange} value={userEmail}/>
               </div>

               <div>
                    <label htmlFor="userPassword" >Password: </label>
                    <input  type="password" id="userPassword" name="userPassword" onChange={handelPasswordChange} value={userPassword} />
               </div>

               <button type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;