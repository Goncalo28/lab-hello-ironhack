import React from 'react'
import ironhackLogo from '../ironhack-logo.svg'
import menuTop from '../menu-top.svg'
import reactLogo from '../react-logo.svg'

const Header = () => {
    return (
        <div className="container header-component">
            <div className="container nav">
                <img src={ironhackLogo} alt=""></img>
                <img src={menuTop} alt=''></img>
            </div>
            <div className="container header-second-section">
                <div className="text-section">
                    <h1 className="header-h1">Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    <button className="btn btn-light">Awesome!</button>
                </div>
                <div>
                    <img src={reactLogo} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Header
