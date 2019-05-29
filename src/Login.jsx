import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Login extends Component {

  state = {
    feed: { first: "", last: "", email: "", content: "" },
    firsterror: "",
    lasterror: "",
    emailerror: "",
  };

  validate = () => {
    let firsterror = "";
    let lasterror = "";
    let emailerror = "";
    
    if(!((this.state.feed.email).match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)))
      {emailerror = "invalid email";}
    if(emailerror){this.setState({emailerror});}
    else{this.setState({emailerror : ""});}

    if(!this.state.feed.first){firsterror = "first name cannot be blank";}
    if(firsterror){this.setState({firsterror});}
    else{this.setState({firsterror : ""});}

    if(!this.state.feed.last){lasterror = "last name cannot be blank";}
    if(lasterror){this.setState({lasterror});}
    else{this.setState({lasterror : ""});}
  }

  handleSubmit = async event => {
    event.preventDefault();
    if(this.state.feed.first === "" || this.state.feed.last === "" || this.state.feed.email === ""){
      toast.error("Fields cannot be left Blank");}
    else if (this.state.emailerror === "" && this.state.firsterror === "" && this.state.lasterror === ""){
      toast.success("Application Submitted successfully");}
    else{toast.error("Application errors found");}
  } 

  handleChange = event => {
    const feed = { ...this.state.feed };
    feed[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ feed }); 
    this.validate();
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        
        <div className="container mt-5 mb-5 center">
         <div className="row">

            <div className="col-sm-4">
             <form onSubmit={this.handleSubmit}>
              <div className="form-group">
               <input 
               className="form-control mt-3"
               id="first" 
               type="text" 
               name="first"
               autoComplete="off"
               value = {this.state.feed.first}
               onChange = {this.handleChange}
               placeholder="First Name"
               /> 
               {this.state.firsterror ? (<div className="alert alert-danger">{this.state.firsterror}</div>) : null} 

               <input 
               className="form-control mt-3"
               id="last" 
               name="last"
               type="text" 
               autoComplete="off"
               value = {this.state.feed.last}
               onChange = {this.handleChange}
               placeholder="Last Name"
               />  
               {this.state.lasterror ? (<div className="alert alert-danger">{this.state.lasterror}</div>) : null}

               <input 
               className="form-control mt-3"
               id="email" 
               name="email"
               type="text" 
               autoComplete="off"
               value = {this.state.feed.email}
               onChange = {this.handleChange}
               placeholder="Email Address"
               /> 
               {this.state.emailerror ? (<div className="alert alert-danger">{this.state.emailerror}</div>) : null}

              </div>
              </form>
          </div>


          </div>

          <div className="row">
            <div className="col-sm-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                 <Link className="btn btn-success float-right" to="1" style = {{color :"#ffffff"}} >
                 Login
                 </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Login;
