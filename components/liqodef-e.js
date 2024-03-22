import { useMemo } from "react";

const LiqodefE = ({
  mainProductList6jpg,
  oTKBoots,
  prop,
  propAlignSelf,
  propBackgroundImage,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      backgroundImage: propBackgroundImage,
    };
  }, [propAlignSelf, propBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const oTKBootsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch flex-1 box-border flex flex-col items-start justify-start pt-0 px-0 pb-px max-w-full z-[2] text-center text-smi text-black font-noto-sans border-r-[1px] border-solid border-black border-b-[1px]">
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start py-[21px] pr-[25.100000000000023px] pl-[367.7px] box-border gap-[13px] bg-[url('/mainproductlist6jpg@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"
        style={frameDivStyle}
      >
        <img
          className="w-[408.8px] h-[554.3px] relative object-cover hidden max-w-full"
          alt=""
          src={mainProductList6jpg}
        />
        <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
          <img
            className="h-[15px] w-[13px] relative z-[1]"
            alt=""
            src="/pseudo-1.svg"
          />
        </div>
        <img
          className="w-4 h-[9px] relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/pseudo-wrapper.svg"
        />
      </div>
      <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-between pt-0 px-[30.000000000000018px] pb-3.5 gap-[20px] border-t-[1px] border-solid border-black">
        <div
          className="w-[77.8px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border"
          style={frameDiv1Style}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
            <div
              className="self-stretch relative tracking-[0.65px] leading-[18px] uppercase font-medium inline-block min-w-[77.8px]"
              style={oTKBootsStyle}
            >
              {oTKBoots}
            </div>
            <div
              className="relative text-sm leading-[19px] font-nunito-sans text-gray-100 text-left inline-block min-w-[54px] whitespace-nowrap"
              style={divStyle}
            >
              {prop}
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

export default LiqodefE;
