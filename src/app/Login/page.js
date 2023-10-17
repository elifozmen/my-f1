"use client";
import Navbar from 'components/navbar'
import { useState } from 'react';

async function Login() {

    try{
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = {
        "username": "elif",
        "password": "1234"
      };
    
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow',
      };

      const result = await fetch("http://localhost:4000/Login", requestOptions);

      if(result.status==200){
        const data = await result.json();
        if(data.status == 200){
            localStorage.setItem("username", "elif");
        }
        console.log(data.status);
      } else {
        console.info(result);
        console.log("Error: " + result.status);
      }

    }catch(error){

        console.log(error);

    }

}

export default function Info(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const userNameChange = event => {
        setUserName(event.target.value);
    };
    const passwordChange = event => {
        setPassword(event.target.value);
    };
    const rememberMeChange = event => {
        setRememberMe(event.target.value);
    };
    const credentialChange = event => {
        console.log(`username ${username} password ${password} remember me ${rememberMe}`);
    };

    return(
        <main> 
            <Navbar></Navbar>
            <div className="home-item">
                <form action="" id="loginForm">
                    <h1>Please Sign In</h1>

                    <div className="form-floating">
                        <input onChange={userNameChange} value={username} type="text" className="form-control" id="floatingInput" placeholder="Username"/>  
                        <label htmlFor="floatingInput"> </label>
                    </div>

                    <div className="form-floating">
                        <input onChange={passwordChange} value={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingInput"> </label>
                    </div>

                    <div className="checkRemember">
                        <label> <input onChange={rememberMeChange} checked={rememberMe} type="checkbox"/> Remember Me  </label>
                    </div>

                    <div className="buttonSign" onClick={Login}> Sign In</div>
                    
                    
                    </form> 

            </div>
        </main>
    )
}