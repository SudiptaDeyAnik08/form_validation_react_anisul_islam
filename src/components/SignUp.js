import { useFormik } from "formik";
import * as yup from "yup"; 
import React, { useState } from "react";

const SignUp =()=>{

    const  formik = useFormik(
        {
            initialValues:{
                userName: "",
                userEmail:"",
                userPassword:""
            },


            validationSchema:yup.object({
                userName:,
                userEmail:,
                userPassword:,
            })

            onSubmit:(values,{resetForm})=>{
                console.log(values);
                resetForm({values:""})
            }
        }
    )


    // const [userName,setName] = useState('');
    // const [userEmail,setEmail] = useState('');
    // const [userPassword,setPassword] = useState('');

    // const handelNameChange =(e)=>{
    //     setName(e.target.value);
       
    // }

    // const handelEmailChange =(e)=>{
    //     setEmail(e.target.value);
       
    // }

    
    // const handelPasswordChange =(e)=>{
    //     setPassword(e.target.value);
       
    // }


    const handelSubmit = (e)=>{
        e.preventDefault();
      
    }


    return(
        <div>
            <h1>User SignUp!</h1>
            <form onSubmit={formik.handleSubmit}>
               <div>
                    <label htmlFor="userName" >Name: </label>
                    <input  type="text" id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName} />
               </div>

               <div>
                    <label htmlFor="userEmail" >Email: </label>
                    <input  type="text" id="userEmail" name="userEmail" onChange={formik.handleChange} value={formik.values.userEmail}/>
               </div>

               <div>
                    <label htmlFor="userPassword" >Password: </label>
                    <input  type="password" id="userPassword" name="userPassword" onChange={formik.handleChange } value={formik.values.userPassword} />
               </div>

               <button type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;