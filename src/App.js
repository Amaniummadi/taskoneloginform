import React, { useState } from 'react';
import LoginForm from './components/LoginForm'
import {LoginList} from './components/LoginList'
// import uuid from "uuid/v4"
import uuid from 'react-uuid'
import './App.css';
import { Alert } from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

const initialvalues = [
  {id: uuid() ,userName:"userone" , email:"userone@gmail.com" , password:"Password1"},
  {id: uuid() , userName:"usertwo" ,email:"usertwo@gmail.com" , password:"Password2"}
]

function App() {
  const [allList, setAllList] = useState(initialvalues)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  // alert
const [alert, setAlert] = useState({show:false})

const handleEmail=(e)=>{
  setEmail(e.target.value)
  console.log(e.target.value);
 
}
const handlePassword = (e) =>{
  setPassword(e.target.value);
  console.log("password",e.target.value);
} 
const handleUserName = (e) => {
  setUserName(e.target.value);
}
const handleAlert = ({type,text}) =>{
  setAlert({show:true,type,text})
  setTimeout(()=>{
    setAlert({show:false})
  },3000)
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("email",email);
  console.log("password",password);
    if(email !== '' && password !== ''){
      const singledata = {id:uuid(),userName,email,password}
      setAllList([...allList,singledata])
      handleAlert({type:'success',text:"details added successfully"})
      setEmail(" ")
      setPassword("")
      setUserName('')
    }
    else{
      handleAlert({type:'danger',text:"please enter you details"})

    }
}

// clear all items
const clearItems = () =>{
  console.log("clear items ");
  setAllList([])
  handleAlert({type:'danger',text:"all items deleted"})
}

// handle delete
const handleDelete = (id) =>{
  console.log(`item deleted,${id}`);
  let tempList= allList.filter(item => item.id !== id )
  console.log(tempList);
  setAllList(tempList)
  handleAlert({type:'danger',text:"item deleted"})
}



  return (
    <div className="App">

<Router>
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <Switch>
        
          <Route path="/list">
          <LoginList allList={allList} clearItems={clearItems} handleDelete={handleDelete}/>
          </Route>
          <Route path="/">
          <LoginForm userName={userName} email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} handleSubmit={handleSubmit} handleUserName={handleUserName}/>
          </Route>
        </Switch>
      </div>
    </Router>
     

      
        {/* <LoginForm email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} handleSubmit={handleSubmit}/>
        <LoginList allList={allList} clearItems={clearItems} handleDelete={handleDelete}/> */}
        
    </div>
  );
}

export default App;
