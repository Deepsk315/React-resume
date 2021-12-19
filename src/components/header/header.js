import React from 'react'
import './header.css'

const header = (props) => {
    return (
        <>
        <div className='header'>
        <div className="row">
            <h1 className="col-5" style={{ paddingTop: "5%", paddingLeft: "2%" }}>{props.name}</h1>
            <span className='col-7' style={{ paddingTop: "3%",paddingLeft:"7rem" }}>
                <p><i>Address: </i>20-33A,34P,St 5, Vikas Nagar Colony,Dammaiguda</p>
                <p> <i>Email Id: </i>Deepsk3697@gmail.com</p>
                <p> <i>Phone No: </i>+918897264713</p>
                <p> <i>Github: </i>https://github.com/Deepsk315</p>
            </span>
        </div>
        </div><hr></hr>
        </>
    )
}

export default header
