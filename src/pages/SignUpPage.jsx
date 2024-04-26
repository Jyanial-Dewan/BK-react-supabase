import { useState } from "react";
import { supabase } from "../client";
import bg from "../images/bg-2.jpg"
import logo from "../images/burger-king.png"
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [formData, setFormData] = useState({fullName: '', email: '', password: ''});

    console.log(formData);
    
    const handleChange = (e)=> {
      setFormData((prevFormData)=>{
        return{
          ...prevFormData,
          [e.target.name] : e.target.value
        }
      })
    }
    
    async function handleSubmit (e) {
      e.preventDefault();
      try {
        // eslint-disable-next-line no-unused-vars
        const { data, error } = await supabase.auth.signUp(
          {
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                full_name: formData.fullName,
                
              }
            }
          }
        )
        alert('check email for verification')
    } catch (error) {
        alert(error)
      }
    }
    
      return (
        <div style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${bg})`}} className='h-[100vh] w-[100vw] flex justify-center items-center bg-cover bg-center'>
          <div className='bg-white/30 border-2 rounded-md flex flex-col md:flex-row' >
            <div className="w-[300px] md:w-[400px] flex flex-col justify-center px-6 py-4">
                <div className="flex items-center justify-center mb-2 md:mb-6 md:justify-start">
                    <h1 className="font-bold text-2xl text-red-50 md:text-4xl">Welcome to</h1>
                    <img src={logo} alt="Burger King Logo" className="w-[2rem] ml-2 md:w-[4rem] md:ml-5"/>
                </div>
                <p className="text-red-50 text-sm md:text-md md:font-semibold ">Get access to exclusive coupons. Discover our menu and order delivery or pick up from a Burger King near you.</p>
            </div>

            <div className="hidden md:block md:w-[2px] md:bg-white/30 md:my-[30px]"></div>

            <div className="h-[2px] mx-[20px] bg-white/30 md:hidden"></div>

            <form onSubmit={handleSubmit} className="w-[300px] px-6 md:py-4">
            <h2 className="text-2xl font-bold my-1 text-center text-red-50 md:text-3xl">Sign Up</h2>
            <div className='flex flex-col mb-3'>
              <label htmlFor="fullName" className="text-white">Full Name:</label>
              <input type="text"
              name="fullName"
              placeholder='Full Name'
              className='outline-none px-4 py-1 rounded-md'
              onChange={handleChange}/>
            </div>  
    
            <div className='flex flex-col mb-3'>
              <label htmlFor="email" className="text-white">Email:</label>
              <input type="email"
              name="email" 
              placeholder='Email' 
              className='outline-none px-4 py-1 rounded-md'
              onChange={handleChange}/>
            </div>
    
            <div className='flex flex-col mb-3'>
              <label htmlFor="password" className="text-white">Password:</label>
              <input type="password"
              name="password" 
              placeholder='Password' 
              className='outline-none px-4 py-1 rounded-md'
              onChange={handleChange}/>
            </div>
    
            <button type='submit' className='bg-gradient-to-r from-red-600 to-yellow-500 py-1 px-3 mt-2 mb-4 rounded-md w-full hover:from-yellow-500 hover:to-red-600 text-white'>Sign Up</button>
            <div className="mb-3 text-red-50">
            {`Already have an acoount?`} <Link to='/' className="text-blue-700 border-blue-700 pb-1 hover:border-b-[1px]">Sign In</Link>
            </div>
            </form>
          </div>
    
          
        </div>
      )
}

export default SignUpPage
