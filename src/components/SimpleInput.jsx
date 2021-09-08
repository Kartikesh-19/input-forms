import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid:enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput,
  } = useInput(value =>value.trim() !=='');
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid:enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput,
  } = useInput(value =>value.includes('@'));

  //   const [input, setInput] = useState("");
  //   const [data, setData] = useState([]);
  //   const handleData = (event) => {
  //     event.preventDefault();
  //     if (!input) {
  //       alert(`fill details`);
  //     } else {
  //       setData([...data, input]);
  //       console.log(data, "heyyye");
  //       setInput("");
  //       let store = JSON.stringify(data);
  //       localStorage.setItem("data", store);
  //       localStorage.getItem(JSON.parse(store));
  //       console.log(store, "btao bhai kya hai isme");
  //     }
  //   };
  // const inputRef=useRef('')
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
 
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const handleData = (e) => {
    e.preventDefault();

    // const enteredName1=inputRef.current.value;
    // console.log(enteredName1,'Ref');
    // inputRef.current.value="" => It is not ideal don't mainuplate the DOM
    if (!enteredNameIsValid) {
        return;
    }
    console.log(enteredName, "state");
    console.log(enteredEmail, "state");
    resetNameInput();
    resetEmailInput();
    
    
  };


  const enteredNameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
    const enteredEmailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleData}>
      <div className={enteredNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {emailInputHasError&& (
        <p className='error-text'>Name must not be empty</p>
      )}
          <div className={enteredEmailClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError&& (
        <p className='error-text'>email must not be empty</p>
      )}
      <div>
        <Button type="submit" style={{ position: "absolute" }}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SimpleInput;
