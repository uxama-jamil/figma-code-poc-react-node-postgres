import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  button?: string;
  frameComponentFrame?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  frameDivBorderRadius?: CSSProperties["borderRadius"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  buttonFontSize?: CSSProperties["fontSize"];
  onClick?: ()=>void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  property1 = "Default",
  button,
  frameComponentFrame,
  frameDivPadding,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  buttonFontSize,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      borderRadius: frameDivBorderRadius,
      backgroundColor: frameDivBackgroundColor,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
    };
  }, [
    frameDivPadding,
    frameDivBorderRadius,
    frameDivBackgroundColor,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
    };
  }, [buttonFontSize]);

  return (
    <div
      className={`self-stretch rounded-81xl bg-gray flex flex-row items-center justify-center py-[1rem] px-[2rem] text-left text-[0.875rem] text-white font-plus-jakarta-sans ${className}`}
      data-property1={property1}
      style={frameDivStyle}
    >
      {button}
    </div>
  );
};

export default FrameComponent2;
