import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";
import Component1 from "./Component1";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useNavigate } from "react-router-dom";


export type ClinicNameContainerType = {
  className?: string;
};

const ClinicNameContainer: FunctionComponent<ClinicNameContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start pt-[5.175rem] px-[5.625rem] pb-[5.006rem] box-border gap-[2rem] max-w-full z-[1] text-left text-[1.25rem] text-gray font-gilroy mq450:pt-[2.188rem] mq450:px-[1.25rem] mq450:pb-[2.125rem] mq450:box-border mq700:gap-[1rem] mq700:pl-[2.813rem] mq700:pr-[2.813rem] mq700:box-border mq975:pt-[3.375rem] mq975:pb-[3.25rem] mq975:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="w-[11.313rem] flex flex-col items-start justify-start gap-[2.675rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
              Clinic / Hospital
            </h3>
            <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] rounded-81xl bg-whitesmoke-300">
                  <KeyboardArrowDownSharpIcon/>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
            <div className="h-[0.375rem] w-[2.188rem] relative rounded-81xl bg-gray" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
          <h3 className="m-0 w-[9.875rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[1rem]">
            Create Password
          </h3>
          <div className="relative text-[0.875rem] font-medium text-slategray">
            Enter your information just as it appears on your health insurance
            card or pay stub.
          </div>
          <div className="self-stretch relative text-[0.813rem] font-medium">
            * Required
          </div>
        </div>
      </div>
      {/* <Component1 image9="/image-9@2x.png" /> */}
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
        onClick={() => navigate("/")}
      >
        Next
      </Button>
    </div>
  );
};

export default ClinicNameContainer;
