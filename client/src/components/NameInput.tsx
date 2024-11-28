import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/context";
// import { useData } from "../context/context";

export type NameInputType = {
  className?: string;
};

const NameInput: FunctionComponent<NameInputType> = ({ className = "" }) => {
  const navigate = useNavigate();
  // const { userData, handleChange } = useData(); 
  const {formData, setFormData} = useFormData()
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialisation: "",
    registrationNo: "",
  });  
  


  const handleFormChange = (event:any) => {  
    const { name, value } = event.target;  
    setFormInfo({  
      ...formInfo,  
      [name]: value,  
    });
   setFormData && setFormData({  
      ...formInfo,  
      [name]: value
    });

  }; 
  const nextHandler = () => {
    // console.log(formData,"ppppp")
    // handleChange(formInfo)
    navigate("/sign-up-individual-create-passwrd-step2", { state: formInfo });
  }
  return (
    <form
      className={`m-0 w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start pt-[5.175rem] px-[5.625rem] pb-[5.006rem] box-border gap-[2rem] max-w-full z-[1] mq450:pt-[2.188rem] mq450:px-[1.25rem] mq450:pb-[2.125rem] mq450:box-border mq700:gap-[1rem] mq700:pl-[2.813rem] mq700:pr-[2.813rem] mq700:box-border mq975:pt-[3.375rem] mq975:pb-[3.25rem] mq975:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="w-[11.625rem] flex flex-row items-start justify-start gap-[0.625rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.675rem]">
            <h3 className="m-0 self-stretch relative text-[1.25rem] font-bold font-plus-jakarta-sans text-gray text-left mq450:text-[1rem]">
              Individual
            </h3>
            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
              <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-whitesmoke-300" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] rounded-81xl bg-whitesmoke-300">
                  <KeyboardArrowDownSharpIcon/>
            </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
          <h3 className="m-0 relative text-[1.25rem] font-bold font-plus-jakarta-sans text-gray text-left mq450:text-[1rem]">
            Account Owner
          </h3>
          <div className="relative text-[0.875rem] font-medium font-gilroy text-slategray text-left">
            Enter your information just as it appears on your health insurance
            card or pay stub.
          </div>
          <div className="self-stretch relative text-[0.813rem] font-medium font-gilroy text-gray text-left">
            * Required
          </div>
        </div>
      </div>
      <div className="self-stretch h-[18.188rem] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.937rem] box-border gap-[1rem] mq450:pb-[1.938rem] mq450:box-border">
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="First Name*"
          variant="outlined"
          name="firstName"
          value={formInfo.firstName}
          onChange={handleFormChange}
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
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="Last Name*"
          variant="outlined"
          name="lastName"
          value={formInfo.lastName}
          onChange={handleFormChange}
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
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="Email Address*"
          variant="outlined"
          name="email"
          value={formInfo.email}
          onChange={handleFormChange}
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
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="Phone Number*"
          variant="outlined"
          name="phoneNumber"
          value={formInfo.phoneNumber}
          onChange={handleFormChange}
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
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="Specialisation*"
          variant="outlined"
          name="specialisation"
          value={formInfo.specialisation}
          onChange={handleFormChange}
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
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray shrink-0"
          placeholder="Registration No*"
          variant="outlined"
          name="registrationNo"
          value={formInfo.registrationNo}
          onChange={handleFormChange}
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
        onClick={nextHandler}
      >
        Next
      </Button>
    </form>
  );
};

export default NameInput;
