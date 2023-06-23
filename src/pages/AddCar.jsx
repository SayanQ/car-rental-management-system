import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/addCar.css";

const AddCar = () => {
    const [carInput, setCarInput] = useState({
        car_No: "",
        model: "",
        company: "",
        type: "",
        colour: "",
        year_Of_Manufacturing: 2000,
        km_Driven: 0,
        sitting_Capacity: 0,
        boot_space: 0,
        charges_Per_Hour: 0
    });
    
    const handleInputChange = (e) => {
      setCarInput({
        ...carInput,
        [e.target.className]: e.target.value
      });
    }

    const postData = async (e) => {
        try {
            await axios.post('/Car', carInput)
            .then((response) => console.log(response)
            );
            alert('Ok');

          } catch (exe) {
            // console.log(exe);
          }
        
    }

  console.log(carInput);

    return (
        <Helmet title="Car Registration Page">
            <CommonSection title="Car Registration Page" />
            
            <div className="outer">
            <div className="box">
                <Form className="create-form">
                    <div className="element-div">
                    <Form.Field>
                        <label>car_No</label>
                        <input placeholder='car_No' className = 'car_No' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>model</label>
                        <input placeholder='model' className = 'model' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>company</label>
                        <input placeholder='company' className = 'company' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>type</label>
                        <input placeholder='type' className = 'type' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>colour</label>
                        <input placeholder='colour' className = 'colour' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>year_Of_Manufacturing</label>
                        <input type = "number" placeholder='year_Of_Manufacturing' className = 'year_Of_Manufacturing' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>km_Driven</label>
                        <input type = "number" placeholder='km_Driven' className = 'km_Driven' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>sitting_Capacity</label>
                        <input type = "number" placeholder='sitting_Capacity' className = 'sitting_Capacity' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>boot_space</label>
                        <input type = "number" placeholder='boot_space' className = 'boot_space' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <div className="element-div">
                    <Form.Field>
                        <label>charges_Per_Hour</label>
                        <input type = "number" placeholder='charges_Per_Hour' className = 'charges_Per_Hour' onChange={(e) => handleInputChange(e)}/>
                    </Form.Field>
                    </div>
                    <Button className='sub-btn' onClick={(e) => postData(e)} type='submit'>Submit</Button>
                </Form>
            </div>
            </div>
        </Helmet>

    ); 
}

export default AddCar;

