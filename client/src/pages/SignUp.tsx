import { FunctionComponent, useCallback } from "react";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.75rem] px-[2rem] pb-[1.656rem] box-border gap-[17.906rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-gray font-gilroy mq450:gap-[4.5rem] mq975:gap-[8.938rem]">
      <img
        className="w-full h-full absolute !m-[0] top-[-0.025rem] right-[-0.019rem] object-cover"
        alt=""
        src="/adobestock-245973186-1@2x.png"
      />
      <SignupForm />
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] max-w-full">
        <div
          className="flex-1 relative inline-block min-w-[10.813rem] max-w-full cursor-pointer z-[1] font-plus-jakarta-sans"
          onClick={onAlreadyHaveAnClick}
        >
          <span className="font-medium">Already have an account?</span>
          <span className="font-semibold text-slategray">{` `}</span>
          <span className="font-extrabold">Sign In</span>
        </div>
        <div className="relative font-semibold inline-block min-w-[3rem] z-[1]">
          Privacy
        </div>
        <div className="relative font-semibold z-[1]">Terms</div>
        <div className="relative font-semibold inline-block min-w-[3.688rem] z-[1]">
          Get Help
        </div>
      </div>
    </div>
  );
};

export default SignUp;
