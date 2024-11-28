import { FunctionComponent, useCallback } from "react";
import FormFields from "../components/FormFields";
import { useNavigate } from "react-router-dom";

const SignUpClinicHospitalAc: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.75rem] px-[2rem] pb-[1.656rem] box-border gap-[5.318rem] leading-[normal] tracking-[normal] mq450:gap-[1.313rem] mq975:gap-[2.688rem]">
      <img
        className="w-full h-full absolute !m-[0] top-[-0.025rem] right-[-0.019rem] object-cover"
        alt=""
        src="/adobestock-245973186-1@2x.png"
      />
      <section className="w-[61.375rem] flex flex-col items-start justify-start gap-[4.856rem] max-w-full mq700:gap-[1.188rem] mq975:gap-[2.438rem]">
        <img
          className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <FormFields />
        </div>
      </section>
      <footer className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] max-w-full text-left text-[0.875rem] text-gray font-gilroy">
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
      </footer>
    </div>
  );
};

export default SignUpClinicHospitalAc;
