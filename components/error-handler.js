import { useMemo } from "react";

const ErrorHandler = ({ divqodefEMediaImage, propHeight }) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="self-stretch h-[560.5px] flex flex-row items-start justify-start p-5 box-border relative text-left text-xs text-black font-nunito-sans"
      style={errorHandlerStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={divqodefEMediaImage}
      />
      <div className="bg-white flex flex-row items-start justify-start pt-2 px-2 pb-1.5 whitespace-nowrap z-[1] border-[1px] border-solid border-black">
        <div className="relative tracking-[0.6px] leading-[16px] uppercase">
          September 29, 2022
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
