import React,{ useState,useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import image from "../assets/images/image.jpg";
import { SiFacebook, SiTwitter } from "react-icons/si"
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

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
}
.options{
  display:flex;
  flex-direction:rows;
  justify-content:space-between; 

}


`
// const OptionButton=styled.div`
//  color: ${props => (props.option===props.optionNumber )? "white" : "rgb(205, 143, 27)"};
//   font-weight:bold;
//   font-size:1rem;
//   border-radius:6px;
//   border:none;
//   text-align:center;
//   width:45%;
//   cursor:pointer;
//   padding:20px 10px;
//   background-color: ${props=>(props.option===props.optionNumber )? "rgb(205, 143, 27)" : "white" } ;
//   margin-bottom:20px;
// `


function SignUp() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [option,selectoption]=useState(0);
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword,  email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, password } = values;
      const { data } = await axios.post(registerRoute, {
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


  return (
    <>
    <OuterContainer>
      <div className="LoginContainer">

        <div className="image-col">
          <img src={image} alt="image" />
        </div>

        <form action="" onSubmit={(event) => handleSubmit(event)} className="form-col">
          <div className="titlebar">
            <h1> Sign Up</h1>
            <div className="icons">
              <SiFacebook id="fb-icon" />  
              <SiTwitter />

            </div>
          </div>
         
         {/* <div className="options">
         <OptionButton option={option} optionNumber={0} onClick={()=>{selectoption(0)}}>Using Password</OptionButton>
         <OptionButton option={option} optionNumber={1} onClick={()=>{selectoption(1)}}>Using OTP</OptionButton>
         </div> */}
          <label htmlFor="uname"><b>EMAIL</b></label>
          <input className='credentials' type="email" placeholder="Email" name="email"  onChange={(e) => handleChange(e)}  />
    
          <label htmlFor="password"><b>PASSWORD</b></label>
          <input className='credentials' type="password" placeholder="Password" name="password"   onChange={(e) => handleChange(e)}/>

          <label htmlFor="confirmPassword"><b>CONFIRM PASSWORD</b></label>
          <input className='credentials' type="password" placeholder="Confirm Password" name="confirmPassword"   onChange={(e) => handleChange(e)}/>

          <button id="submit-button" type="submit">Sign Up</button>
         
         

         <p style={{textAlign:"center",marginTop:"20px"}}>Already a member?<Link to="/login" style={{color:"rgb(205, 143, 27)"}}><b>Sign In</b></Link></p>
        </form>

      </div>
    </OuterContainer>
    <ToastContainer />
    </>
  );
}

export default SignUp;