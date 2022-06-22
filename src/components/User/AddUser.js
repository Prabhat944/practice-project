import React,{useState,useRef} from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModel";



const AddUser = props => {
 const enteredUsername =  useRef();
 const enteredUserAge =useRef();
 const enteredCollegeName=useRef();

 const [error,setError] = useState();


const addUserHandler=event=>{
    event.preventDefault();
    const userName=enteredUsername.current.value;
    const userAge=enteredUserAge.current.value;
    const userCollege=enteredCollegeName.current.value;
    if(userName.trim().length ===0 || userAge.trim().length === 0 || userCollege.trim().length === 0){
        setError({
            title:'Invalid input',
            message:'Please enter a valid name ,age(non-empty values) and college.',
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
    props.userInputs(userName,userAge,userCollege);
  
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
            <input id='username' type='text' ref={enteredUsername}/>
            <label htmlFor='age'>Age (Years)</label>
            <input type='number' id='age' ref={enteredUserAge}/>
            <label htmlFor='college'>College Name</label>
            <input type='text' id='college' ref={enteredCollegeName} />
            <Button type='submit'>AddUser</Button>
            </form>
    </Card>
    </div>)
}

export default AddUser;