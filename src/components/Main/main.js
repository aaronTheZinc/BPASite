import React, { Component } from "react";
import img from "../Images/illustration.svg";
import Form from "../form";
import "./index.css";
import {isMobile} from 'react-device-detect';




class main extends Component {
constructor() {
  super()
  this.state = {
    isMobile: false
  }
}
  componentDidMount() {
    if(isMobile) {
      this.setState({
        isMobile:true
      })
    }
  }
  render() {
    const {isMobile} = this.state
   if(isMobile) {

    return (
      <div className='main' style={{overflowX:'hidden'}}>
           <div
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
         <label
            className="header"
            style={{ fontSize: "50px", paddingLeft: "-100px", color: "black" }}
          >
            bpa
          </label>
         
          </div>
          <div style={{ paddingTop:'50px', display:'block'}}>
            <label  style={{color:'white', textAlign:'left', fontSize:'50px',fontWeight:'inherit'}}>
                NLC
            </label>
            <br></br>
            <section style={{marginTop:'50px'}} >
            <label className='header' style={{color:'white', textAlign:'left', fontSize:'20px',fontWeight:'inherit'}}>
                Orlando, Fl 2020
            </label>
            </section>

        </div>
          <img
              src={img}
              style={{
                width: "350px",
                height: "100px",
                marginRight: "0%",
                marginTop: "5%",
                marginTop: "20%",
              }}
            />
            <div
              style={{
                backgroundColor: "white",
            
                height: "600px",
                width: "100%",
                borderRadius: "30px",
                marginTop: "90px",
              }}
            >
              <section style={{marginTop:'100px'}}>
              <label
                className="header"
                style={{ fontSize: "30px", color: "black" }}
              >
                  Register
                  </label>
                  </section>
       
  
              <Form />
            </div>

        
      </div>)
   } else {
    return (
      
      <div className='main' style={{ backgroundColor: "black" }}>

        <div
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <label
            className="header"
            style={{ fontSize: "50px", paddingLeft: "-100px", color: "black" }}
          >
            bpa
          </label>
        </div>
     
        <div style={{ display: "flex" }}>

          <div style={{ float: "left" }}>
          <div style={{ paddingTop:'50px', display:'block'}}>
            <label  style={{color:'white', textAlign:'left', fontSize:'50px',fontWeight:'inherit'}}>
                NLC
            </label>
            <br></br>
            <section style={{marginTop:'50px'}} >
            <label className='header' style={{color:'white', textAlign:'left', fontSize:'20px',fontWeight:'inherit'}}>
                Orlando, Fl 2020
            </label>
            </section>

        </div>
            <img
              src={img}
              style={{
                width: "650px",
                height: "400px",
                marginRight: "60%",
                marginTop: "5%",
                marginTop: "40%",
              }}
            />

          </div>

          <div
            style={{
              marginRight: "100px",
              float: "right",
              width: "50%",
              marginTop: "0%",
              background: "black",
              textAlign: "center",
              justifyContent: "center",
            }}
            className="form"
          >
            <div
              style={{
                backgroundColor: "white",
                marginLeft: "30%",
                height: "600px",
                width: "500px",
                borderRadius: "25px",
                marginTop: "90px",
              }}
            >
              <label
                className="header"
                style={{ fontSize: "30px", color: "black" }}
              >
                {" "}
                <span style={{ fontWeight: "lighter", marginTop: "500px" }}>
         
                  Register
                </span>
              </label>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default main;
