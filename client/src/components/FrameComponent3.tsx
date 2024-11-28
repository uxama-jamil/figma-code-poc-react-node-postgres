import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <input
      className={`w-full [border:none] [outline:none] bg-[transparent] flex flex-row items-center justify-center font-font-awesome-6-pro text-[0.875rem] text-dimgray ${className}`}
      placeholder="eye"
      type="text"
      data-property1={property1}
    />
  );
};

export default FrameComponent3;
