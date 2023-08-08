

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Step 2: Create the Context
const AuthContext = createContext();   
// const AuthContext =React.createContext();
// Step 3: Create the Provider component
const AuthContextProvider = ({ children }) => { 
   // Step 4: Set up state and functions to share via the Context    
   const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user"))|| null);
  
  const login=async (loginInput)=>{
      // let response= await axios.post('http://localhost:3003/api/auth/login', loginInput,{ withCredentials: true });
      let response= await axios.post('http://localhost:3003/api/auth/login', loginInput,{ withCredentials: true });
      setcurrentUser(response.data)
  }

  const logout=async ()=>{
 try {
   console.log("rchd auth context logout");
   let response= await axios.post('http://localhost:3003/api/auth/logout',{},{ withCredentials: true });
   console.log(response,"response");                   
   setcurrentUser(null)
 } catch (error) {
   console.log(error,"error.......");
 }
}

useEffect(()=>{
localStorage.setItem("user",JSON.stringify(currentUser))     
},[currentUser])


return (
   <AuthContext.Provider value={{currentUser,login,logout}}>
      {children}
   </AuthContext.Provider>
)
   

};

export { AuthContext, AuthContextProvider};


