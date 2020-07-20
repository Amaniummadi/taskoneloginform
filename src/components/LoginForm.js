import React from 'react'

import {
    Link
  } from "react-router-dom";
function LoginForm({userName,email,password,handleEmail,handlePassword,handleSubmit,handleUserName}) {
    return (
       <div className="form-head">
           <div className="form-chaild">
           <form class="w-full max-w-lg" onSubmit={handleSubmit}>
<div class="md:flex md:items-center justify-center">
   
   
    <p>Login</p>
   
  </div>
  <div class="md:flex md:items-center mb-6">
      
      <div class="md:w-1/4">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          UserName
        </label>
      </div>
      <div class="md:w-3/4">
        <input type="text" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"  placeholder="please enter your name" onChange={handleUserName} value={userName} />
      </div>
    </div>
  <div class="md:flex md:items-center mb-6">
      
    <div class="md:w-1/4">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email 
      </label>
    </div>
    <div class="md:w-3/4">
      <input type="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"  placeholder="enter email " onChange={handleEmail} value={email} />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/4">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Password
      </label>
    </div>
    <div class="md:w-3/4">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="password" placeholder="***************" onChange={handlePassword} value={password} />
    </div>
  </div>

  <div class="flex justify-between mt-15">
  <div class=" text-center">
  <Link to="/list">
      <button className=" next shadow  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" >
        Next
      </button>
      </Link>
  </div>
  <div class=" text-center">
  <button class="shadow   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        Sign Up
      </button>
  </div>
 
 
</div>
 
</form>
           </div>


       </div>


    )
}

export default LoginForm
