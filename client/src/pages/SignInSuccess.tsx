import { FunctionComponent, useCallback } from "react";
import PasswordResetForm from "../components/PasswordResetForm";
import { useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.75rem] px-[2rem] pb-[1.656rem] box-border gap-[11.581rem] leading-[normal] tracking-[normal] mq450:gap-[2.875rem] mq975:gap-[5.813rem]">
      <img
        className="w-full h-full absolute !m-[0] top-[-0.025rem] right-[-0.019rem] object-cover"
        alt=""
        src="/adobestock-245973186-1@2x.png"
      />
      <HomePage />
      <footer className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] max-w-full text-left text-[0.875rem] text-gray font-gilroy">
        
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

export default Home;
