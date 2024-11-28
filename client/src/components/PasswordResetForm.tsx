import { FunctionComponent } from "react";
import EmailInputInnerContainer from "./EmailInputInnerContainer";

export type PasswordResetFormType = {
  className?: string;
};

const PasswordResetForm: FunctionComponent<PasswordResetFormType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[61.344rem] flex flex-col items-start justify-start gap-[11.106rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq700:gap-[2.75rem] mq975:gap-[5.563rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start py-[5rem] px-[5.625rem] box-border max-w-full z-[1] mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq700:gap-[3.25rem] mq700:py-[3.25rem] mq700:px-[2.813rem] mq700:box-border">
          <EmailInputInnerContainer />
        </div>
      </div>
    </section>
  );
};

export default PasswordResetForm;
