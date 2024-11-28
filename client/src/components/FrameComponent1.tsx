import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;

  /** Variant props */
  boolean?: string;

  /** Style props */
  checkboxMarkHeight?: CSSProperties["height"];
  checkboxMarkWidth?: CSSProperties["width"];
  checkboxMarkPadding?: CSSProperties["padding"];
  checkboxCircleHeight?: CSSProperties["height"];
  checkboxCircleWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  boolean = "On",
  checkboxMarkHeight,
  checkboxMarkWidth,
  checkboxMarkPadding,
  checkboxCircleHeight,
  checkboxCircleWidth,
}) => {
  const checkboxMarkStyle: CSSProperties = useMemo(() => {
    return {
      height: checkboxMarkHeight,
      width: checkboxMarkWidth,
      padding: checkboxMarkPadding,
    };
  }, [checkboxMarkHeight, checkboxMarkWidth, checkboxMarkPadding]);

  const checkboxCircleStyle: CSSProperties = useMemo(() => {
    return {
      height: checkboxCircleHeight,
      width: checkboxCircleWidth,
    };
  }, [checkboxCircleHeight, checkboxCircleWidth]);

  return (
    <div
      className={`flex flex-row items-center justify-start ${className}`}
      data-boolean={boolean}
    >
      <div
        className="h-[1.25rem] w-[2.156rem] rounded-lg-2 bg-gray border-gainsboro-100 border-[2.4px] border-solid box-border flex flex-row items-center justify-end py-[0.025rem] px-[0.337rem]"
        style={checkboxMarkStyle}
      >
        <div
          className="h-[0.619rem] w-[0.619rem] relative rounded-[50%] bg-white"
          style={checkboxCircleStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
