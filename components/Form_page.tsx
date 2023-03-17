import React from "react";
import "./Form_page.css";
import { useState } from "react";


declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // extends React's HTMLAttributes
    noValidate?: boolean;  
  }
    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
      // extends React's HTMLAttributes
      noValidate?: boolean;  
     rows?: number;
     cols?: number;
     maxLength?: number;
     minLength?: number;
     pattern?: string;
     required?: boolean;
     readOnly?: boolean;
     disabled?: boolean;
     placeholder?: string;
     spellCheck?: boolean;
     title?: string;
     type?: string;
    } 
  
}

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors : any ) => {
    let valid = true;
    Object.values(errors).forEach((val: any) => val.length > 0 && (valid = false));
    return valid;
  };
  interface MyProps  {  }
  type MyState = { fullName: string | null, email:string | null, comments:string | null , errors: { fullName:any, email: any, comments:any } };
  export default class form_page extends React.Component < MyProps, MyState > {
    constructor(props:any) {
      super(props);
      this.state = {
        fullName: null,
        email: null,
        comments: null,
        errors: {
          fullName: '',
          email: '',
          comments: '',
        },
       
      };
    }
  
    handleChange = (event: any) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'fullName' : 
          errors.fullName  = 
            value.length < 5
              ? 'Full Name must be at least 5 characters long!'
              : '';
          break;
        case 'email': 
          errors.email = validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'comments': 
          errors.comments = value.length < 8
              ? 'message must be at least 8 characters long!'
              : '';
          break;
        default:
          break;
      }
      interface errors {
        fullName?: string;
        email?: string;
        comments?: string;
      }
      this.setState( {fullName: errors.fullName, email:errors.email, comments:errors.comments} );
      
     
    }
  
    handleSubmit = (event: any) => {
      event.preventDefault();
      if(validateForm(this.state.errors)) {
        console.info('Valid Form')       
        document.getElementById("validmessage")!.innerHTML = "<span style='color: green; font-weight: bold;'>Valid & Submitted</span>";                
                        
        let json= JSON.stringify(this.state);
        this.state = {
          fullName: null,
          email: null,
          comments: null,
          errors: {
            fullName: '',
            email: '',
            comments: '',
          }
        }
        fetch("https://win22-webapi.azurewebsites.net/api/contactform",{
          method: "POST",
          headers:{"Content-type" : "application/json"},
          body:json
        })
      
       
      console.log(json)
      }
      else{
        console.error('Invalid Form')
        document.getElementById("validmessage")!.innerHTML = "<span style='color: red; font-weight: bold;'>InValid, Try again</span>";   
      }
    
    }
    render() {
      const {errors} = this.state;
      return (
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2 id="validmessage">Contact US</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='fullName'>
                <label htmlFor="fullName">Full Name</label>
                <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                {errors.fullName.length > 0 && 
                  <span className='error'>{errors.fullName}</span>}
              </div>
              <div className='email'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' onChange={this.handleChange} noValidate />
                {errors.email.length > 0 && 
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='comments'>
                <label htmlFor="comments">Message</label>
                <textarea type='comments' name='comments' onChange={this.handleChange} noValidate />
                {errors.comments.length > 0 && 
                  <span className='error'>{errors.comments}</span>}
              </div>
              <div className='submit'>
                <button className="createb">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  
  
