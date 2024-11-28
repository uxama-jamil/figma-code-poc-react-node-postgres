import { FunctionComponent, useCallback, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton, Button, FormControlLabel, Switch, styled } from "@mui/material";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/context";

export type SignInInputType = {
  className?: string;
};
// Custom Styled Switch  
const CustomSwitch = styled(Switch)(({ theme }) => ({  
  width: 34,  
  height: 20,  
  padding: 0,  
  '& > .MuiSwitch-track': {  
    borderRadius: 34 / 2,  
    // backgroundColor: theme.palette.grey[300], 
    backgroundColor: 'black', 
    opacity: 1,  
    transition: theme.transitions.create(['background-color', 'border']),  
  },  
  '&.Mui-checked > .MuiSwitch-track': {  
    // backgroundColor: theme.palette.primary.main,  
    backgroundColor: 'black',
  },  
  '& > .MuiSwitch-thumb': {  
    margin: 2,  
    width: 20,  
    height: 20,  
    borderRadius: '50%',  
    transition: theme.transitions.create(['transform']),  
    backgroundColor: 'white',  
    boxShadow: 'none',  
  },  
  '&.Mui-checked > .MuiSwitch-thumb': {  
    transform: 'translateX(24px)',  
    backgroundColor: '#fff', // Ensuring the thumb stays white  
    boxShadow: 'none',  
  },  
})); 

const SignInInput: FunctionComponent<SignInInputType> = ({
  className = "",
}) => {
  const {formData, setFormData} = useFormData()
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [disable,setDisable] = useState(false);

  const handleSignInDataChange = (event:any) => {
    const { name, value } = event.target;
    setFormData &&  setFormData(
      (prevData:any) => ({...prevData, [name]: value})
    )
    setSignInData({
      ...signInData,
      [name]: value
    })
  } 

  // const handleSubmit = useCallback(() => {  
  //   // Handle the login logic here  
  //     handleSignin();
  //   },[]
  // ) 
  const handleSignin = async () => {  
    setDisable(true)
    if (!signInData.email || !signInData.password) {  
        setErrorMessage('Please enter both email and password');  
        setDisable(false)
        return;  
    }
    
    setErrorMessage('');
    const payload = {  
        email: signInData.email,  
        password:  signInData.password 
    };  

    try {  
        const response = await fetch('http://localhost:3000/v1/auth/signin', {  
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
          setFormData && setFormData((prevData:any) => ({...prevData, accessToken: `Bearer ${data.body.token.accessToken}`}))
        setDisable(false)

          navigate('/validate-otp')
        }
        console.log('Signin successful:', data);  
        // Handle successful signup (e.g., redirect, show a message, etc.)  
    } catch (error) {  
        console.error('There was a problem with the signup:', error);  
        setDisable(false)
        setErrorMessage('Sign in failed. Please try again.');  
    }  
};  
  const navigate = useNavigate();

  // const onLoginButtonContainerClick = useCallback(() => {
  //   // Please sync "Dashboard-SideBar_Expend(ListiView)" to the project
  //   console.log('Submitted Username:', username);  
  //   console.log('Submitted Password:', password);  
  // }, []);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center py-[0.168rem] px-[0rem] box-border gap-[2rem] max-w-full text-left text-[0.875rem] text-gray font-gilroy mq450:gap-[1rem] ${className}`}
    >
      <div className="w-[12.25rem] flex flex-col items-start justify-start gap-[0.75rem] text-[1.25rem]">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[1rem]">
          Sign In
        </h3>
        <div className="self-stretch relative text-[0.875rem] font-medium text-slategray">
          Sign in to access your Account
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-dimgray">
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Email"
          name="email"
          variant="outlined"
          value={signInData.email}  
          disabled={disable}
        onChange={handleSignInDataChange} 
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
        {/* <FrameComponent property1="with-icon" label="Password" /> */}
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Password"
          name="password"
          type="password"
          variant="outlined"
          disabled={disable}
          value={signInData.password}  
          onChange={handleSignInDataChange} 
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
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[0.375rem]">
          <FrameComponent1 boolean="On" />
          <div className="relative font-semibold inline-block min-w-[5.938rem]">
            Remember me
          </div>
        </div>


        {/* <FormControlLabel  
        control={  
          <CustomSwitch  
            checked={rememberMe}  
            onChange={(e) => setRememberMe(e.target.checked)}  
            color="primary"  
          />  
        }  
        label="Remember me"  
        labelPlacement="end"  
      />  */}
      </div>
      {/* <div className="w-[20.313rem] h-[5.156rem] rounded-lg border-darkgray border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
      </div> */}
      {/* <div
        className="self-stretch flex flex-col items-start justify-center cursor-pointer text-white font-plus-jakarta-sans"
        
      > */}
        {/* <FrameComponent2 property1="Default" button="Sign In" /> */}
        {errorMessage && <p style={{ color: 'red',fontSize:'14px' }}>{errorMessage}</p>} 
        <Button
            className="self-stretch"
            disableElevation
            variant="contained"
            onClick={handleSignin}
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
          >
            Sign in
          </Button>
      {/* </div> */}
      <div className="flex flex-row items-center justify-start text-slategray">
        <div
          className="relative inline-block min-w-[7.25rem] cursor-pointer"
          onClick={onForgotPasswordTextClick}
        >
          <span className="font-medium">{`Forgot `}</span>
          <b className="text-gray">Password?</b>
        </div>
      </div>
    </div>
  );
};

export default SignInInput;
