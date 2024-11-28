import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FrameComponent from "./FrameComponent";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useNavigate } from "react-router-dom";

export type NameContainerType = {
  className?: string;
};

const NameContainer: FunctionComponent<NameContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');  
  const [state, setState] = useState(''); 
  // Sample data for the dropdowns  
  const countries = [  
    { code: 'US', name: 'United States' },  
    { code: 'CA', name: 'Canada' },  
    { code: 'GB', name: 'United Kingdom' },  
    // Add more countries as needed  
  ];  

  const states = {  
    US: ['California', 'Texas', 'New York'],  
    CA: ['Ontario', 'Quebec', 'British Columbia'],  
    GB: ['England', 'Scotland', 'Wales'],  
    // Add more states/provinces as needed  
  }; 
  return (
    <form
      className={`m-0 w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start pt-[5.175rem] px-[5.625rem] pb-[5.006rem] box-border gap-[2rem] max-w-full z-[1] mq450:pt-[2.188rem] mq450:px-[1.25rem] mq450:pb-[2.125rem] mq450:box-border mq700:gap-[1rem] mq700:pl-[2.813rem] mq700:pr-[2.813rem] mq700:box-border mq975:pt-[3.375rem] mq975:pb-[3.25rem] mq975:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="w-[11.313rem] flex flex-col items-start justify-start gap-[2.675rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
            <h3 className="m-0 flex-1 relative text-[1.25rem] font-bold font-gilroy text-gray text-left mq450:text-[1rem]">
              Clinic / Hospital
            </h3>
            <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] rounded-81xl bg-whitesmoke-300">
                  <KeyboardArrowDownSharpIcon/>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-whitesmoke-300" />
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-whitesmoke-300" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
          <h3 className="m-0 relative text-[1.25rem] font-bold font-gilroy text-gray text-left mq450:text-[1rem]">
            Clinic Information
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
      <div className="self-stretch h-[18.188rem] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[1rem]">
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Clinic Name*"
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
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Clinic Address*"
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
        {/* <FrameComponent property1="lable-with-icon" label="Country*" /> */}
        <FormControl variant="outlined" margin="normal"   style={{width:'100%'}} required  sx={{
            "& fieldset": { borderColor: "#e2e2e2" },
            "& .MuiInputBase-root": {
              height: "49px",
              backgroundColor: "#f9f9f9",
              borderRadius: "100px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#6e757c" },
            "& .MuiFormControl-root" : {width:'100%'}
          }}>  
        <Select  
        className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          value={country}  
          
          placeholder="Country*"
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={(e) => {  
            setCountry(e.target.value);  
            setState(''); // Reset state when country changes  
          }}  
          // label="Country"  
          displayEmpty
        >  
        <MenuItem value="" disabled>  
            Select Country  
          </MenuItem>  
          {countries.map((country) => (  
            <MenuItem key={country.code} value={country.code}>  
              {country.name}  
            </MenuItem>  
          ))}  
        </Select>  
      </FormControl>
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="State*"
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
        {/* <FrameComponent property1="lable-with-icon" label="Town/City*" /> */}
        <FormControl variant="outlined" margin="normal"   style={{width:'100%'}} required  sx={{
            "& fieldset": { borderColor: "#e2e2e2" },
            "& .MuiInputBase-root": {
              height: "49px",
              backgroundColor: "#f9f9f9",
              borderRadius: "100px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#6e757c" },
            "& .MuiFormControl-root" : {width:'100%'}
          }}>  
        <Select  
        className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          value={country}  
          
          placeholder="Country*"
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={(e) => {  
            setCountry(e.target.value);  
            setState(''); // Reset state when country changes  
          }}  
          // label="Country"  
          displayEmpty
        >  
        <MenuItem value="" disabled >   
            Town/City  
          </MenuItem>  
          {countries.map((country) => (  
            <MenuItem key={country.code} value={country.code}>  
              {country.name}  
            </MenuItem>  
          ))}  
        </Select>  
      </FormControl>
      <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Post Code*"
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
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Clinic Phone Number*"
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
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Company Registeration No*"
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
        onClick={() => navigate("/sign-up-clinic-hospital-account-owner-step2")}
      >
        Next
      </Button>
    </form>
  );
};

export default NameContainer;
