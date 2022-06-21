import React,{useState} from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModel";



const AddUser = props => {
 const [userName,setUserName] =  useState('');
 const [userAge,setUserAge] = useState('');
 const [error,setError] = useState();


const usernameChangeHandler=event=>{
setUserName(event.target.value);
}
const ageChangeHandler=event=>{
    setUserAge(event.target.value);
}
const addUserHandler=event=>{
    event.preventDefault();
    if(userName.trim().length ===0 || userAge.trim().length === 0){
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty values).',
        })
        return;
    }
    if(+userAge < 1){
        setError({
            title:'Invalid Age',
            message:'please enter a valid age (>0).'
        })
        return;
    }
    props.userInputs(userName,userAge);
    setUserName('');
    setUserAge('');
}
const errorHandler = () => {
    setError(null);
  };

    return (<div> {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles['user_input']}>
        <form onSubmit={addUserHandler} className={styles['input']}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={userName} onChange={usernameChangeHandler}/>
            <label>Age (Years)</label>
            <input type='number' value={userAge} onChange={ageChangeHandler}/>
            <Button type='submit'>AddUser</Button>
            </form>
    </Card>
    </div>)
}

export default AddUser;