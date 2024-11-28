import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

export type FrameComponentType = {
  className?: string;
  label?: string;

  /** Variant props */
  property1?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  property1 = "Default",
  label,
}) => {
  return (
    <div
      className={`self-stretch rounded-81xl bg-whitesmoke-200 border-gainsboro-200 border-[1px] border-solid flex flex-row items-center justify-start py-[1rem] px-[1.5rem] gap-[0.625rem] text-left text-[0.875rem] text-dimgray font-gilroy ${className}`}
      data-property1={property1}
    >
      <div className="h-[1.063rem] w-[20.813rem] relative font-medium inline-block shrink-0">
        {label}
      </div>
      <FrameComponent3 property1="with-icon" />
    </div>
  );
};

export default FrameComponent;
