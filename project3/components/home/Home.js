import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (

            <div>
                <div className="container-fluid bg-primary min-vh-100 p-5 d-flex">
                    <div className="bg-warning m-4 d-flex justify-content-center align-items-center rounded" style={{ width: "300px", height: "300px" }}>
                        <span className="fas fa-user" style={{fontSize:"16rem"}}></span>
                    </div>

                    <div className="m-4 d-flex flex-column justify-content-center align-items-center" style={{ width: "300px", height: "300px" }}>
                        <h2 className="" style={{color:"purple", fontSize:"5rem"}}>Welcome!</h2>
                        <p style={{fontSize:"2em", }}>lorem ipsum, lorem</p>
                        <button>Start</button>
                    </div>
                </div>
            </div>
        )
    }
}
