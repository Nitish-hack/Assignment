import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import image from "../assets/images/image.jpg";
import { SiFacebook, SiTwitter } from "react-icons/si"
import { IoIosCheckbox } from "react-icons/io"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loginRoute, sendOtpRoute, verifyOtpRoute } from "../utils/APIRoutes";
import "react-toastify/dist/ReactToastify.css";

const OuterContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
background-color: #dddce1;
align-items:center;
justify-content:center;

.LoginContainer{
width:65vw;
height:600px;
display:flex;
flex-direction:row;
@media only screen and (max-width:990px){
  width:90vw;
}
}


.image-col{
width:50%;
height:100%;
@media only screen and (max-width:710px){
  display:none;
}

img{
  height:100%;
  width:100%;
}
}
.form-col{
  font-family:Roboto;
  padding:50px 30px;
  width:50%;
  display:flex;
  flex-direction:column;
  background:white;
  @media only screen and (max-width:710px){
  width:100%;
}

  .titlebar{
   
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    opacity:0.7;
    margin-bottom:30px;
    .icons{
      font-size:30px;
      opacity:0.7;
      #fb-icon{
      margin-right:10px;
      }
      
    }

  }

.credentials{
  margin:10px 0px;
  margin-bottom:20px;
  padding:20px 10px;
  border:1px solid grey;
  border-radius:6px;

 ::placeholder{
 font-weight:bold;
 font-size:1rem;
 }
}

label{
  font-size:1rem;
  font-weight:bold;

}
#submit-button{
  color:white;
  font-weight:bold;
  font-size:1rem;
  border-radius:6px;
  border:none;
  cursor:pointer;
  padding:20px 10px;
  background:rgb(205, 143, 27);
  margin-bottom:20px;
}

.otp-button{
  color:white;
  font-weight:bold;
  font-size:1rem;
  border-radius:6px;
  width:45%;
  border:none;
  cursor:pointer;
  padding:20px 10px;
  background:rgb(205, 143, 27);
  margin-bottom:20px;
}

#send-otp-btn{
  background-color:${props => props.otpsend === 1 ? "grey" : "rgb(205, 143, 27)"};
  color:${props => props.otpsend === 1 ? "black" : "white"};
}
#verify-otp-btn{
  background-color:${props => props.otpsend === 0 ? "grey" : "rgb(205, 143, 27)"};
  color:${props => props.otpsend === 0 ? "black" : "white"};
}
.backup{
  display:flex;
  flex-direction:row;
  justify-content:space-between;

}

}
.options{
  display:flex;
  flex-direction:rows;
  justify-content:space-between; 

}
.resend-button{
  margin-top:-10px;
  margin-bottom:10px;
    font-weight:bold;
    padding:0 5px;
  cursor:pointer;
  :hover{
    color:blue;
  }
}

`
const OptionButton = styled.div`
 color: ${props => (props.option === props.optionNumber) ? "white" : "rgb(205, 143, 27)"};
  font-weight:bold;
  font-size:1rem;
  border-radius:6px;
  text-align:center;
  border:none;
  width:45%;
  cursor:pointer;
  padding:20px 10px;
  background-color: ${props => (props.option === props.optionNumber) ? "rgb(205, 143, 27)" : "white"} ;
  margin-bottom:20px;
`


function Login() {
  const [option, selectoption] = useState(0);
  const [buttontext, setbuttontext] = useState("Send OTP");
  const [otpsend, setOtp] = useState(0);

  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "", otp: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  const handleSendOtp = async (event) => {

    if (otpsend === 0) {
      const { email } = values;
      if (email === "") {
        toast.error("Email is required.", toastOptions);
      }
      else {
        setbuttontext("Sending...");
        const { data } = await axios.post(sendOtpRoute, {
          email,
        });
        setbuttontext("Send OTP");
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          setOtp(1);
          toast.success(data.msg, toastOptions);
        }

      }
    }
  }
  const handleVerifyOtp = async (event) => {
    if (otpsend === 1) {
      const { email, otp } = values;
      if (otp.length !== 6) {
        setOtp(1);
        toast.error("OTP must be of length 6", toastOptions);
      }
      else {
        const { data } = await axios.post(verifyOtpRoute, {
          email,
          otp
        });
        if (data.status === false) {
          setValues({ ...values, otp: "" });

          toast.error(data.msg, toastOptions);
          // setOtp(0);

        }
        if (data.status === true) {
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user)
          );

          navigate("/");
        }

      }
    }
  }

const handleResendOtp=()=>{
setOtp(0);
}

  return (
    <>
      <OuterContainer otpsend={otpsend}>
        <div className="LoginContainer">

          <div className="image-col">
            <img src={image} alt="image" />
          </div>

          <form action="" className="form-col" onSubmit={(event) => handleSubmit(event)}>
            <div className="titlebar">
              <h1> Sign In</h1>
              <div className="icons">
                <SiFacebook id="fb-icon" />
                <SiTwitter />

              </div>
            </div>

            <div className="options">
              <OptionButton option={option} optionNumber={0} onClick={() => { selectoption(0) }}>Using Password</OptionButton>
              <OptionButton option={option} optionNumber={1} onClick={() => { selectoption(1) }}>Using OTP</OptionButton>
            </div>
            <label htmlFor="email"><b>EMAIL</b></label>
            <input className='credentials' type="text" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />

            {option == 0 &&
              <>
                <label htmlFor="password"><b>PASSWORD</b></label>
                <input className='credentials' type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />

                <button id="submit-button" type="submit">Sign In</button>
              </>
            }
            {option == 1 &&
              <>
                <label htmlFor="otp"><b>OTP</b></label>
                <input className='credentials' type="text" value={values.otp} placeholder="Enter OTP" name="otp" onChange={(e) => handleChange(e)} />
                <div className="options">
                  <div id="send-otp-btn" className="otp-button" style={{ textAlign: "center" }} onClick={(e) => handleSendOtp(e)}>{buttontext}</div>
                  <div id="verify-otp-btn" className="otp-button" style={{ textAlign: "center" }} onClick={(e) => handleVerifyOtp(e)}>Verify OTP</div>
                </div>
                <p className="resend-button"  onClick={(e) => handleResendOtp(e)}>Resend OTP?</p>
              </>
            }



            <div className="backup">
              <span style={{ color: "rgb(205, 143, 27)" }}><IoIosCheckbox style={{ marginBottom: "-2px", marginRight: "7px" }} /><b>Remember Me</b></span>
              <span>Forgot Password</span>
            </div>

            <p style={{ textAlign: "center", marginTop: "20px" }}>Not a member?<Link to="/register" style={{ color: "rgb(205, 143, 27)" }}><b>Sign Up</b></Link></p>
          </form>

        </div>
      </OuterContainer>
      <ToastContainer />
    </>
  );
}

export default Login;