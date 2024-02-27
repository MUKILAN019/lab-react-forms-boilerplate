import React, { useState } from "react";

function App(){

    const[FirstnameError,setFirstnameError]=useState(false);
    const[LastnameError,setLastnameError]=useState(false);
    const[EmailError,setEmailError]=useState(false);
    const[PhoneError,setPhoneError]=useState(false)
    const[WholeError,setWholeError]=useState(false)
    const[Success,SetSuccess]=useState(false)

    const [state,setState] = useState({
        firstname : "",
        lastname: "" ,
        email: "",
        phoneno: "",
    })

    const handleChange = (event) => {
        const inputValue = event.target.value
        const inputField = event.target.name
        setState({...state, [inputField]: inputValue})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {firstname,lastname,email,phoneno} = state; 
        // destructuring of object

        if(email === "" || phoneno === "" || email.includes(" ")){
            setWholeError(true)
            return;
        }
        if(firstname === ""){
            setFirstnameError(true)
            return
        } else {
            setFirstnameError(false) // This line resets the error once the user has corrected it
        }
        if(lastname === ""){
            setLastnameError(true)
            return
        } else {
            setLastnameError(false) // This line resets the error once the user has corrected it
        }
        if(phoneno.length !== 10){
            setPhoneError(true)
            return
        } else {
            setPhoneError(false) // This line resets the error once the user has corrected it
        }
        if(!email.includes("@kalvium.community")){
            setEmailError(true)
            return
        } else {
            setEmailError(false) // This line resets the error once the user has corrected it
        }

        let symbols = './,<>:;[]{}-=+*!@#$%^&*()|~Ee';
        for(let i=0; i<10; i++){
            if(symbols.includes(phoneno[i])){
                setPhoneError(true)
                return
            }
        }

        let EmailName = email.split("@")[0];

        let smallCharacters = "abcdefghijklmnopqrstuvwxyz.";
        for(let i=0; i<EmailName.length; i++){
            if(!smallCharacters.includes(EmailName[i])){
                setEmailError(true)
                return
            }
        }
        SetSuccess(true)
    }

    return(
        <div className="container">
            <div className="main">
            <div>
            {Success === true ? (
              <div className="registration">
                <p>Registration Successfull</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <input id="inpbox" type="text" placeholder="First Name" name="firstname" onChange={handleChange}/>
                    {FirstnameError === true ? (
                        <p style={{ color: 'red', fontSize: '15px' }}>Do not keep FirstName empty!!</p>
                    ) : null}
                </div>
                <div>
                    <input id="inpbox" type="text" placeholder="Last Name" name="lastname" onChange={handleChange} />
                    {LastnameError === true ? (
                        <p style={{ color: 'red', fontSize: '15px' }}> Do not keep Lastname empty!! </p>
                    ) : null}
                </div>
                <div>
                    <input id="inpbox" type="email" placeholder="@kalvium.community" name="email" onChange={handleChange} />
                    {EmailError === true ? (
                        <p style={{ color: 'red', fontSize: '15px' }}> Enter correct format for email </p>
                    ) : null}
                </div>
                <div>
                    <input id="inpbox" type="number" placeholder="Phone Number" name="phoneno" onChange={handleChange} maxLength={10}/>
                    {PhoneError === true ? (
                        <p style={{ color: 'red', fontSize: '15px' }}> Enter correct format for phone </p>
                    ) : null}
                </div>
                
                <input type="submit" />
            </form>
        </div>
        </div>
        </div>
    )
}

export default App;
