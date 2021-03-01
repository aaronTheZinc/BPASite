import React, { Component, useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import "./index.css";
import { Input } from "antd";
import Select from 'react-select';


const DropDown = ({year}) => {
  const data = [
    { value: '2019', label: '2019', color: '#000000', isFixed: true },
    { value: '2020', label: '2020', color: '#000000', isFixed: true },
    { value: '2021', label: '2021', color: '#000000', isFixed: true },
  ]
  return (
    <div className='formContainer' >
<Select
style={{}}
onChange={year}
options={data}
/>
</div>
  )

}



export const InputForm = ({ onChange , data}) => {
  return (
    <div>
      <div
        className="formContainer"
        style={{ width: "200px", marginTop: "50px" }}
      >
        <Input
          className="fields"
          placeholder="First Name"
          onChange={onChange}
          name='firstName'
          value={data.firstName}
        />
        <span style={{ marginLeft: "20px" }}></span>
        <Input 
        className="fields" 
        placeholder="Last Name" 
        onChange={onChange}
        name='lastName'
        value={data.lastName}
        
        />
      </div>
    </div>
  );
};

export const ContactInfo = ({ onChange, year, setNames, name , data}) => {
  const yeardata = [
    { value: '2019', label: '2019', color: '#000000', isFixed: true },
    { value: '2020', label: '2020', color: '#000000', isFixed: true },
    { value: '2021', label: '2021', color: '#000000', isFixed: true },
  ]
  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{}}>
        <Input
          className="Contact"
          placeholder="Chapter Name"
          onChange={onChange}
          name="chapterName"
          value={data.chapterName}
        />
        <div style={{ display: "inline-block" , marginTop:'20px' }}>
          <Input
            className="Contact"
            placeholder='Team Names - Split With  ","'
            onChange={setNames}
            value={data.raw}
       
            
          />
          <br></br>
          <div style={{marginTop:'20px'}}>
          <label style={{ fontWeight: "bolder" }}>{name}</label>
          </div>
        </div>
        <Select
style={{}}
onChange={year}
options={yeardata}
/>
      </div>
    </div>
  );
};

export const LocationForm  = ({onChange}) => {
  return (
    <div style={{marginTop:'70px'}}>
       <Input
          className="fields"
          placeholder="School Name"
          onChange={onChange}
          name='schoolName'
        />
        <br></br>
        <Input
        style={{marginTop:'40px'}}
          className="fields"
          placeholder="City"
          onChange={onChange}
          name='City'
        />
        <br></br>
        <Input
        style={{marginTop:'40px'}}
          className="fields"
          placeholder="State"
          onChange={onChange}
          name='State'
        />
    </div>
  )
}










export const Alert = (condition) => {
  switch (condition) {
    case "didFinish":
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
      });
      break;
    case "email-err":
      cogoToast.error("Incorrectly Formatted Email");
      break;
  }
};
