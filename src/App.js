import React,{useState} from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {

const [userDetail,setUserDetail] = useState([]);

const setUserInputHandler = (username,age,college) =>{  
  setUserDetail((prevDetail)=>{
    return [...prevDetail,
      {name:username,age:age,college:college,id:Math.random().toString()}];
  })
}
  return <div>
    <AddUser userInputs={setUserInputHandler} />
    <UserList users={userDetail}/>
  </div>
}

export default App;
