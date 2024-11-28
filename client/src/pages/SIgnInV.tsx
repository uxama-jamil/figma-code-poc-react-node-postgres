import { FunctionComponent, useCallback } from "react";
import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";

const SIgnInV: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.75rem] px-[2rem] pb-[1.687rem] box-border gap-[8.531rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-gray font-gilroy mq450:gap-[2.125rem] mq975:gap-[4.25rem]">
      <img
        className="w-full h-full absolute !m-[0] top-[-0.025rem] right-[-0.019rem] object-cover"
        alt=""
        src="/adobestock-245973186-1@2x.png"
      />
      <section className="w-[61.344rem] flex flex-col items-start justify-start gap-[8.031rem] max-w-full mq700:gap-[2rem] mq975:gap-[4rem]">
        <img
          className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <SignInForm />
      </section>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] max-w-full">
        <div
          className="flex-1 relative inline-block min-w-[10.5rem] max-w-full cursor-pointer z-[1]"
          onClick={onDontHaveAnClick}
        >
          <span className="font-medium">Don’t have an account?</span>
          <b>
            <span className="text-slategray">{` `}</span>
            <span>Sign Up!</span>
          </b>
        </div>
        <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3rem] z-[1]">
          Privacy
        </a>
        <div className="relative font-semibold z-[1]">Terms</div>
        <div className="relative font-semibold inline-block min-w-[3.688rem] z-[1]">
          Get Help
        </div>
      </div>
      <div className="w-[9.375rem] h-[3.938rem] rounded-xl bg-lavenderblush border-darkred border-[1px] border-solid box-border hidden flex-col items-center justify-start py-[1.125rem] px-[1.187rem] gap-[0.5rem] z-[3] text-[0.75rem] text-darkred font-font-awesome-6-pro">
        <div className="relative"></div>
        <b className="self-stretch relative font-inter text-center">Phase 2</b>
      </div>
    </div>
  );
};

export default SIgnInV;
