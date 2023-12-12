import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider'
import './../../css/HomeScreen.css'
import React from 'react'

export default function HomeScreen() {
  return (
    <main>
        <div className='main'>
            <Slider/>
        </div>
        <div className='main'>
            <div className='form'>
                <div className="text">
                <h1>Welcome to Colab Messaging</h1>
                <h3>Colab is Kaduna's first Innovation Hub and
                   Co-working space.</h3>
                </div>
                <div className="btn">
                    <Link to={"/signup"}><button className='sign'>Sign Up</button></Link>
                    <Link to={"/login"}><button className='login'>Log In</button></Link>
                </div>
            </div>
        </div>
    </main>
  )
}
