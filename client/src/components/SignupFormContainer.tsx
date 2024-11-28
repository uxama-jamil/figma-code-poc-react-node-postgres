import { FunctionComponent, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Component1 from "./Component1";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useLocation, useNavigate } from "react-router-dom";
import { useFormData } from "../context/context";
// import { useData } from "../context/context";

export type SignupFormContainerType = {
  className?: string;
};

const SignupFormContainer: FunctionComponent<SignupFormContainerType> = ({
  className = "",
}) => {
  // const { userData, handleChange } = useData();
  const {formData, setFormData} = useFormData()
  const location = useLocation();
  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const passwordChange = (event:any) => {
    const { name, value } = event.target;
    setPasswordForm({
      ...passwordForm,
      [name]: value,
    });
  }
  const [disable,setDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  
  const navigate = useNavigate();
  const handleSignup = async () => {  
    setDisable(true);
    if(passwordForm.password !== passwordForm.confirmPassword){
      setDisable(false);
      setErrorMessage("Passwords do not match.");
      return;
    } 
    setErrorMessage('');
    const payload = {  
        name: `${formData.firstName} ${formData.lastName}`,  // Combined name  
        email: formData.email,  
        password: passwordForm.password  
    };  

    try {  
        const response = await fetch('http://localhost:3000/v1/auth/signup', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(payload),  
        });  

        if (!response.ok) {  
      setDisable(false);

            throw new Error('Network response was not ok');  
        }  

        const data = await response.json();  
      setDisable(false);

        navigate('/')
        console.log('Signup successful:', data);  
        // Handle successful signup (e.g., redirect, show a message, etc.)  
    } catch (error) {  
        console.error('There was a problem with the signup:', error);  
      setDisable(false);

        setErrorMessage('Signup failed. Please try again.');  
    }  
};  
 
  return (
    <section
      className={`w-[61.375rem] flex flex-col items-start justify-start gap-[4.856rem] max-w-full text-left text-[1.25rem] text-gray font-plus-jakarta-sans mq700:gap-[1.188rem] mq975:gap-[2.438rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start pt-[5.175rem] px-[5.625rem] pb-[5.006rem] box-border gap-[2rem] max-w-full z-[1] mq450:pt-[2.188rem] mq450:px-[1.25rem] mq450:pb-[2.125rem] mq450:box-border mq700:gap-[1rem] mq700:pl-[2.813rem] mq700:pr-[2.813rem] mq700:box-border mq975:pt-[3.375rem] mq975:pb-[3.25rem] mq975:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="w-[11.625rem] flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.675rem]">
                <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[1rem]">
                  Individual
                </h3>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
                  <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] rounded-81xl bg-whitesmoke-300">
                  <KeyboardArrowDownSharpIcon/>
            </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] font-gilroy">
              <h3 className="m-0 w-[9.875rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1rem]">
                Create Password
              </h3>
              <div className="relative text-[0.875rem] font-medium text-slategray">
                Enter your information just as it appears on your health
                insurance card or pay stub.
              </div>
              <div className="self-stretch relative text-[0.813rem] font-medium">
                * Required
              </div>
            </div>
          </div>
          <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Password"
          name="password"
          type="password"
          variant="outlined"
          disabled={disable}
          value={passwordForm.password}
          onChange={passwordChange}
          
          sx={{
            "& fieldset": { borderColor: "#e2e2e2" },
            "& .MuiInputBase-root": {
              height: "49px",
              backgroundColor: "#f9f9f9",
              borderRadius: "100px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#6e757c" },
          }}
          
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Confirm password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          disabled={disable}
          value={passwordForm.confirmPassword}
          onChange={passwordChange}
          sx={{
            "& fieldset": { borderColor: "#e2e2e2" },
            "& .MuiInputBase-root": {
              height: "49px",
              backgroundColor: "#f9f9f9",
              borderRadius: "100px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#6e757c" },
          }}
        />
         {errorMessage && <p style={{ color: 'red',fontSize:'14px' }}>{errorMessage}</p>} 
          <Button
            className="self-stretch"
            disableElevation
            variant="contained"
            disabled={disable}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#171819",
              borderRadius: "100px",
              "&:hover": { background: "#171819" },
              width: 407,
              height: 50,
            }}
            onClick={() => handleSignup()}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignupFormContainer;
