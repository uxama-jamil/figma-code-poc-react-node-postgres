import { FunctionComponent, useState } from "react";
import EmailInputInnerContainer from "./EmailInputInnerContainer";
import { Button, TextField } from "@mui/material";
import { useFormData } from "../context/context";
import { useNavigate } from "react-router-dom";

export type Otp = {
  className?: string;
};

const Otp: FunctionComponent<Otp> = ({
  className = "",
}) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
  const {formData, setFormData} = useFormData();
  const [errorMessage, setErrorMessage] = useState('');

  const handleProceed = async (e: React.FormEvent) => {  
    e.preventDefault();  

    // Retrieve the bearer token from local storage or context, as needed  
    const token = formData?.accessToken; // Adjust this line as per your token management  

    if (!token) {  
        setErrorMessage('No token found. Please log in again.');  
        return;  
    }  

    const payload = { otp,email:formData.email };  

    try {  
        const response = await fetch('http://localhost:3000/v1/auth/validate-otp', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
                'Authorization': `${token}`,  
            },  
            body: JSON.stringify(payload),  
        });  

        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  

        const data = await response.json();  
        if(data.success){
          setFormData && setFormData((prevData:any) => ({...prevData, isAuthenticated: true}))
            navigate('/home')
        }
        console.log('OTP validation successful:', data);  
         // Handle success (e.g., navigate to next page)  
        // Redirect or update state as necessary  
    } catch (error) {  
      setFormData && setFormData((prevData:any) => ({...prevData, isAuthenticated: false}))

        console.error('There was a problem with the OTP validation:', error);  
        setErrorMessage('OTP validation failed. Please try again.');  
    }  
};

  return (
    <section
      className={`w-[61.344rem] flex flex-col items-start justify-start gap-[11.106rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq700:gap-[2.75rem] mq975:gap-[5.563rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start py-[5rem] px-[5.625rem] box-border max-w-full z-[1] mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq700:gap-[3.25rem] mq700:py-[3.25rem] mq700:px-[2.813rem] mq700:box-border">
        <div
      className={`self-stretch flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[2rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq450:gap-[1rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
        <h3 className="m-0 w-[9.688rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1rem]">
          Verify OTP
        </h3>
        <div className="relative text-[0.875rem] font-medium text-slategray">
        We've sent you a one-time password (OTP). Please check your email to retrieve it.
        </div>
        <div className="self-stretch relative text-[0.813rem] font-medium">
          * Required
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
        placeholder="OTP*"
        name="otp"
        variant="outlined"
        onChange={(e) => setOtp(e.target.value)}
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
      {/* <div className="w-[20.313rem] h-[5.156rem] rounded-lg border-darkgray border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
      </div> */}
      <div className="self-stretch flex flex-col items-start justify-center gap-[0.625rem] text-[0.875rem] text-white font-plus-jakarta-sans">
        <div className="relative font-semibold">t</div>
        {/* <FrameComponent2
          frameComponentFrame="Request A Reset Link"
          frameDivPadding="unset"
          frameDivBorderRadius="unset"
          frameDivBackgroundColor="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
        /> */}
        {errorMessage && <p style={{ color: 'red',fontSize:'14px' }}>{errorMessage}</p>}
        <Button
        className="self-stretch"
        disableElevation
        variant="contained"
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
        onClick={handleProceed}
      >
        Proceed
      </Button>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
