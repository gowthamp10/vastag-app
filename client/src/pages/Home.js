import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/background.jpg";
import "../styles/Home.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";



function Home() {
    const navigate = useNavigate();
  const callHomePage = async()=>{
    try {
      const res = await fetch('/home',{
        method:"GET",
        headers:{
           Accept:"application/json",
           "Content-Type":"application/json",

        },
        credentials:"include"
      });
      const data  = await res.json();
      console.log(data);
      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login-signup");
    }
  }

  useEffect(() => {
    callHomePage();
    
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})`, width: "50%", float: "left" }}>
        <div className="headerContainer">
          {/* <h1> Your Location </h1>
        <input type="text" id="fname" name="fname"  className="input-boxes" required/>
        <h1> Your Service</h1>
        <input type="text" id="fname" name="fname" className="input-boxes" required/><br /><br />

        <Link to="/search">
          <button> SERACH </button>
        </Link> */}
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter your Location"
            className="input-boxes"
          >
            <Form.Control type="text" placeholder="Location" required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Enter your Service" className="input-boxes">
            <Form.Control type="text" placeholder="Service" />
          </FloatingLabel>
          <Link to="/search">
          <Button  className="search-button">SERACH</Button>
          </Link>
          </Form>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
