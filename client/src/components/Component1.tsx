import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";

export type Component1Type = {
  className?: string;
  image9?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  image9,
}) => {
  return (
    <div
      className={`self-stretch overflow-y-auto flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.156rem] box-border gap-[1.312rem] max-w-full text-left text-[0.875rem] text-gray font-gilroy ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
        <FrameComponent property1="with-icon" label="Password*" />
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-gilroy font-medium text-[0.875rem] text-dimgray"
          placeholder="Confirm Password*"
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
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-[0.375rem] max-w-full">
        <FrameComponent1
          boolean="On"
          checkboxMarkHeight="1.25rem"
          checkboxMarkWidth="2.156rem"
          checkboxMarkPadding="0.025rem 0.337rem"
          checkboxCircleHeight="0.619rem"
          checkboxCircleWidth="0.619rem"
        />
        <div className="flex-1 flex flex-col items-start justify-center py-[0rem] pl-[0rem] pr-[1.25rem] box-border min-w-[14.875rem] max-w-full">
          <div className="w-[18.75rem] relative inline-block">
            <p className="m-0">
              <span className="font-semibold font-gilroy">{`I have agreed to all the `}</span>
              <b>Terms and Conditions,</b>
            </p>
            <p className="m-0">
              <b>{`Privacy Policy & DPA.`}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20.313rem] h-[5.156rem] rounded-lg border-darkgray border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={image9}
        />
      </div>
    </div>
  );
};

export default Component1;
