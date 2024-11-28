import { FunctionComponent } from "react";
import SignInInput from "./SignInInput";

export type SignInFormType = {
  className?: string;
};

const SignInForm: FunctionComponent<SignInFormType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-[0.875rem] text-gray font-gilroy ${className}`}
    >
      <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start py-[5rem] px-[5.625rem] box-border max-w-full z-[1] mq450:gap-[1.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq700:gap-[3.25rem] mq700:py-[3.25rem] mq700:px-[2.813rem] mq700:box-border">
        <SignInInput />
      </div>
    </div>
  );
};

export default SignInForm;
