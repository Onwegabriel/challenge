import { useMemo } from "react";

const LiqodefE1 = ({
  mainProductList1jpg,
  new1,
  blackJacket,
  functionCaller,
  propLeft,
  propRight,
  propBackgroundImage,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propDisplay,
  propWidth1,
  propMinWidth,
}) => {
  const liqodefEStyle = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  const outputProducerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const eventTriggerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const graphEdgeStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const blackJacketStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      display: propDisplay,
      width: propWidth1,
    };
  }, [propAlignSelf1, propDisplay, propWidth1]);

  const functionCallerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[409.8px] !m-[0] absolute top-[20px] left-[0px] box-border flex flex-col items-start justify-start pt-0 px-0 pb-px max-w-full text-left text-smi text-black font-noto-sans border-r-[1px] border-solid border-black border-b-[1px]"
      style={liqodefEStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-between pt-5 pb-[496.2999999999999px] pr-[25px] pl-5 box-border bg-[url('/mainproductlist1jpg@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]"
        style={outputProducerStyle}
      >
        <img
          className="h-[554.3px] w-[408.8px] relative object-cover hidden max-w-full"
          alt=""
          src={mainProductList1jpg}
        />
        <div className="w-[43.2px] bg-white box-border flex flex-row items-start justify-start pt-0 pb-px pr-[5px] pl-[7px] z-[1] border-[1px] border-solid border-black">
          <div className="relative leading-[13px] uppercase inline-block min-w-[29.4px]">
            {new1}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="w-4 h-[37px] relative">
            <img
              className="absolute top-[0px] left-[1px] w-[13px] h-[15px] z-[1]"
              alt=""
              src="/pseudo-1.svg"
            />
            <img
              className="absolute top-[28px] left-[0px] w-4 h-[9px] overflow-hidden z-[1]"
              alt=""
              src="/pseudo-wrapper.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-between pt-0 px-[30px] pb-3.5 gap-[20px] text-center border-t-[1px] border-solid border-black">
        <div
          className="w-[94.6px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border"
          style={eventTriggerStyle}
        >
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[2px]"
            style={graphEdgeStyle}
          >
            <div
              className="self-stretch relative tracking-[0.65px] leading-[18px] uppercase font-medium inline-block min-w-[94.6px]"
              style={blackJacketStyle}
            >
              {blackJacket}
            </div>
            <div
              className="relative text-sm leading-[19px] font-nunito-sans text-gray-100 text-left inline-block min-w-[54px] whitespace-nowrap"
              style={functionCallerStyle}
            >
              {functionCaller}
            </div>
          </div>
        </div>
        <img
          className="h-[69px] w-[69px] relative"
          loading="lazy"
          alt=""
          src="/add-black-jacket-to-your-cart.svg"
        />
      </div>
    </div>
  );
};

export default LiqodefE1;
