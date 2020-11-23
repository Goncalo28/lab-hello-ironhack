import React from 'react'

const Footer = () => {
    return (
        <div className="container footer-component">
            <div className="container">
                <img src="/images/icon1.png" alt=''></img>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="container">
                <img src="/images/icon2.png" alt=''></img>
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="container">
                <img src="/images/icon3.png" alt=''></img>
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="container">
                <img src="/images/icon4.png" alt=''></img>
                <h1>JSX</h1>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Footer
