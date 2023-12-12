import React from 'react'
import Log from './../../../public/images/login.png'
import './../../css/styles.css'
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <main>
        <div className="grid">
            <img src={Log} className="log" alt="" />
        </div>
        <div className="grid">
            <div className="forms">
               <div className="text">
                    <h1>Log In</h1>
               </div>
               <div className="label">
               <form>
            <div className="form-group">
                <FaUser/>
                <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
                <FaLock />
                <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
        </form>
               </div>
            </div>
        </div>
    </main>
  )
}
