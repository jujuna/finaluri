import React, { Component, useState, useEffect } from 'react';

import '../App.css';

const Form = () => {
    const intialValues = { email: "", name: "" };
  
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const submit = () => {
      console.log(formValues);
    };
  
    //input change handler
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    //form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmitting(true);
    };
  
    //form validation handler
    const validate = (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
      if (!values.email) {
        errors.email = "არ შეიძლება ცარიელი";
      } else if (!regex.test(values.email)) {
        errors.email = "არასწორი მაილის ფორმატია";
      }
  
      if (!values.name) {
        errors.name = "არ შეიძლება ცარიელი";
      } else if (values.name.length < 2) {
        errors.name = "სახელი უნდა იყოს 1 ასოზე მეტი";
      }
      if (!values.age){
        errors.age="არ შეიძლება ცარიელი";
      }
  
      return errors;
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmitting) {
        submit();
      }
    }, [formErrors]);
  
    return (
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">წარმატებით გაიარეთ რეგისტრაცია</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="email">ემაილი</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
  
          <div className="form-row">
            <label htmlFor="name">სახელი</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="age">ასაკი</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formValues.age}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.age}</span>
            )}
          </div>
  
          <button type="submit" className="btn">რეგისტრაცია</button>
        </form>
      </div>
    );
  };
  
  export default Form;
  