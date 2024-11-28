import { FunctionComponent } from "react";

export type EmailContentType = {
  className?: string;
};

const EmailContent: FunctionComponent<EmailContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[61.344rem] flex flex-col items-start justify-start gap-[11.043rem] max-w-full text-left text-[1.25rem] text-gray font-gilroy mq700:gap-[2.75rem] mq975:gap-[5.5rem] ${className}`}
    >
      <img
        className="w-[9.781rem] h-[1.5rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[36.688rem] rounded-3xl bg-white flex flex-col items-start justify-start pt-[15.237rem] pb-[15.231rem] pl-[5.625rem] pr-[1.25rem] box-border gap-[0.75rem] max-w-full z-[1] mq450:pl-[1.25rem] mq450:box-border mq700:pt-[9.875rem] mq700:pb-[9.875rem] mq700:box-border">
          <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[6.188rem] mq450:text-[1rem]">
            Email Sent
          </h3>
          <div className="w-[19.769rem] relative text-[0.875rem] leading-[1.313rem] font-medium text-slategray inline-block">
            We sent an email to name@gmail.com with a link to reset your
            password.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailContent;
