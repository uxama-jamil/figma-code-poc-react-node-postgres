import { FunctionComponent, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton, Button } from "@mui/material";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/context";

export type EmailInputInnerContainerType = {
  className?: string;
};

const EmailInputInnerContainer: FunctionComponent<
  EmailInputInnerContainerType
> = ({ className = "" }) => {
  const [email, setEmail] = useState('')
  const {formData, setFormData} = useFormData()
  const navigate = useNavigate();
  const [disable,setDisable] = useState(false);
  const [status, setStatus] = useState({success: false, message: ''});

  const handleForgotPassword = async () => {  
    setDisable(true)
    
    setStatus((data)=>({...data, message: ''}));
    const payload = {  
        email,  
    };  

    try {  
        const response = await fetch('http://localhost:3000/v1/auth/forgot-password', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify(payload),  
        });  

        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        setDisable(false)

        }  

        const data = await response.json();  
        if(data && data.success && data.body.token.accessToken){
          setFormData && setFormData((prevData:any) => ({...prevData, accessToken: `Bearer ${data.body.token.accessToken}`,email}))
          setDisable(false)
          setStatus({success: true, message:data.body.message ? data.body.message : 'OTP sent to email for password reset'})

          navigate('/validate-otp')
        }
        console.log('Signin successful:', data);  
        // Handle successful signup (e.g., redirect, show a message, etc.)  
    } catch (error) {  
        console.error('There was a problem with the signup:', error);  
        setFormData && setFormData((prevData:any) => ({...prevData, accessToken: ''}))
        setDisable(false)
        setStatus({success: false, message: 'Sign in failed. Please try again.'});  
    }  
};  
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq450:gap-[1rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
        <h3 className="m-0 w-[9.688rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1rem]">
          Forgot Password
        </h3>
        <div className="relative text-[0.875rem] font-medium text-slategray">
          A password reset link will be sent to your registered email. Please
          enter your registered email ID
        </div>
        <div className="self-stretch relative text-[0.813rem] font-medium">
          * Required
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
        placeholder="Email Address*"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        disabled={disable}
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
      {status.message && <p style={{ color: status.success ? 'green' : 'red',fontSize:'14px' }}>{status.message}</p>} 
      <div className="self-stretch flex flex-col items-start justify-center gap-[0.625rem] text-[0.875rem] text-white font-plus-jakarta-sans">
        <div className="relative font-semibold">t</div>
        <Button
        className="self-stretch"
        disableElevation
        variant="contained"
        disabled={disable}
        // onClick={handleForgotPassword}
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
      >
        Request A Reset Link
      </Button>
      </div>
    </div>
  );
};

export default EmailInputInnerContainer;
