import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt="">
                </img>
                
            </div>

        </div>

        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number"/>
                <input type="password" placeholder="Password"/>
                <button className="loginButton">Sing In</button>
                <span>New to NetFlix?<b>Sign up now</b></span>
                <small>
                eque porro quisquam est qui dolorem i<b>Learn more</b>
                </small>
            </form>

        </div>



    </div>
  )
}

export default Login