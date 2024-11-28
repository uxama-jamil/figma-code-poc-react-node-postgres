import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";

export type SignupFormType = {
  className?: string;
};

const SignupForm: FunctionComponent<SignupFormType> = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <section
      className={`w-[61.344rem] flex flex-col items-start justify-start gap-[17.437rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq700:gap-[4.375rem] mq975:gap-[8.688rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start py-[5rem] px-[5.625rem] box-border max-w-full z-[1] mq450:gap-[1.625rem] mq450:py-[3.25rem] mq450:px-[1.25rem] mq450:box-border mq700:gap-[3.25rem] mq700:pl-[2.813rem] mq700:pr-[2.813rem] mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-center gap-[2rem] mq450:gap-[1rem]">
            <div className="w-[16.25rem] flex flex-col items-start justify-start gap-[0.75rem]">
              <h3 className="m-0 w-[9.438rem] relative text-inherit font-semibold font-inherit inline-block mq450:text-[1rem]">
                Let’s get started
              </h3>
              <div className="self-stretch relative text-[0.875rem] font-medium text-slategray">
                Choose your role and create an account
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-center" onClick={() => navigate("/sign-up-clinic-hospital-clinic-information-step1")} >
                <FrameComponent2
                  property1="Default"
                  button="Clinic / Hospital"
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
              <div className="self-stretch flex flex-col items-start justify-center" onClick={() => navigate("/sign-up-individual-account-owner-step1")} >
                <FrameComponent2
                  property1="Default"
                  button="Individual"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
