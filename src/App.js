import React, {useEffect, useRef} from 'react';
import './App.css';

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(()=> {
    nameRef.current.focus();
  },[])

  function submitHandle (){
    alert("Form submitted");
  }

  function onKeyPressHandle(e) {
    if(e.target.id === "nameInput"){
      if(e.code === "Enter"){
        ageRef.current.focus();
      }
    }

    if(e.target.id === "ageInput"){
      if(e.code === "Enter"){
        marriedRef.current.focus();
      }
    }

    if(e.target.id === "marriedInput"){
      if(e.target.disabled === true){
        e.target.disabled = false;
      }
      if(e.code === "Enter"){
        submitRef.current.focus();
      }
    }
    
  }

  return (
    <div className="App">
      <div className="form-field"> 
        <span>Name</span>
        <input id="nameInput" ref={nameRef} type="text" onKeyPress={onKeyPressHandle}></input>
      </div>
      <div className="form-field">
        <span>Age</span>
        <input id="ageInput" ref={ageRef} type="text" onKeyPress={onKeyPressHandle}></input>
      </div>
      <div className="form-field">
        <span>Married?</span>
        <input id="marriedInput" ref={marriedRef} type="checkbox" onKeyPress={onKeyPressHandle} onChange={onKeyPressHandle}></input>
      </div>
      <button id="submitBtn" ref={submitRef} onClick={submitHandle}>Submit</button>
    </div>
  );
}

export default App;
