import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";

export type ResetPasswordFormType = {
  className?: string;
};

const ResetPasswordForm: FunctionComponent<ResetPasswordFormType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {  
    // Handle the login logic here  
      // console.log('Submitted Username:', username);  
      // console.log('Submitted Password:', password);  
      handleCall()
    },[]
  )
  const handleCall = async()=>{
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    const res = await api.json() 
    console.log(res)
    res && navigate('/')
  }
  return (
    <section
      className={`w-[61.344rem] flex flex-col items-start justify-start gap-[9.656rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq700:gap-[2.438rem] mq975:gap-[4.813rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-center py-[5rem] px-[5.625rem] box-border max-w-full z-[1] mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq700:gap-[3.25rem] mq700:py-[3.25rem] mq700:px-[2.813rem] mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-center gap-[2rem] mq450:gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] font-plus-jakarta-sans">
              <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
                Reset Password
              </h3>
              <div className="relative text-[0.875rem] font-medium font-gilroy text-slategray">
                A password reset link will be sent to your registered email.
                Please enter your registered email ID
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[1.5rem] text-[0.75rem] text-slategray">
              <div className="self-stretch flex flex-col items-start justify-center gap-[0.75rem]">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
                  placeholder="New Password"
                  variant="outlined"
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
                <div className="self-stretch relative font-medium whitespace-pre-wrap">
                  Cannot be a previously used password
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
                placeholder="Confirm New Password"
                variant="outlined"
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
            </div>
            <div className="self-stretch flex flex-col items-start justify-center" onClick={handleSubmit} style={{cursor:'pointer'}}>
              <FrameComponent2
                property1="Default"
                button="Reset Password"
                frameDivPadding="1rem 2rem"
                frameDivBorderRadius="100px"
                frameDivBackgroundColor="#171819"
                frameDivDisplay="flex"
                frameDivFlexDirection="row"
                frameDivAlignItems="center"
                frameDivJustifyContent="center"
                buttonFontSize="0.875rem"
              />
            </div>
            <div className="w-[13.438rem] flex flex-col items-start justify-center gap-[0.25rem] text-[0.875rem]">
              <div className="w-[9.688rem] relative font-extrabold inline-block">
                Password must contain:
              </div>
              <div className="self-stretch relative leading-[1.313rem] font-semibold text-slategray">
                <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                  <li className="my-[undefined] mx-[undefined]">
                    Minimum of 10 characters
                  </li>
                  <li className="my-[undefined] mx-[undefined]">
                    At least one uppercase letter
                  </li>
                  <li>At least one special character</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
